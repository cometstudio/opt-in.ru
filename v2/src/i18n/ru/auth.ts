export default {
	title: 'Добро пожаловать',
	login: {
		title: 'Войти',
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
				user: {
					phone: {
						required: 'Укажите номер телефона',
						numeric: 'Номер телефона должен содержать цифры с кодом страны',
						exists: 'Этот номер телефона уже зарегистрирован',
					},
					verification_key: {
						required: 'Укажите код из SMS',
						digits: 'Укажите правильный код из SMS',
						numeric: 'Укажите правильный код из SMS',
						exists: 'Укажите правильный код из SMS',
					},
				},
				captcha: {
					code: {
						required: 'Повторите символы',
						failed: 'Повторите символы правильно',
					},
				},
			},
		},
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