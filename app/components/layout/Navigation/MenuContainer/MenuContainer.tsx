import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import Menu from './Menu'
import EventMenu from './events/EventMenu'
import { firstMenu, userMenu } from './menu.data'

const MenuContainer: FC = () => {
	const { user } = useAuth()
	if (!user) return <div><Menu menu={userMenu} /></div>
	else
return 	<div>
	<Menu menu={firstMenu} />
	<EventMenu />
	<Menu menu={userMenu} />

	</div>
}

export default MenuContainer