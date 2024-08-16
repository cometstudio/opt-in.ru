export default interface Category {
	id?: number
	name?: string
	parent_id?: number
	parent?: Category
}

export const defaultCategory = (): Category => {
	return {}
}