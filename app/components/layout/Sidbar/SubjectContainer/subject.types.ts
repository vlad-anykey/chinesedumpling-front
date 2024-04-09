import { ISubject } from '@/shared/types/item.types'

export interface IWidgetSubject
	extends Pick<
	ISubject,
		'_id' | 'name' | 'revenueM' | 'salesM' | 'slug' | 'index'
	> {}

export interface ISubjectList {
	title: string
	subjects: IWidgetSubject[]
}
