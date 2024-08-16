<template lang="pug">
.container.sender.is-fullhd
	template(v-if="!isProcessRunning('get_sender')")
		section.section
			.breadcrumb.sender-categories(v-if="sender_main_category" itemscope itemtype="https://schema.org/BreadcrumbList")
				ul
					li(itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem")
						router-link.navbar-item.sender-categories-breadcrumb(:to="{name: 'senders'}" itemprop="item")
							span(itemprop="name") Каталог отправителей
					SenderCategoryBreadcrumbComponent.is-large(:category="sender_main_category")
			h1.title.is-size-1 {{ `Пришла смс от ${sender.name}` }}
			h2.title.is-size-5(v-if="sender.description?.length") {{ sender.description }}
			.field
				input.switch.is-rounded.is-medium(v-model="sender_refused" :id="`sender_${sender.id}_refusal`" :disabled="isProcessRunning('modify_sender_refusal')" type="checkbox")
				label(:for="`sender_${sender.id}_refusal`") Отписан
		section.section(v-if="false & sender.owner_name")
			h2.title.is-size-5 {{ `Информация о компании ${sender.owner_name}, кому принадлежит ${sender.name}` }}
			.block
				p Название компании: {{ sender.owner_name }}
				p(v-if="sender.web_host") Сайт: <a :href="`http://${sender.web_host}`" target="_blank">{{ sender.web_host }}</a>
				p(v-if="sender.related_senders.length" )
					span.mr-1 Другие имена при sms-рассылках:
					template(v-for="(related_sender, i) in sender.related_senders")
						span(v-if="i" v-html="`, `" )
						router-link(:to="{name: 'sender', params: {id: related_sender.id}}") {{ related_sender.name }}
	template(v-else)
		section.section Подождите...
</template>

<script lang="ts">
import {defineComponent, ref, shallowRef, computed, watch, onBeforeMount, onBeforeUnmount} from 'vue'
import {useRouter} from 'vue-router'
import useAuthStore from '@/pinia/auth'
import useSendersStore from '@/pinia/senders'
import useProcesses from '@/composables/useProcesses'
import useWatchers from '@/composables/useWatchers'
import useDOM from '@/composables/useDOM'
import Sender, {defaultSender} from '@/types/senders/Sender'
import Category from '@/types/categories/Category'
import SenderCardComponent from '@/components/senders/SenderCard.vue'
import SenderCategoryBreadcrumbComponent from '@/components/senders/SenderCategoryBreadcrumb.vue'

export default defineComponent({
	props: {
		id: {
			type: String,
			required: true
		}
	},
	components: {
		SenderCardComponent,
		SenderCategoryBreadcrumbComponent,
	},
	setup(props) {
		const router = useRouter()
		const DOM = useDOM()
		const auth_store = useAuthStore()
		const senders_store = useSendersStore()
		const sender = ref<Sender>(defaultSender())
		const sender_main_category = computed<Category|null>(() => sender.value.categories?.length ? sender.value.categories[0] : null)
		const sender_refused = shallowRef<boolean>(false)

		const {
			runProcess,
			stopProcess,
			isProcessRunning,
			resetProcesses,
		} = useProcesses([
				'get_sender',
				'modify_sender_refusal',
		])

		const {
			watchers,
			unwatchAll,
		} = useWatchers([
			'sender_id',
			'sender_refused',
		])

		const watchSenderRefused = () => watchers['sender_refused'] = watch(sender_refused, (refused: boolean) => {
			if(!auth_store.is_user_logged_in){
				router.push({name: 'auth'})
				return
			}

			runProcess('modify_sender_refusal')

			if(refused){
				senders_store.refuseSender(sender.value)
						.finally(() => stopProcess('modify_sender_refusal'))
			}else{
				senders_store.allowSender(sender.value)
						.finally(() => stopProcess('modify_sender_refusal'))
			}
		})

		const getSender = async () => {
			runProcess('get_sender')

			await senders_store.getSender(sender.value)
					.then(r => sender.value = r)
					.then(() => sender_refused.value = !!sender.value.user_refusal)
					.then(() => DOM.setHTMLDocumentTitle(`${sender.value.name}: пришло смс от ${sender.value.name}, отписаться от рассылки сообщений – сервис OPT-IN`))
					.then(() => DOM.setHTMLDocumentMeta('description', `Приходят сообщения от ${sender.value.name}, узнать, кто это: реклама, спам, мошенники, компания или частное лицо, а также отписаться от смс ${sender.value.name} можно бесплатно без регистрации на сайте сервиса OPT-IN.`))
					.then(watchSenderRefused)
					.catch(e => router.push({name: 'app'}))
					.finally(() => stopProcess('get_sender'))
		}

		const watchSenderId = () => watchers['sender_id'] = watch(() => props.id, (id: string) => {
			sender.value.id = +props.id
			getSender()
		}, {
			immediate: true
		})

		onBeforeMount(watchSenderId)
		onBeforeUnmount(resetProcesses)
		onBeforeUnmount(unwatchAll)

		return {
			sender,
			sender_main_category,
			sender_refused,
			isProcessRunning,
		}
	}
})
</script>

<style lang="scss" scoped>

</style>
