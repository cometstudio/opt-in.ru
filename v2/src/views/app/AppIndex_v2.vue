<template lang="pug">
.container-primary
	.container.is-fullhd
		section.section
			.py-5
				.columns.is-vcentered
					.column.is-half
						.block.sk-logo
							a(href="http://www.sk.ru" target="_blank")
								figure
									img(src="/sk_resident_en_small.png")
						.title.is-size-1 Попрощайтесь с назойливой СМС рекламой
						p.is-size-4.has-text-light <router-link :to="{name: 'auth'}">Войдите в личный кабинет</router-link> и узнайте, от каких рассылок вы можете отписаться!
					.column.is-half
						figure
							img(src="/opt-in.ru_catalogue.png")
.container.is-fullhd
	section.section.has-text-centered
		.columns
			.column.is-three-fifths.is-offset-one-fifth
				h1.title OPT-IN — бесплатный сервис, позволяющий отписаться от ненужных SMS рассылок
				p Сервис анализирует все имена отправителей, на которые вы подписаны, а после предлагает их список, где вы в один клик можете отписаться от спама и забыть навсегда о спортзалах, суши-барах и одобренных кредитах.
		.columns.is-multiline
			.column.is-half
				.content-wrapper
					h4.title.is-size-5 Идентификация спама
					p Сервис оперативно определит отправителей, на которых вы подписаны и соберет их в единый список
			.column.is-half
				.content-wrapper
					h4.title.is-size-5 Быстрая отписка
					p Отпишитесь от нежелательной sms-рекламы всего за несколько кликов
			.column.is-half
				.content-wrapper
					h4.title.is-size-5 User-Friendly интерфейс
					p С легкость управляйте своими рекламными подписками с помощью понятного интерфейса
			.column.is-half
				.content-wrapper
					h4.title.is-size-5 Бесплатно
					p Наш сервис абсолютно бесплатный
	section.section.has-text-centered
		.columns
			.column.is-three-fifths.is-offset-one-fifth
				h3.title Чем сервис может быть полезен?
				p.block
					strong Сервис OPT-IN действует на основаниее Nº126-Ф3 "О связи" и Nº38-ФЗ "О рекламе", исходя из которых рекламораспространитель обязан немедленно прекратить распространение рекламы в адрес лица, обратившегося к нему с таким требованием.
				p.block На деле многие компании оставляют без внимания просьбы об отписке или делают рассылки без согласия получателей. Чтобы от них отписаться, нужно потратить немало времени и сил на поиск информации и обращения.
				p.block С помощью нашего сервиса вы сможете отписаться от ненужных смс всего за пару кликов.
	section.section
		.content-wrapper
			.columns
				.column.is-three-fifths.is-offset-one-fifth
					h3.title Узнайте, от чего вы можете отписаться
					p Все, что вам нужно — это подтвердить свой номер телефона для формирования списка отправителей на которых вы подписаны и 10 секунд вашего времени чтобы отписаться от них.
	section.section.has-text-centered
		.columns
			.column.is-three-fifths.is-offset-one-fifth
				h3.title Как работает сервис?
				p.block С помощью нашего сервиса мы формируем единую базу согласий на рассылки, которая соответствует требованиям ФЗ "О рекламе" и предоставляет участникам процесса функционал для исполнения требований законодательства.
	section.section
		.columns
			.column.is-half
				.content-wrapper
					h4.title.is-size-5 Единая база
					p.block С одной стороны к сервису подключены абоненты, а с другой - сеть партнеров, которые заинтересованы в лояльности своих клиентов и более эффективных рассылках. Прежде чем делать рассылку, партнер сверяется с единой базой согласий и проверяет желание абонента получать такие сообщения.
					.block
						figure
							img(src="/agreements_scheme.png")
			.column
				.columns.is-multiline
					.column.is-half
						.content-wrapper
							p.block
								strong С помощью Единой базы, участники процесса решают следующие задачи:
							p.block <strong>Клиенты(Абоненты)</strong> – возможность предоставить согласие, дать быструю обратную связь отправителю рассылки о желании отозвать согласие на рассылку;
							p.block <strong>Партнеры</strong> – оперативно проверять наличие согласия на рассылку конкретного Клиента, возможность загрузить в Единую базу имеющиеся согласия, подтвердив их наличие.

					.column.is-half
						.content-wrapper
							p.block
								strong А что с остальными 45%?
							p.block Партнеров у нас немало, но пока не все. Если в нашем списке партнеров нет отправителя от которого вы хотите отписаться, мы направим ему запрос отписать вас.
							p.block Если от отправителя не последует ответа, то мы поможем вам составить жалобу в ФАС от вашего имени.

					.column.is-half
						.content-wrapper
							p.block
									strong Контролируем 55% всех рассылок РФ
							p.block Исходя из количества партнеров и нашим подсчетам сервис OPT-IN может влиять на 55% рассылок в РФ.

					.column.is-half
						.content-wrapper
							.block
								strong Результат:
							.block Соблюдения режима осуществления рекламных СМС рассылок с возможностью подтверждения наличия предварительного согласия Абонента на получение рассылки.
	section.section
		h3.title Почему это безопасно?
		p.block А. Сервис имеет статус участника проекта "Сколково"
		p.block Б. Для регистрации личного кабинета нужен только ваш номер, чтобы сервис мог определить отправителей на которых вы подписаны. Сам по себе телефонный номер, без привязки к ФИО – это набор обезличенных чисел, которые не несут в себе никакой конкретной информации.
	hr
	section.section
		h3.title Отписка от спама
		.columns
			.column.is-two-thirds
				h4.title.is-size-5 Если хотите отписаться самостоятельно:
				.columns.is-multiline
					.column.is-half
						.content-wrapper Обратитесь в компанию, от имени которой пришло СМС с просьбой больше не присылать sms на ваш номер.
					.column.is-half
						.content-wrapper Найдите sms оператора, через которого делалась рассылка и попросите добавить ваш номер в черный список.
					.column.is-half
						.content-wrapper Отключите прием СМС с коротких номеров. Но в этом случае Вы не будете получать и нужные СМС (от вашего банка, подтверждение паролей и т.д.)
			.column
				h4.title.is-size-5 Через сервис OPT-IN:
				.content-wrapper
					p Пройдите авторизацию при помощи номера телефона
					p Введите имя отправителя от которого не хотите больше получать рассылки или выберите конкретные имена из списка
					p Переключите тумблер “Отписаться”
	section.section
		.content-wrapper
			.columns
				.column.is-three-fifths.is-offset-one-fifth
					h3.title Узнайте, от чего вы можете отписаться
					p Все, что вам нужно — это подтвердить свой номер телефона для формирования списка отправителей на которых вы подписаны и 10 секунд вашего времени чтобы отписаться от них.
	template(v-if="false")
		hr
		section.section
			h3.title СМИ о нас
			.columns
				.column.is-one-quarter(v-for="i in 4")
					p.block
						strong Как избавиться от надоедливого SMS-спама
					p.block Каждый из нас получал SMS рекламного характера. Иногда они приходят в самый неудобный момент и отвлекают от важных дел. Пора с ними бороться. И мы нашли способ. Мы готовы поделиться с вами методом борьбы с SMS-спамом.
					p.block IMG
	section.section.qa
		h3.title Популярные вопросы
		.block
			p
				strong Какова основная цель сервиса?
			p Исполнение Федерального закона "О связи" в части регулирования рассылок по сети электросвязи, обладающая признаками автоматизированной отправки и осуществляемая одновременно или за короткий промежуток времени большому числу абонентов.
		.block
			p
				strong Какой механизм работы сервиса?
			p С одной стороны к сервису подключены абоненты, а с другой - сеть партнеров, в числе которых крупный ретейл и рекламные агентства, которые заинтересованы в лояльности своих клиентов и более эффективных рассылках.
			p Прежде чем делать рассылку партнер проверяет желение абонента получать такие сообщения.
		.block
			p
				strong Вы хотите собрать базу, а потом завалить нас спамом?
			p Конечно же нет. Цель сервиса защитить от спам рассылок, а не увеличить их.
		.block
			p
				strong.has-text-danger А разве ФАС не может отписать меня от СМС рассылок?
		.block
			p
				strong.has-text-danger Если есть закон о рекламе и ФАС, зачем мне пользоваться вашим сайтом?
		.block
			p
				strong Сервис дает 100% гарантию фильтрации сообщений?
			p К сожалению, нет. Партнеров у нас немало, но пока не все. По нашим подсчетам сервис может влиять примерно на 40% рассылок в РФ.
		.block
			p
				strong Почему сервис бесплатный?
			p Считаем, что сервисы такого рода могут развиваться только на безвоздмезной основе, т.к. он лежит в поле правого регулирования взаимоотношений и какой либо порог не даст ему двигаться вперед. Мы одержимы идеей сделать рынок SMS рассылок более цивилизованным в нашей стране.
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
.container{
	&-primary{
		background: $primary;
		//background: radial-gradient(ellipse at 0 50%, lighten(#4648c1, 8%), $primary);
		//background: $primary;
		//background: linear-gradient(180deg, $primary 0%, var(--bulma-scheme-main) 100%);
	}
}
.content-wrapper{
	@include round;

	padding: $size-3;
	background: var(--bulma-scheme-main-bis);
	height: 100%;
}
.section{
	&.qa{
		> .block{
			@include block($size-5);
			@include border($position: bottom);

			padding-bottom: $size-5;
			cursor: pointer;
		}
	}
}
.sk-logo{
	@include round();

	max-width: 60px;
	overflow: hidden;

	img{
		display: block;
		width: 100%;
		aspect-ratio: 120 / 86;
	}
}
</style>
