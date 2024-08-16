export default interface Captcha {
	src?: string
	hash?: string
	key?: string
}

export const defaultCaptcha = (): Captcha => {
	return {}
}