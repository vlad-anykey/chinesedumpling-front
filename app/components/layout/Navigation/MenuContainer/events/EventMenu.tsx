import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import Menu from '../Menu'

import { useAuth } from '@/hooks/useAuth'
import { useEvents } from './useEvents'

const EventMenu = () => {
	const { isLoading, data } = useEvents()
	const { user } = useAuth()
	if (!user) return <div></div>

	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={4} className="h-8 mt-6" />
		</div>
	) : (
		<Menu
			menu={{
				title: 'Выставки',
				items: data || [],
			}}
		/>
	)
}

export default EventMenu
