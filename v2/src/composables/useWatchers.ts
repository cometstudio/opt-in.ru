import {difference} from 'lodash'
import {WatchStopHandle} from 'vue'

type watchersType = {[key: string]: WatchStopHandle}

const useWatchers = (entries: string[]) => {
    const watchers = <watchersType>{}

    entries.map(entry => watchers[entry] = (): void => {})

    const unwatch = (entry: string): void => watchers[entry]()

    const unwatchAll = () => {
        for (const [k, entry] of Object.entries(watchers)) {
            if(typeof entry === 'function') entry()
        }
    }

    const unwatchExcept = (entries: string|string[]) => {
        if (typeof entries === 'string') entries = [entries]
        const diff =  difference(Object.keys(watchers), entries)
        diff.forEach(entry => {
            watchers[entry]()
        })
    }

    return {
        watchers,
        unwatch,
        unwatchExcept,
        unwatchAll
    }
}

export default useWatchers