import { ChangeEvent, FC, useState } from 'react'
import { useQuery } from 'react-query'

import SearchField from '@/ui/search-field/SearchField'

import { useDebounce } from '@/hooks/useDebounce'

import { ItemService } from '@/services/item/item.service'

import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import { useAuth } from '@/hooks/useAuth'
import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'

const Search: FC = () => {
	
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)


	const { isSuccess, data: searchItems } = useQuery(
		['search item list', debouncedSearch],
		() => ItemService.getAll(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch,
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	const { user } = useAuth()

	if (!user) return <div className="mt-1">
	<SkeletonLoader count={1} className="h-10 mb-4" />
</div>


	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList items={searchItems || []} />}
		</div>
	)
}

export default Search
