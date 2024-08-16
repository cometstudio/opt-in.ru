export default interface AuthUser {
	id?: number
	name?: string
	email?: string
	email_verified_at?: string
	phone?: number
	api_token?: string
	created_at?: string
	updated_at?: string
	verification_key?: number
}

export const defaultAuthUser = (): AuthUser => {
	return {}
}