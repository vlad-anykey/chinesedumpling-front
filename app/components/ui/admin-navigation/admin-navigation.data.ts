import { getAdminHomeUrl, getAdminUrl } from '@/configs/url.config'

import { INavItem } from './admin-navigation.interface'

export const navItems: INavItem[] = [
	{
		title: 'Статистика',
		link: getAdminHomeUrl(),
	},
	{
		title: 'Пользователи',
		link: getAdminUrl('users'),
	},
	{
		title: 'Movies',
		link: getAdminUrl('movies'),
	},
	{
		title: 'Actors',
		link: getAdminUrl('actors'),
	},
	{
		title: 'Genres',
		link: getAdminUrl('genres'),
	},
]
