import {createI18n} from 'vue-i18n'
import {Settings as LuxonSettings} from 'luxon'
import ru from './ru/d'

export const available_locales = ['ru']

const dictionaries = {
	ru,
}

const currency = {
	style: 'currency',
	currency: 'RUR',
	notation: 'standard',
	maximumSignificantDigits: 10
}

const decimal = {
	style: 'decimal',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
}

const number_formats = {
	ru: {
		currency,
		decimal
	},
}

function cyrillicPluralizationRule(choice: number, choicesLength: number) {
	if (choice === 0) {
		return 0
	}

	const teen = choice > 10 && choice < 20
	const endsWithOne = choice % 10 === 1
	if (!teen && endsWithOne) {
		return 1
	}
	if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
		return 2
	}

	return choicesLength < 4 ? 2 : 3
}

const i18n = createI18n({
	legacy: false,
	locale: available_locales[0],
	fallbackLocale: available_locales[available_locales.length],
	pluralRules: {
		ru: cyrillicPluralizationRule
	}
})

export const setGlobalLocale = (locale?: string) => {
	if(!locale) locale = available_locales[0]

	i18n.global.locale.value = locale
	// @ts-ignore
	i18n.global.setLocaleMessage(locale, dictionaries[locale])
	// @ts-ignore
	i18n.global.setNumberFormat(locale, number_formats[locale])

	LuxonSettings.defaultLocale = i18n.global.locale.value
}

export default i18n