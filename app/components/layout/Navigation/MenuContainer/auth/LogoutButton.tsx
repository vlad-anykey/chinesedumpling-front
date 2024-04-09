import { FC, MouseEvent } from 'react'

import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'

import { useActions } from '@/hooks/useActions'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li>
			<a onClick={logoutHandler}>
				<MaterialIcon name="MdLogout" />
				<span>Выход</span>
			</a>
		</li>
	)
}

export default LogoutButton
