import {has} from 'lodash'
import {ref} from 'vue'

const useForm = <T>(default_form) => {
    const form = ref<T>(default_form)
    // Errors
    const errors = ref<Object>({})
    const resetErrors = () => errors.value = {}
    const setErrors = e => {
        errors.value = e.response?.data.errors
        return e
    }
    const hasErrorMessages = (errors, property) =>has(errors, property)
    const pickErrorMessages = (errors, property) => hasErrorMessages(errors, property) ? errors[property] : null

    return {
        form,
        errors,
        resetErrors,
        setErrors,
        hasErrorMessages,
        pickErrorMessages
    }
}

export default useForm