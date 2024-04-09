import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/configs/url.config'

import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Профиль',
						}}
					/>
					<MenuItem
						item={{
							icon: 'MdEditDocument',
							link: '/profile2',
							title: 'Записи с выставки',
						}}
					/>
					<LogoutButton />
					
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Вход' }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Админ',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
