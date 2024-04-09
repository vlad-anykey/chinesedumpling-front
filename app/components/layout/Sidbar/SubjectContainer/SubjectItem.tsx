import { getSubjectUrl } from '@/configs/url.config'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import styles from './SubjectList.module.scss'
import { IWidgetSubject } from './subject.types'


const SubjectItem: FC<{ subject: IWidgetSubject }> = ({ subject }) => {
	const { asPath } = useRouter()
	return (
			<Link href={getSubjectUrl(subject.slug)}>
				<a>
					<div>
				<span className={cn(styles.heading, {
					[styles.active]: asPath.slice(9) === subject.slug
					})}>{subject.name}</span>
					<div className={styles.genres}>
					<span>{subject.revenueM}</span>
					</div>
					<div>
					<span className={styles.genres}>{subject.slug}</span>
					</div>
				<span className={styles.genres}>{asPath.slice(9)}</span>
				</div>
				</a>
			</Link>
	)
}

export default SubjectItem


//className={cn({
//	[styles.active]: asPath === item.link,
//})}