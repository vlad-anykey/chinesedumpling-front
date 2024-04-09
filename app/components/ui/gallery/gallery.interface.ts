export interface IGalleryItem {
	image: string
	name: string
	link: string
	content?: {
		title: string
		subTitle?: string
	}
}

export interface IGalleryItemProps {
	item: IGalleryItem
	variant: 'horizontal' | 'vertical'
}
