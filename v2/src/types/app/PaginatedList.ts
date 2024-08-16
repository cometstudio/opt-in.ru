export default interface PaginatedList<T> {
    current_page: number
    data?: T[]
    total?: number
    per_page?: number
    last_page?: number
    to?: number
}

export const defaultPaginatedList = <T>(): PaginatedList<T> => {
    return {
        current_page: 1,
        data: [],
    }
}