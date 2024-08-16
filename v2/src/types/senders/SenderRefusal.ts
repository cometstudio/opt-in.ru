export default interface SenderRefusal {
	id?: number
	user_id?: number
	sender_id?: number
	created_at?: string
	updated_at?: string
}

export const defaultSenderRefusal = (): SenderRefusal => {
	return {}
}