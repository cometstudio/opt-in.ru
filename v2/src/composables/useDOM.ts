//import i18n from '@/i18n'

const useDOM = () => {
	//const {t} = i18n.global

	// Set HTML title tag content
	const setHTMLDocumentTitle = (title?: string) => {
		//const appendix = `${t('app.description')} ${t('app.name')}`
		document.title = title ?? '' // ? `${title} - ${appendix}` : appendix
	}
	// Set HTML meta tags content
	const setHTMLDocumentMeta = (name: string, content: string) => {
		let tag = document.getElementsByTagName('meta')[name]

		if (tag) {
			tag.content = content
		} else {
			tag = document.createElement('meta')
			tag.name = name
			tag.content = content
			document.head.appendChild(tag)
		}
	}
	// Remove HTML meta tag
	const removeHTMLDocumentMeta = (name: string) => {
		const tag = document.querySelector(`meta[name="${name}"]`)
		if (tag) tag.remove()
	}

	const setHTMLLinkElement = (href: string) => {
		let tag: HTMLLinkElement|null = document.querySelector('link[rel="canonical"]')

		if (tag) {
			tag.href = href
		} else {
			tag = document.createElement('link')
			tag.rel = 'canonical'
			tag.href = href
			document.head.appendChild(tag)
		}
	}

	// Textarea auto resizing
	const autoresizeTextarea = el => {
		if(el) {
			el.style.boxSizing = 'border-box'
			el.style.resize = 'none'

			const adapt = el => {
				const offset = el.offsetHeight - el.clientHeight
				el.style.height = 'auto'
				el.style.height = el.scrollHeight + offset + 'px'
			}

			adapt(el)

			el.addEventListener('input', event => adapt(event.target))
		}
	}

	return {
		setHTMLDocumentTitle,
		setHTMLDocumentMeta,
		setHTMLLinkElement,
		removeHTMLDocumentMeta,
		autoresizeTextarea,
	}
}

export default useDOM