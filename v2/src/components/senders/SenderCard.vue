<template lang="pug">
.sender-card.is-flex.is-clickable
		//.sender-card-logo.mr-4
		//	figure
		//		img(src="/pyatyorochka.png")
		.is-flex-grow-2
			.is-flex-tablet.is-justify-content-space-between
				.sender-card-info.mr-5
					p.is-size-5
						router-link(:to="{name: 'sender', params: {id: sender.id}}")
							strong {{ sender.name }}
					p(v-if="sender.description?.length") {{ sender.description }}
				.field
					input.switch.is-rounded(v-model="sender_refused" :id="`sender_${sender.id}_refusal`" :checked="sender_refused" :disabled="isProcessRunning('modify_sender_refusal')" type="checkbox")
					label(:for="`sender_${sender.id}_refusal`") Отписан
</template>

<script lang="ts">
import {defineComponent, shallowRef, watch, PropType, onBeforeMount, onBeforeUnmount} from 'vue'
import {useRouter} from 'vue-router'
import useAuthStore from '@/pinia/auth'
import useSendersStore from '@/pinia/senders'
import useWatchers from '@/composables/useWatchers'
import useProcesses from '@/composables/useProcesses'
import Sender, {defaultSender} from '@/types/senders/Sender'

export default defineComponent({
	props: {
		sender: {
			type: Object as PropType<Sender>,
			default: defaultSender()
		},
	},
	setup(props) {
		const router = useRouter()
		const auth_store = useAuthStore()
		const senders_store = useSendersStore()
		const sender_refused = shallowRef<boolean>(!!props.sender.user_refusal)

		const {
			runProcess,
			stopProcess,
			isProcessRunning,
			resetProcesses,
		} = useProcesses([
				'modify_sender_refusal',
		])

		const {
			watchers,
			unwatchAll,
		} = useWatchers([
				'sender_refused',
		])

		const watchSenderRefused = () => watchers['sender_refused'] = watch(sender_refused, (refused: boolean) => {
			if(!auth_store.is_user_logged_in){
				router.push({name: 'auth'})
				return
			}

			runProcess('modify_sender_refusal')

			if(refused){
				senders_store.refuseSender(props.sender)
						.finally(() => stopProcess('modify_sender_refusal'))
			}else{
				senders_store.allowSender(props.sender)
						.finally(() => stopProcess('modify_sender_refusal'))
			}
		})

		onBeforeMount(watchSenderRefused)
		onBeforeUnmount(unwatchAll)
		onBeforeUnmount(resetProcesses)

		return {
			sender_refused,
			isProcessRunning,
		}
	}
})
</script>

<style scoped lang="scss">
.sender-card{
	@include border($position: bottom);

	padding: var(--bulma-size-7) var(--bulma-size-5);
	transition: var(--bulma-speed);
	//background: var(--bulma-scheme-main-ter);

	&-logo{
		@include round;

		max-width: 54px;
		overflow: hidden;

		img{
			width: 100%;
		}
	}
	&:hover{
		background: var(--bulma-scheme-main-bis);
	}
}
</style>