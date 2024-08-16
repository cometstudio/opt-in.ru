export default interface Process {
    running: number
}

export const defaultProcess = (): Process => {
    return {
        running: 0
    }
}