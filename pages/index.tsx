import Home from '@/components/screens/home/Home'
import { IHome } from '@/components/screens/home/home.interface'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { getItemUrl } from '@/configs/url.config'
import { ItemService } from '@/services/item/item.service'
import { NextPageAuth } from '@/shared/types/auth.types'
import type { GetServerSideProps } from 'next'

const HomePage: NextPageAuth<IHome> = ({items}) => {
	return (<Home items = {items}/>)
}
export const getServerSideProps: GetServerSideProps = async () => {
	try {
const {data: dataItems} = await ItemService.getAll()

const items:IGalleryItem[]  = dataItems.slice(0, 20).map(i =>({
	name: i.name,
	image: i.image,
	link: `${getItemUrl(i.slug)}`,
	content: {
		title: i.name,
		subTitle: i.brand,
	},
}))
return { 
	props: {
		items,
	} as unknown as IHome,
}
} catch (error) {
	return {
		props: {
			items: [],
		} as unknown as IHome,
	}
}
}


HomePage.isOnlyUser = true

export default HomePage
