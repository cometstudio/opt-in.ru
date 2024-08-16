<template lang="pug">
.container.is-fullhd
	section.section(v-if="!isProcessRunning('get_sender')")
		h1.title.is-size-1 {{ sender.name }}
		h2.title.is-size-5(v-if="sender.description?.length") {{ sender.description }}
		hr
		.field
			input.switch.is-rounded.is-medium(v-model="sender_refused" :id="`sender_${sender.id}_refusal`" :disabled="isProcessRunning('modify_sender_refusal')" type="checkbox")
			label(:for="`sender_${sender.id}_refusal`") Отписан
	section.section
		pre {{ sender }}
</template>

<script lang="ts">
import {defineComponent, ref, shallowRef, watch, onBeforeMount, onBeforeUnmount} from 'vue'
import {useRouter} from 'vue-router'
import useAuthStore from '@/pinia/auth'
import useSendersStore from '@/pinia/senders'
import useProcesses from '@/composables/useProcesses'
import useWatchers from '@/composables/useWatchers'
import useDOM from '@/composables/useDOM'
import Sender, {defaultSender} from '@/types/senders/Sender'
import SenderCardComponent from '@/components/senders/SenderCard.vue'

export default defineComponent({
	components: {
		SenderCardComponent,
	},
	props: {
		id: {
			type: String,
			required: true
		}
	},
	setup(props) {
		const router = useRouter()
		const DOM = useDOM()
		const auth_store = useAuthStore()
		const senders_store = useSendersStore()
		const sender = ref<Sender>(defaultSender())
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
					.then(() => DOM.setHTMLDocumentTitle(sender.value.name))
					.then(watchSenderRefused)
					.catch(e => router.push({name: 'app'}))
					.finally(() => stopProcess('get_sender'))
		}

		onBeforeMount(() => {
			sender.value.id = +props.id
			getSender()
		})
		onBeforeUnmount(resetProcesses)
		onBeforeUnmount(unwatchAll)

		return {
			sender,
			sender_refused,
			isProcessRunning,
		}
	}
})
</script>

<style lang="scss" scoped>
.senders{
	> .block{
		@include block(1px);
	}
}
</style>
