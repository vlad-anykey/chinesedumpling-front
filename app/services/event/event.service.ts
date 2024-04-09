import { getEventsUrl } from '@/configs/api.config'
import { IEvent } from '@/shared/types/item.types'
import axios from 'api/interceptors'

export const EventService = {
	async getAll(searchTerm?:string){
		return axios.get<IEvent[]>(getEventsUrl(``),{
			params: searchTerm
			?{
				searchTerm,
			}
			:{},
		})
	}
	
}