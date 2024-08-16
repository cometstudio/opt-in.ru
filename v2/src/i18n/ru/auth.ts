export default {
	title: 'Добро пожаловать',
	form: {
		email: {
			label: 'E-mail',
		},
		password: {
			label: 'Пароль',
		},
		actions: {
			login: 'Войти',
			logout: 'Выйти',
			signup: 'Зарегистрироваться',
			reset_password: 'Сменить забытый пароль',
		},
		validation: {
			email: {
				required: 'Укажите e-mail',
				email: 'Укажите корректный e-mail',
				exists: 'Этот e-mail уже зарегистрирован',
				unverified: 'Этот e-mail зарегистрирован, но не подтверждён',
			},
			password: {
				required: 'Укажите пароль',
				min: 'Пароль должен быть 6 символов минимум',
				max: 'Пароль должен быть 32 символа максимум',
				letters: 'Пароль должен содержать буквы',
				numbers: 'Пароль должен содержать цифры',
				mixed: 'Пароль должен содержать буквы и цифры',
				failed: 'Ошибочный пароль',

			},
		},
	},
	login: {
		title: 'Войти',
	},
	signup: {
		title: 'Зарегистрироваться',
	},
	password: {
		set: {
			title: 'Укажите ваш новый пароль',
			subtitle: 'Укажите ваш новый пароль вместе с кодом, который мы отправили на указанный адрес e-mail',
			form: {
				code: {
					valid_until: 'Код действителен до {date}',
				},
				submit: 'Сохранить пароль',
			}
		},
		reset: {
			title: 'Сменить забытый пароль',
			actions: {
				continue: 'Продолжить',
			}
		}
	},
}