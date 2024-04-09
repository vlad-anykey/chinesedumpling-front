import { ISubjectPage } from '@/components/screens/subject/subject.types'
import { GetStaticPaths, NextPage } from 'next'
import Error404 from '../404'

const SubjectPage: NextPage <ISubjectPage> = ({subject , items}) => {
	return subject ? <Subject subject={subject} movies={movies}/> : <Error404/>
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const {data : subjects}
	}
}