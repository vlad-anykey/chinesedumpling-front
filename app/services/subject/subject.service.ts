import { getSubjectsUrl } from '@/configs/api.config'
import { ISubject } from '@/shared/types/item.types'
import axios from 'api/interceptors'

export const SubjectService = {
	async getAll(searchTerm?:string){
		return axios.get<ISubject[]>(getSubjectsUrl(``),{
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async getBySlug(slug: string) {
		return axios.get<ISubject>(getSubjectsUrl(`/by-slug/${slug}`))
	},

	async getSubjects(searchTerm?: string) {
		const { data: subjects} = await axios.get<ISubject[]>(getSubjectsUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
		return subjects
	},
}