import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import { FC } from 'react'

const Sidebar: FC = () => {
return 	<div className="mt-5">
<SkeletonLoader count={20} className="h-6 mb-4" />
</div>
}

export default Sidebar 