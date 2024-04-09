import { useQuery } from 'react-query'

import { ItemService } from '@/services/item/item.service'

export const useAllItems = () => {
	const {
		isLoading,
		data: itemsBySubject
	} = useQuery('all items', () => ItemService.getAll(), {
		select: ({ data }) => data,
	})

	return { isLoading, itemsBySubject}
}
