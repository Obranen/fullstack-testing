import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {useForm, SubmitHandler, Controller, useFormState} from 'react-hook-form'

interface ISignInForm {
  login: string
  password: string
}

const RhfControllerAndMui = () => {
  const {handleSubmit, control} = useForm<ISignInForm>({
    defaultValues: {login: '', password: ''}
  })
  const {errors} = useFormState({control})
  const onSubmit: SubmitHandler<ISignInForm> = data => console.log(data)

  return (
    <div className="auth-form">
      <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <TextField
              label="Логин"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              size={'small'}
              margin="normal"
              error={!!errors.login?.message}
              helperText={errors?.login?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <TextField
              label="Пароль"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              type="password"
              fullWidth={true}
              size={'small'}
              margin="normal"
              error={!!errors?.password?.message}
              helperText={errors?.password?.message}
            />
          )}
        />
        <Button type="submit" variant="contained" fullWidth={true}>Войти</Button>
      </form>
    </div>
  )
}

export default RhfControllerAndMui