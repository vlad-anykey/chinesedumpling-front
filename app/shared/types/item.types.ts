import { TypeMaterialIconName } from './icons.types'

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface ISubject {
	_id: string
	name: string
	slug: string
	revenue: number
	revenueM: number
	sales: number
	salesM: number
	price: number
	priceM: number
	cards: number
	cardsM: number
	sellers: number
	sellersM: number
	brands: number
	brandsM: number
	index: number
}

export interface IEvent {
	_id: string
	name: string
	slug: string
	city: string
	description: string
	icon: TypeMaterialIconName
	index: number
	subjects: ISubject[]
}

export interface IItem {
	_id: string
	name: string
	slug: string
	seller: string
	brand: string
	image: string
	revenue: number
	sales: number
	price: number
	index: number
	subjects: string[]
	events: string[]
	countOpened?: number
}
