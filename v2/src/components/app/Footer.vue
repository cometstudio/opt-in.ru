<template lang="pug">
footer
	.container.is-fullhd
		section.section
			hr
			.columns
				.column
					p
						router-link(:to="{name: 'app.index'}")
							strong Opt-in
					p Сервис управления персональными подписками через смс
					p Тел: +7 (495) 970-04-03
					p E-mail: info@opt-in.ru
				.column.is-narrow
					p © 2021 ООО "ОКСК". Все права защищены
					p
						router-link(:to="{name: 'app.agreement'}") Соглашение об использовании Сайта
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>