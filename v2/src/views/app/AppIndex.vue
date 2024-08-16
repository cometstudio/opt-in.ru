<template lang="pug">
.c-1
	.container.is-fullhd
		section.section.has-text-centered
			h1.title.has-text-white Отпишитесь от спама
			.subtitle.mt-5.is-size-4.has-text-white Заблокируйте получение рекламных сообщений, выбрав из списка отправителей, или указав его имя
			.title.mt-5.is-size-2.has-text-white Легко и бесплатно
.container.is-fullhd
	section.section
		.block.has-text-centered
			h1.title.is-size-2 Популярные отправители
			.subtitle.mt-5 Мы составили список отправителей, рекламные сообщения от которых люди получают чаще всего
			.title.mt-5.is-size-4 Отпишитесь от любого из них:
		.block.senders
			SenderCardComponent.block(v-for="sender in sender_suggestions" :sender="sender")
		.block.has-text-centered
			router-link.button.is-primary(:to="{name: 'senders'}") Каталог отправителей
	section.section.how-it-works.has-text-centered
		h1.title.is-size-2 Как это работает?
		.columns
			.column
				p 1. Запомните имя отправителя, приславшего вам сообщение;
				figure
					img(src="/iphone-14.png")
			.column
				p 2. Войдите в личный кабинет, подтвердив свой номер телефона полученным кодом;
				figure
					img(src="/iphone-14.png")
			.column
				p 3. Отпишитесь, найдя отправителя в списке, или добавив его самостоятельно.
				figure
					img(src="/iphone-14.png")
</template>

<script lang="ts">
import {defineComponent, ref, onBeforeMount} from 'vue'
import {useI18n} from 'vue-i18n'
import useDOM from '@/composables/useDOM'
import useAuthStore from '@/pinia/auth'
import useSendersStore from '@/pinia/senders'
import Sender from '@/types/senders/Sender'
import SenderCardComponent from '@/components/senders/SenderCard.vue'

export default defineComponent({
	components: {
		SenderCardComponent,
	},
	setup() {
		const DOM = useDOM()
		const {t} = useI18n()
		const auth_store = useAuthStore()
		const senders_store = useSendersStore()
		const sender_suggestions = ref<Sender[]>([])

		const getSenderSuggestions = (): Promise<Sender[]> => senders_store.getSenderSuggestions()
				.then(r => sender_suggestions.value = r)

		onBeforeMount(() => DOM.setHTMLDocumentTitle(t('app.title')))
		onBeforeMount(getSenderSuggestions)

		return {
			auth_store,
			sender_suggestions,
		}
	}
})
</script>

<style lang="scss" scoped>
.senders{
	> .block{
		@include block(calc(var(--bulma-control-border-width) * 3));
	}
}

.c-1{
	$paddingY: $size-5 * 2;
	padding-top: $paddingY;
	padding-bottom: $paddingY;
	background: $primary;
	//background: radial-gradient(ellipse at 0 50%, lighten(#4648c1, 8%), $primary);

	h1{
		font-size: 4rem;
		line-height: calc(var(--bulma-body-line-height) * 0.85);
	}
	.subtitle{
		display: block;
		max-width: 100%;
		margin: 0 auto;

		@include desktop {
			max-width: 75%;
		}
	}
}
.how-it-works {
	p{
		@include lineClamp(3);

		@include tablet {
			min-height: calc(var(--bulma-body-line-height) * 3em);
		}
	}
	figure{
		display: block;
		margin-top: $block-spacing;

		img{
			max-width: 55%;
		}

		@include tablet {
			min-height: calc(var(--bulma-body-line-height) * 3em);

			img{
				max-width: 75%;
			}
		}
	}
}
.senders-grid{
	align-items: center;
	border-bottom: 1px solid var(--bulma-border-weak);

	.column{
		$paddingY: $size-7 / 3;

		padding-top: $paddingY;
		padding-bottom: $paddingY;
	}
}
</style>
