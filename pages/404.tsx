import Heading from '@/components/ui/heading/Heading'
import { Meta } from '@/utils/meta'
import Image from 'next/image'

import logoImage from '@/assets/images/food-hungry.gif'

export default function Error404() {
	return (<>
	<Meta title='Страница не найдена'>
			<Heading title='404 - Страница не найдена' />
		</Meta>
		<div className="px-layout mt-20 mb-10 block">
			<Image
				src={logoImage}
				width={360}
				height={360}
				alt="Chinene dumplings"
				draggable={false}
				unoptimized
				priority 
			/>
	</div>
	</>
	)
}
