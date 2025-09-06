// Переводы для всех компонентов сайта
const translations = {
	en: {
		// Header
		header: {
			navigation: {
				about: 'About',
				joinUs: 'Join us',
				contacts: 'Contacts',
				career: 'Career',
			}
		},

		// Hero
		hero: {
			title: 'Juicy Media Buying',
			subtitle: "We\u00A0don't push campaigns –",
			subtitleBreak: 'we\u00A0push limits'
		},

		// Marquee
		marquee: {
			trafficWorldwide: 'Traffic Worldwide',
			killerResults: {
				part1: 'Killer Results',
				part2: 'Unlimited Traffic'
			},
			join: 'New Roles Unlocked',
		},

		// Statistics
		statistics: {
			title: {
				part1: 'Global\u00A0traffic,',
				part2: 'no\u00A0brakes'
			},
			items: [
				{
					number: '6 years',
					description: 'in\u00A0the\u00A0game'
				},
				{
					number: '4 verticals',
					description: 'Search Arbitrage, Leadgen, Finance\u00A0&\u00A0iGaming'
				},
				{
					number: '10+',
					description: 'traffic sources'
				},
				{
					number: '70+',
					description: 'pros cooking wins daily'
				}
			],
			text: 'Behind every number is\u00A0a\u00A0team pushing harder, thinking\u00A0sharper, and refusing to\u00A0settle'
		},

		// About
		about: {
			title: {
				part1: 'Media buying,',
				part2: 'powered\u00A0by infrastructure'
			},
			cards: [
				{
					icon: '<svg viewBox="0 0 60 60" fill="none"><path d="M10 50L30 10L50 50H10Z" stroke="currentColor" strokeWidth="3" fill="transparrent" fillOpacity="0.1"/><path d="M20 35L40 35" stroke="currentColor" strokeWidth="2"/><circle cx="30" cy="25" r="3" fill="currentColor"/><path d="M15 45L45 45" stroke="currentColor" strokeWidth="2"/></svg>',
					title: 'Creative',
					text: 'We\u00A0don\'t "make ads".\nWe\u00A0roast ideas until they\u00A0hit'
				},
				{
					icon: '<svg viewBox="0 0 60 60" fill="none"><rect x="5" y="15" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="transparrent" fillOpacity="0.1"/><rect x="40" y="15" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="transparrent" fillOpacity="0.1"/><rect x="22.5" y="30" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/><path d="M20 22.5L22.5 22.5" stroke="currentColor" strokeWidth="2"/><path d="M37.5 22.5L40 22.5" stroke="currentColor" strokeWidth="2"/><path d="M30 30L30 22.5" stroke="currentColor" strokeWidth="2"/><circle cx="12.5" cy="22.5" r="2" fill="currentColor"/><circle cx="47.5" cy="22.5" r="2" fill="currentColor"/></svg>',
					title: 'Automation',
					text: 'Our stack doesn\'t just optimize.\nIt\u00A0squeezes traffic dry and scales until the graph breaks out of\u00A0the\u00A0screen'
				},
				{
					icon: '<svg viewBox="0 0 60 60" fill="none"><path d="M10 15L30 5L50 15V45L30 55L10 45V15Z" stroke="currentColor" strokeWidth="2" fill="transparrent" fillOpacity="0.1"/><path d="M10 15L30 25L50 15" stroke="currentColor" strokeWidth="2"/><path d="M30 25V55" stroke="currentColor" strokeWidth="2"/><path d="M20 20L25 25L20 30" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M40 20L35 25L40 30" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="30" cy="40" r="3" fill="currentColor"/></svg>',
					title: 'IT-ecosystem',
					text: 'In-house infra that grows like yeast dough: fast, flexible, battle-tested.\nReady for any traffic\u00A0storm'
				}
			],
			text: 'We\u00A0cook traffic that pays back fast and keeps the fire\u00A0on. Hungry for the long game? We’ll season the traffic to your\u00A0taste'
		},

		// Contacts
		contacts: {
			title: {
				part1: 'We\u00A0mix the sharpest skills',
				part2: 'to\u00A0serve maximum profit'
			},
			cards: [
				{
					title: 'ADVERTISERS',
					text: 'Need high-quality traffic and leads that don\'t vanish overnight? We\'ve got the\u00A0recipe – baked fresh, never\u00A0half-cooked.',
					button: 'Join us'
				},
				{
					title: 'MEDIA BUYERS AND TEAMS',
					text: 'You bring the drive, we\u00A0bring the kitchen: infra, tools, and know-how to take your growth from "raw" to "well-done".\nWanna run on FULL BLAST? Smash that\u00A0button.',
					button: 'Get on\u00A0board'
				}
			],
		},

		// Modal
		modal: {
			title: 'Join us',
			form: {
				name: {
					label: 'Your name',
					placeholder: 'Enter your name'
				},
				email: {
					label: 'Your email',
					placeholder: 'Enter your email'
				},
				phone: {
					label: 'Your phone',
					placeholder: 'Enter your phone'
				},
				telegram: {
					label: 'Your telegram id',
					placeholder: 'Enter your telegram'
				},
				message: {
					label: 'Message',
					placeholder: 'Tell\u00A0us about yourself and your goals'
				},
				submit: 'Send Message',
				validation: {
					required: 'This field is\u00A0required'
				}
			}
		},

		// Career
		career: {
			title: {
				part1: 'Join the',
				part2: 'squad'
			},
			responsibilities: 'Responsibilities',
			requirements: 'Requirements',
			offer: 'We offer',
			contactBtn: 'Contact us',
			modal: {
				title: 'Join us',
				form: {
					name: {
						label: 'Your name',
						placeholder: 'Enter your name'
					},
					email: {
						label: 'Your email',
						placeholder: 'Enter your email'
					},
					telegram: {
						label: 'Your telegram id',
						placeholder: 'Enter your telegram'
					},
					message: {
						label: 'Message',
						placeholder: 'Tell\u00A0us about yourself and why do\u00A0you want to\u00A0join\u00A0us'
					},
					submit: 'Send',
					validation: {
						required: 'This field is\u00A0required'
					}
				}
			},
		},
	},

	ru: {
		// Header
		header: {
			navigation: {
				about: 'О нас',
				joinUs: 'Присоединиться',
				contacts: 'Контакты',
				career: 'Карьера',
			}
		},

		// Hero
		hero: {
			title: 'Baklajan',
			subtitle: 'Juicy Mediabuying'
		},

		// Marquee
		marquee: {
			trafficWorldwide: 'Traffic Worldwide',
			killerResults: {
				part1: 'Killer Results',
				part2: 'Unlimited Traffic'
			},
			join: 'New Roles Unlocked',
		},

		// Statistics
		statistics: {
			title: {
				part1: 'Трафик',
				part2: 'без тормозов'
			},
			items: [
				{
					number: '6 лет',
					description: 'опыта и\u00A0роста'
				},
				{
					number: '4 направления',
					description: 'Search Arbitrage, Leadgen, Finance\u00A0&\u00A0iGaming'
				},
				{
					number: '10+',
					description: 'источников трафика'
				},
				{
					number: '70+',
					description: 'экспертов делают профит из\u00A0идей'
				}
			],
			text: 'За каждой цифрой\u00A0– команда, которая тестит и\u00A0креативит нон-стоп'
		},

		// About
		about: {
			title: {
				part1: 'Тумблер',
				part2: 'на полной мощности'
			},
			cards: [
				{
					icon: '<svg viewBox="0 0 60 60" fill="none"><path d="M10 50L30 10L50 50H10Z" stroke="currentColor" strokeWidth="3" fill="transparrent" fillOpacity="0.1"/><path d="M20 35L40 35" stroke="currentColor" strokeWidth="2"/><circle cx="30" cy="25" r="3" fill="currentColor"/><path d="M15 45L45 45" stroke="currentColor" strokeWidth="2"/></svg>',
					title: 'Креатив',
					text: 'Делаем рекламу, которая выделяется и\u00A0конвертит'
				},
				{
					icon: '<svg viewBox="0 0 60 60" fill="none"><rect x="5" y="15" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="transparrent" fillOpacity="0.1"/><rect x="40" y="15" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="transparrent" fillOpacity="0.1"/><rect x="22.5" y="30" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"/><path d="M20 22.5L22.5 22.5" stroke="currentColor" strokeWidth="2"/><path d="M37.5 22.5L40 22.5" stroke="currentColor" strokeWidth="2"/><path d="M30 30L30 22.5" stroke="currentColor" strokeWidth="2"/><circle cx="12.5" cy="22.5" r="2" fill="currentColor"/><circle cx="47.5" cy="22.5" r="2" fill="currentColor"/></svg>',
					title: 'Автоматизация',
					text: 'Наши инструменты выжимают максимум и\u00A0масштабируют кампании на\u00A0полную'
				},
				{
					icon: '<svg viewBox="0 0 60 60" fill="none"><path d="M10 15L30 5L50 15V45L30 55L10 45V15Z" stroke="currentColor" strokeWidth="2" fill="transparrent" fillOpacity="0.1"/><path d="M10 15L30 25L50 15" stroke="currentColor" strokeWidth="2"/><path d="M30 25V55" stroke="currentColor" strokeWidth="2"/><path d="M20 20L25 25L20 30" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M40 20L35 25L40 30" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="30" cy="40" r="3" fill="currentColor"/></svg>',
					title: 'IT-инфраструктура',
					text: 'Инфраструктура Baklajan растет вместе с\u00A0проектами и\u00A0готова к\u00A0любым нагрузкам'
				}
			],
			text: 'Приводим пользователей, которые быстро окупаются и\u00A0дают стабильный рост. Игра в\u00A0долгую? Мы\u00A0в\u00A0деле\u00A0– настроим трафик под ваш запрос'
		},

		// Contacts
		contacts: {
			title: {
				part1: 'Объединяем лучших,',
				part2: 'чтобы\u00A0вместе делать больше'
			},
			cards: [
				{
					title: 'Рекламодателям',
					text: 'Ищешь квал трафик и\u00A0реальные лиды?\nУ\u00A0нас есть подход к\u00A0любой нише',
					button: 'Связаться'
				},
				{
					title: 'Медиабайерам и командам',
					text: 'Ты даёшь драйв, а мы\u00A0– инфраструктуру и\u00A0инструменты для\u00A0максимального роста.\nХочешь к\u00A0нам? Жми кнопку.',
					button: 'Присоединиться'
				}
			],
		},

		// Modal
		modal: {
			title: 'Присоединиться',
			form: {
				name: {
					label: 'Ваше имя',
					placeholder: 'Введите ваше имя'
				},
				email: {
					label: 'Ваш email',
					placeholder: 'Введите ваш email'
				},
				phone: {
					label: 'Ваш телефон',
					placeholder: 'Введите ваш телефон'
				},
				telegram: {
					label: 'Ваш telegram',
					placeholder: 'Введите ваш telegram'
				},
				message: {
					label: 'Сообщение',
					placeholder: 'Расскажите о себе и ваших целях'
				},
				submit: 'Отправить сообщение',
				validation: {
					required: 'Это поле обязательно для заполнения'
				}
			}
		},

		// Career
		career: {
			title: {
				part1: 'Join the',
				part2: 'squad'
			},
			responsibilities: 'Обязанности',
			requirements: 'Требования',
			offer: 'Мы предлагаем',
			contactBtn: 'Связаться с нами',
			modal: {
				title: 'Присоединиться к нам',
				form: {
					name: {
						label: 'Ваше имя',
						placeholder: 'Введите ваше имя'
					},
					email: {
						label: 'Ваш email',
						placeholder: 'Введите ваш email'
					},
					telegram: {
						label: 'Ваш telegram',
						placeholder: 'Введите ваш telegram'
					},
					message: {
						label: 'Сообщение',
						placeholder: 'Расскажите о себе и почему хотите присоединиться к нам'
					},
					submit: 'Отправить',
					validation: {
						required: 'Это поле обязательно для заполнения'
					}
				}
			},
		},
	}
};

export default translations;
