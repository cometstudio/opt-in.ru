export default interface Filter {
    context: {
        page?: number
    }
    content: {}
}

export const defaultFilter = (): Filter => {
    return {
        context: {
            page: 1
        },
        content: {}
    }
}