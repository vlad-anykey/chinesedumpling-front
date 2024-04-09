
import { NextPageAuth } from '@/shared/types/auth.types'

const MovieListPage: NextPageAuth = () => {
	return <h1>MOVIES</h1>
}

MovieListPage.isOnlyAdmin = true

export default MovieListPage
