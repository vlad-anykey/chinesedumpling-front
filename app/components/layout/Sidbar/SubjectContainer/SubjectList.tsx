import { FC } from 'react'

import SubjectItem from './SubjectItem'

import styles from './SubjectList.module.scss'
import { ISubjectList } from './subject.types'

const SubjectList: FC<{ list: ISubjectList }> = ({
	list: { subjects, title },
}) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{subjects.map(subject => (
				<SubjectItem key={subject._id} subject={subject} />
			))}
		</div>
	)
}

export default SubjectList
