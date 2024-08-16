import AuthUser, {defaultAuthUser} from '@/types/auth/AuthUser'
import Captcha, {defaultCaptcha} from '@/types/auth/Captcha'

export default interface LoginForm {
	user: AuthUser
	captcha: Captcha
}

export const defaultLoginForm = (): LoginForm => {
	return {
		user: defaultAuthUser(),
		captcha: defaultCaptcha(),
	}
}
