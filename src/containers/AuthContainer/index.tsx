import { useForm, SubmitHandler } from 'react-hook-form'

import Logo from 'components/Logo'
import InputMask from 'react-input-mask'

import { PHONE_MASK } from 'constants/masks'

import classes from './AuthContainer.module.sass'

interface IFormInput {
  phone: string
}
export default function AuthContainer() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }
  const disabled = !RegExp(/^\+996 \(\d{3}\) \d{2}-\d{2}-\d{2}$/).test(watch('phone'))

  return (
    <div className={classes.wrapper}>
      <Logo size={{ width: 180, height: 72 }} />

      <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
        <h1>Вход</h1>
        <p className={classes.subtitle}>Вход и регистрация осуществляется с помощью номера телефона</p>

        <InputMask mask={PHONE_MASK} className={classes.input} placeholder="Номер телефона" {...register('phone')} />

        <button disabled={disabled} className={classes.button}>
          Продолжить
        </button>

        <p className={classes.infotext}>
          Нажимая <strong>«Продолжить»</strong> вы даете согласия, на обработку ваших данных
        </p>
      </form>
    </div>
  )
}
