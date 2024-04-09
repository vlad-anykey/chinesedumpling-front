import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { siteName, titleMerge } from '@/configs/seo.config'
import { MetaNoIndex } from '.'
import { onlyText } from '../string/clearText'
import { ISeo } from './meta.types'

import logoImage from '@/assets/images/logo.svg'

export const Meta: FC<ISeo> = ({
	title,
	description,
	image = null,
	children,
}) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			{description ? (
				<Head>
					<title itemProp='headline'>{titleMerge(title)}</title>
					<meta
						itemProp='description'
						name='description'
						content={onlyText(description, 152)}
					/>
					<link rel='canonical' href={currentUrl} />
					<meta property="og:locale" content="ru" />
					<meta property="og:title" content={titleMerge(title)} />
					<meta property="og:url" content={currentUrl} />
					<meta property="og:image" content={image || logoImage} />
					<meta property="og:site_name" content={siteName} />
					<meta
						property='og:description'
						content={onlyText(description, 197)}
					/>
				</Head>
			) : (
				<>
				<MetaNoIndex title={title} />
				<meta name="robots" content="noindex, nofollow" />
				</>
			)}
			{children}
		</>
	)
}