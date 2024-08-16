<template lang="pug">
.help.is-danger(v-if="error_messages" v-for="error_message in error_messages") {{ getTranslatedMessage(error_message) }}
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {useI18n} from 'vue-i18n'
import useForm from '@/composables/useForm'

export default defineComponent({
  props: {
    d: {
      type: String
    },
    errors: {
      type: Object,
      required: true
    },
    property: {
      type: String,
      required: true
    }
  },
  setup(props){
    const {t} = useI18n()

    const {
      pickErrorMessages
    } = useForm()

    const error_messages = computed(() => pickErrorMessages(props.errors, props.property))

    const getTranslatedMessage = error_message => t(props.d ? `${props.d}.${props.property}.${error_message}` : error_message)

    return {
      t,
      getTranslatedMessage,
      error_messages
    }
  }
})
</script>

<style lang="scss" scoped></style>