import { IMenu } from './menu.types'


export const firstMenu: IMenu = {
	title: 'Меню',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Главная',
		},
		{
			icon: 'MdOutlineCookie',
			link: '/ami',
			title: 'Драники',
		},
		{
			icon: 'MdLocalFlorist',
			link: '/subject',
			title: 'Ягодки',
		},
		{
			icon: 'MdTranslate',
			link: '/exhiitions',
			title: 'Пельмешки',
		},
	],
}

export const userMenu: IMenu = {
	title: 'Пользователь',
	items: [],
}

export const menus: IMenu[] = [firstMenu, userMenu]
