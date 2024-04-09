import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { getItemUrl } from '@/configs/url.config'
import { IItem } from '@/shared/types/item.types'
import styles from './Favorites.module.scss'

const ItemBySubject: FC<{ item: IItem }> = ({ item }) => {
	return (
		<div className={styles.itemWrapper}>
			<Link href={getItemUrl(item.slug)}>
				<a className={styles.item}>
					<Image
						alt={item.name}
						src={item.image}
						layout="fill"
						draggable={false}
						priority
					/>

					<div className={styles.title}>{item.name}</div>
				</a>
			</Link>
		</div>
	)
}

export default ItemBySubject