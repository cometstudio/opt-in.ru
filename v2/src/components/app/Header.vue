<template lang="pug">
header
	.container.is-fullhd
		section.section.py-3
			nav.navbar
				.navbar-brand
					router-link.navbar-item(:to="{name: 'app.index'}")
						router-link(:to="{name: 'app'}")
						b {{ t('app.name') }}
					a.navbar-burger(@click="toggleMenuVisibility" :class="{'is-active': menu_visible}")
						span(v-for="i in 4")

				.navbar-menu(:class="{'is-active': menu_visible}")
					.navbar-start
						.navbar-item.has-dropdown.is-hoverable
							router-link.navbar-link(:to="{name: 'app.about'}") О сервисе
							.navbar-dropdown
								router-link.navbar-item(:to="{name: 'app.agreement'}").navbar-item Соглашение об использовании Сайта
						router-link.navbar-item(:to="{name: 'senders'}") Каталог отправителей

					.navbar-end
						span.navbar-item(v-if="auth_store.is_user_logged_in") {{ auth_store.user.phone }}
						.navbar-item
							.buttons
								router-link(v-if="!auth_store.is_user_logged_in" :to="{name: 'auth'}").button.is-primary Войти
								button(v-else @click="logOut").button.is-primary Выйти
</template>

<script lang="ts">
import {defineComponent, shallowRef} from 'vue'
import {useRouter} from 'vue-router'
import {useI18n} from 'vue-i18n'
import useAuthStore from '@/pinia/auth'

export default defineComponent({
	components: {},
	setup() {
		const {t} = useI18n()
		const router = useRouter()
		const auth_store = useAuthStore()
		const menu_visible = shallowRef(false)

		const toggleMenuVisibility = () => menu_visible.value = !menu_visible.value

		const logOut = () => auth_store.logOut()
				.then(() => router.push({name: 'app'}))

		return {
			t,
			auth_store,
			menu_visible,
			toggleMenuVisibility,
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