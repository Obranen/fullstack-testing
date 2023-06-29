import Typography from '@mui/material/Typography'
import {Controller, SubmitHandler, useForm, useFormState} from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {IReviews} from '../../../interface/interface'
import {ADD_REVIEW, GET_REVIEW} from '../../../apollo/query'
import {useMutation} from '@apollo/client'

const ReviewsForm = () => {
  const [createReview, {error}] = useMutation(ADD_REVIEW, {
    update(cache, {data: {addReview}}) {
      // @ts-ignore
      const {getReview} = cache.readQuery({query: GET_REVIEW})

      cache.writeQuery({
        query: GET_REVIEW,
        data: {
          getReview: [...getReview, addReview]
        }
      })
    }
  })

  const {handleSubmit, control, resetField} = useForm<IReviews>({
    defaultValues: {nameReview: '', descReview: ''}
  })
  const {errors} = useFormState({control})
  const onSubmit: SubmitHandler<IReviews> = data => {
    console.log(data)
    createReview({
      variables: {
        nameReview: data.nameReview,
        descReview: data.descReview
      }
    })
    resetField('nameReview')
    resetField('descReview')
  }

  if (error) {
    return <h3>Error... Not create new Review</h3>
  }

  return (
    <>
      <Typography variant="h5" textAlign="center">Add Review</Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{marginBottom: '20px'}}>
        <Controller
          control={control}
          name="nameReview"
          rules={{
            required: 'Заполните поле'
          }}
          render={({field}) => (
            <TextField
              label="Name"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              size={'small'}
              margin="normal"
              error={!!errors.nameReview?.message}
              helperText={errors.nameReview?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="descReview"
          rules={{required: 'Заполните поле'}}
          render={({field}) => (
            <TextField
              label="Description"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              type="text"
              fullWidth={true}
              size={'small'}
              margin="normal"
              error={!!errors?.descReview?.message}
              helperText={errors?.descReview?.message}
              multiline
              rows={4}
            />
          )}
        />
        <Button type="submit" variant="contained" fullWidth={true}>Add Reviews</Button>
      </form>
    </>
  )
}

export default ReviewsForm