import SenderRefusal from '@/types/senders/SenderRefusal'
import Category from '@/types/categories/Category'

export default interface Sender {
	id?: number
	name?: string
	weight?: number
	description?: string
	created_at?: string
	updated_at?: string
	shared?: boolean
	owner_name?: string
	web_host?: string
	inn?: string
	kpp?: string
	ogrn?: string
	user_refusal?: SenderRefusal
	categories?: Category[]
	related_senders?: Sender[]
}

export const defaultSender = (): Sender => {
	return {}
}