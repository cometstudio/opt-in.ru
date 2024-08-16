import {defaultProcess} from '@/types/app/Process'
import {has, set, mapValues} from 'lodash'
import {ref} from 'vue'

const useProcesses = (process_ids = <string[]>[]) => {
	const processes = ref<object>({})
	process_ids.forEach((process_id: string) => processes.value[process_id] = defaultProcess())

	const runProcess = (process_id: string) => {
		has(processes.value, `${process_id}.running`) ? processes.value[process_id].running++ : set(processes.value, process_id, {running: 1})
	}
	const stopProcess = (process_id: string) => has(processes.value, `${process_id}.running`) ? processes.value[process_id].running-- : 0
	const resetProcesses = () => processes.value = mapValues(processes.value, defaultProcess)
	const isProcessRunning = (process_id: string) => !!processes.value[process_id]?.running

	return {
		processes,
		runProcess,
		stopProcess,
		isProcessRunning,
		resetProcesses,
	}
}

export default useProcesses