import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { getItemUrl } from '@/configs/url.config'
import { IItem } from '@/shared/types/item.types'
import styles from './SearchList.module.scss'


const SearchList: FC<{ items: IItem[] }> = ({ items }) => {

	//https://www.wildberries.ru/catalog/160134740/detail.aspx
	return (
		<div className={styles.list}>
			{items.length ? (
				items.map((item) => (
					<Link key={item._id} href={getItemUrl(item.slug)}>
						<a target="_blank" rel="noreferrer">
							<Image
								src={item.image || ''}
								width={50}
								height={50}
								objectFit="cover"
								objectPosition="top"
								alt={item.name}
								draggable={false}
							/>
							<span>{item.name}</span>
						</a>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Товары не найдены!</div>
			)}
		</div>
	)
}

export default SearchList
