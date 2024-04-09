import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import styles from './Sidebar.module.scss'
import SubjectContainer from './SubjectContainer/SubjectConteiner'

const Sidebar: FC = () => {
const { user } = useAuth()
if (!user) return <div className="mt-11"></div>
return 	<div className={styles.sidebar}>

<SubjectContainer/>
</div>
}

export default Sidebar 