import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { IProfileInput } from './profile.interface'

import AuthFields from '@/components/shared/user/AuthFields'
import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import { UserService } from '@/services/user/user.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { Meta } from '@/utils/meta'

import styles from './Profile.module.scss'

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileInput>({
			mode: 'onChange',
		})

	const { isLoading } = useQuery('profile', () => UserService.getProfile(), {
		onSuccess({ data }) {
			setValue('email', data.email)
		},
		onError(error) {
			toastError(error, 'Получение профиля')
		},
	})

	const { mutateAsync } = useMutation(
		'update profile',
		(data: IProfileInput) => UserService.updateProfile(data),
		{
			onError(error) {
				toastError(error, 'Обновление профиля')
			},
			onSuccess() {
				toastr.success('Данные профиля', 'успешно обновлены')
			},
		}
	)

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data)
	}

	return (
		<Meta title="Профиль">
			<Heading title="Профиль" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<AuthFields
						register={register}
						formState={formState}
						isPasswordRequired={false}
					/>
				)}

				<Button>Обновить</Button>
			</form>
		</Meta>
	)
}

export default Profile
