import { getEventUrl } from '@/configs/url.config'
import { EventService } from '@/services/event/event.service'
import { useQuery } from 'react-query'
import { IMenuItem } from '../menu.types'

export const useEvents = () => {
	const queryData = useQuery('event menu',
		() => EventService.getAll(),
		{
			select: ({data}) => data.map((event): IMenuItem => ({
							icon: event.icon,
							link: getEventUrl(event.slug),
							title: event.name,
						} as IMenuItem)
					).splice(0,4)
	
		})

	return queryData
}
