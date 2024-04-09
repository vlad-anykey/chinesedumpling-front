import { FC } from 'react'

import styles from '../Admin.module.scss'

import CountUsers from './CountUsers'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
		</div>
	)
}

export default Statistics
