import Gallery from '@/components/ui/gallery/Gallery'
import SubHeading from '@/components/ui/heading/SubHeading'
import { Meta } from '@/utils/meta/Meta'
import { FC } from 'react'
import { IHome } from './home.interface'

const Home: FC<IHome> = ({items}) => {
return (
	<Meta title = "Главная страница">

	<div>
				<SubHeading title="Товары Wb" />
				{items.length && <Gallery items={items} />}
			</div>
	</Meta>
)

}

export default Home