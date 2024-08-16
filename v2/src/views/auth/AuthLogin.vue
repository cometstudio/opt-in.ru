<template lang="pug">
.container.is-fullhd
	section.section
		h1.title.is-size-1 Войти
	section.section
		form.login-form(@submit.prevent="loginFormAction")
			.field
				label.label Номер телефона
				.control
					input.input(v-model="login_form.user.phone" :class="{'is-danger': loginFormHasErrorMessages(login_form_errors, 'user.phone')}" type="text" placeholder="" autocomplete="off")
				FieldErrorMessageComponent(:errors="login_form_errors" d="auth.login.form.validation" property="user.phone")
			.field
				label.label Повторите символы
				.control.captcha.is-flex
					.captcha-img.mr-2
						img(:src="login_form.captcha.src")
					.captcha-input
						input.input(v-model="login_form.captcha.code" :class="{'is-danger': loginFormHasErrorMessages(login_form_errors, 'captcha.code')}" type="text" placeholder="" autocomplete="off")
				FieldErrorMessageComponent(:errors="login_form_errors" d="auth.login.form.validation" property="captcha.code")
			.field(v-if="verification_expected")
				label.label  Код из SMS
				.control
					input.input(v-model="login_form.user.verification_key" :class="{'is-danger': loginFormHasErrorMessages(login_form_errors, 'user.verification_key')}" type="text" placeholder="" autocomplete="off")
				FieldErrorMessageComponent(:errors="login_form_errors" d="auth.login.form.validation" property="user.verification_key")
			.field
				button.button.is-primary(type="submit" :class="{'is-loading': isProcessRunning('login')}") {{ verification_expected ? 'Войти' : 'Отправить SMS-код' }}
</template>

<script lang="ts">
import {defineComponent, ref, shallowRef, computed, onBeforeMount, onBeforeUnmount} from 'vue'
import {useRouter} from 'vue-router'
import useAuthStore from '@/pinia/auth'
import useForm from '@/composables/useForm'
import useProcesses from '@/composables/useProcesses'
import LoginForm, {defaultLoginForm} from '@/types/auth/LoginForm'
import FieldErrorMessageComponent from '@/components/app/FieldErrorMessage.vue'

export default defineComponent({
	components: {
		FieldErrorMessageComponent,
	},
	setup() {
		const router = useRouter()
		const auth_store = useAuthStore()
		const verification_expected = shallowRef(false)
		const loginFormAction = computed(() => verification_expected.value ? verifyLogin : login)

		const {
			runProcess,
			stopProcess,
			isProcessRunning,
			resetProcesses,
		} = useProcesses([
				'get_captcha',
				'login',
		])

		const {
			form: login_form,
			errors: login_form_errors,
			resetErrors: resetLoginFormErrors,
			setErrors: setLoginFormErrors,
			hasErrorMessages: loginFormHasErrorMessages
		} = useForm<LoginForm>(defaultLoginForm())

		const getCaptcha = async () => {
			runProcess('get_captcha')
			resetLoginFormErrors()

			await auth_store.getCaptcha()
					.then(r => login_form.value.captcha = r)
					.finally(() => stopProcess('get_captcha'))
		}

		const login = async () => {
			runProcess('login')
			resetLoginFormErrors()

			await auth_store.logIn(login_form.value)
					.then(() => verification_expected.value = true)
					.catch(e => {
						getCaptcha()
						setLoginFormErrors(e)
					})
					.finally(() => stopProcess('login'))
		}

		const verifyLogin = async () => {
			runProcess('login')

			await auth_store.verifyLogin(login_form.value)
					.then(() => router.push({name: 'senders'}))
					.catch(e => {
						getCaptcha()
						setLoginFormErrors(e)
					})
					.finally(() => stopProcess('login'))
		}

		onBeforeMount(resetLoginFormErrors)
		onBeforeMount(getCaptcha)
		onBeforeUnmount(resetProcesses)

		return {
			isProcessRunning,
			verification_expected,
			login_form,
			login_form_errors,
			loginFormHasErrorMessages,
			loginFormAction,
		}
	}
})
</script>

<style lang="scss" scoped>
.login-form{
	.captcha{
		&-img{
			display: inline-block;
			width: 160px;
			height: 40px;

			img{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		&-input{
			flex-grow: 1;
		}
	}


	@include tablet{
		max-width: 50%;
	}
}
</style>
