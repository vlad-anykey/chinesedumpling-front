import { getItemsUrl } from '@/configs/api.config'
import { IItem, ISubject } from '@/shared/types/item.types'
import axios from 'api/interceptors'

export const ItemService = {
	async getAll(searchTerm?:string){
		return axios.get<IItem[]>(getItemsUrl(``),{
			params: searchTerm
			?{
				searchTerm,
			}
			:{},
		})
	},
	async getBySlug(slug: string) {
		return axios.get<ISubject>(getItemsUrl(`/by-slug/${slug}`))
	},

	async getBySubject(subjectId: string) {
		return axios.get<ISubject>(getItemsUrl(`/by-subject/${subjectId}`))
	},
}