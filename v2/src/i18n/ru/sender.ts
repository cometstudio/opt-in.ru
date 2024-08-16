export default {
	title: 'Отправитель',
	messages: {
		title: 'Примеры сообщений',
		searching: 'Поиск примеров сообщений...',
		not_found: 'Примеров сообщений не найдено',
	},
	form: {
		fields: {
			firm: {
				label: 'Компания',
			},
			website: {
				label: 'Web-сайт',
				actions: {
					get_metadata: 'Получить данные'
				},
			},
			website_title: {
				label: 'Заголовок web-сайта',
			},
			description: {
				label: 'Описание',
			},
			keywords: {
				label: 'Ключевые слова',
			},
			inn: {
				label: 'ИНН',
			},
			inn_megafon: {
				label: 'ИНН для Мегафон',
			},
			inn_tele2: {
				label: 'ИНН для Tele2',
			},
			kpp: {
				label: 'КПП',
			},
			ogrn: {
				label: 'ОГРН',
			},
			status: {
				label: 'Статус',
			},
		},
		validation: {
			firm_name: {
				string: 'Значение должно быть строкой',
				max: 'Значение не должно превышать 255 символов',
			},
			ogrn: {
				max: 'Значение не должно превышать 15 символов'
			},
			inn: {
				max: 'Значение не должно превышать 20 символов'
			},
			inn_megafon: {
				numeric: 'Значение должно содержать только цифры',
				max: 'Значение не должно превышать 12 символов'
			},
			inn_tele2: {
				numeric: 'Значение должно содержать только цифры',
				max: 'Значение не должно превышать 12 символов'
			},
			kpp: {
				numeric: 'Значение должно содержать только цифры',
				max: 'Значение не должно превышать 10 символов'
			},
			web_domain: {
				string: 'Значение должно быть строкой',
			},
			web_title: {
				string: 'Значение должно быть строкой',
			},
			web_keywords: {
				string: 'Значение должно быть строкой',
			},
			web_description: {
				string: 'Значение должно быть строкой',
			},
		}
	},
	categories: {
		title: 'Категории отправителей',
		filter: {
			fields: {
				query: 'Категория'
			},
			actions: {
				define: 'Выбрать категории',
				hide: 'Скрыть категории',
			},
		},
	},
	category: {
		form: {
			actions: {
				create: 'Добавить категорию'
			},
			fields: {
				taxonomy_name: {
					label: 'Название'
				},
				taxonomy_parent: {
					label: 'Вышележащая категория'
				},
				taxonomy_words: {
					label: 'Ключевые слова'
				},
				taxonomy_comment: {
					label: 'Описание'
				},
			},
			validation: {
				taxonomy_name: {
					required: 'Укажите название',
					string: 'Значение должно быть строкой',
					max: 'Значение не должно превышать 64 символа',
					exists: 'Категория с таким названием уже существует',
				},
				taxonomy_parent: {
					different: 'Вышележащая категория должна отличаться от редактируемой',
				},
			}
		},
	}
}