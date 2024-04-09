import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import styles from './Auth.module.scss'

import AuthFields from '@/components/shared/user/AuthFields'
import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { Meta } from '@/utils/meta'

import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { login} = useActions()
	

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		reset()
	}

	
	

	return (
		<Meta title="Вход">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Вход" className="mb-6" />
					<AuthFields register={registerInput} formState={formState} />

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Войти
						</Button>
						<Button
							onClick={() => toastr.error ('Регистрация запрещена', 'Вход только по приглашению')}
							> Регистрация
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
