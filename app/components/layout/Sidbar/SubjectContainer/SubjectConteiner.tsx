import { useDebounce } from '@/hooks/useDebounce'
import { ChangeEvent, FC, useState } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import { SubjectService } from '@/services/subject/subject.service'

import SubjectList from './SubjectList'


import SearchField from '@/ui/search-field/SearchField'

const SubjectContainer: FC = () => {
	
const [searchTerm, setSearchTerm] = useState('')
const debouncedSearch = useDebounce(searchTerm, 500)
	const { isLoading, data: allSubjects } = useQuery(
		['Subjects in sidebar', debouncedSearch],
		() => SubjectService.getSubjects(debouncedSearch),
		{
			select: (data) => data,
		}
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={20} className="h-5 mb-4" />
		</div>
	) : (
		<>
		<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
		<SubjectList
			list={{
				subjects: allSubjects || [],
				title: 'Предметы',
			}}
		/>
		</>
	)
}

export default SubjectContainer
