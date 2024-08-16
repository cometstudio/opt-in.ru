import AuthUser from '@/types/auth/AuthUser'
import Captcha from '@/types/auth/Captcha'
import LoginForm from '@/types/auth/LoginForm'

export default interface AuthStore{
	user: AuthUser
	is_user_logged_in: boolean
	getCaptcha: () => Promise<Captcha>
	logIn: (login_form: LoginForm) => Promise<AuthUser>
	verifyLogin: (login_form: LoginForm) => Promise<AuthUser>
	logOut: () => Promise<AuthUser>
}
