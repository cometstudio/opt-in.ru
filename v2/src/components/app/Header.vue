<template lang="pug">
header
	.container.is-fullhd
		section.section.py-3
			nav.navbar
				.navbar-brand
					router-link.navbar-item(:to="{name: 'app.index'}")
						router-link(:to="{name: 'app'}")
						b {{ t('app.name') }}
					a.navbar-burger._is-active
						span(v-for="i in 4")

				.navbar-menu
					.navbar-start
						router-link.navbar-item(:to="{name: 'app.about'}") О сервисе
						router-link.navbar-item(:to="{name: 'senders'}") Каталог отправителей

					.navbar-end
						router-link.navbar-item(v-if="auth_store.is_user_logged_in" :to="{name: 'app.about'}") {{ auth_store.user.phone }}
						.navbar-item
							.buttons
								router-link(v-if="!auth_store.is_user_logged_in" :to="{name: 'auth'}").button.is-primary Войти
								button(v-else @click="logOut").button.is-primary Выйти
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useRouter} from 'vue-router'
import {useI18n} from 'vue-i18n'
import useAuthStore from '@/pinia/auth'

export default defineComponent({
	components: {},
	setup() {
		const {t} = useI18n()
		const router = useRouter()
		const auth_store = useAuthStore()

		const logOut = () => auth_store.logOut()
				.then(() => router.push({name: 'app'}))

		return {
			t,
			auth_store,
			logOut,
		}
	}
})
</script>

<style scoped lang="scss">
.navbar{
	&-brand{
		.navbar-item{
			//color: red;
		}
	}
}
</style>