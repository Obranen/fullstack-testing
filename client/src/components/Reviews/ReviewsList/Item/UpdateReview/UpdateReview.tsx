import {FC} from 'react'
import Button from '@mui/material/Button'
import {ButtonGroup} from '@mui/material'
import {Controller, SubmitHandler, useForm, useFormState} from 'react-hook-form'
import TextField from '@mui/material/TextField'
import {IReviews} from '../../../../../interface/interface'
import {GET_REVIEW, UPDATE_REVIEW} from '../../../../../apollo/query'
import {useMutation} from '@apollo/client'

interface IUpdateReview {
  setIsEditing: (isEdit: boolean) => void
  reviewId: any
}

const UpdateReview: FC<IUpdateReview> = ({setIsEditing, reviewId}) => {
  const [updateReview, {error: updateError }] = useMutation(UPDATE_REVIEW, {
    refetchQueries: [
      {query: GET_REVIEW}
    ]
  })
  const {handleSubmit, control, resetField} = useForm<IReviews>({
    defaultValues: {nameReview: '', descReview: ''}
  })
  const {errors} = useFormState({control})
  const onSubmit: SubmitHandler<IReviews> = data => {
    console.log(data)
    updateReview({
      variables: {
        id: reviewId,
        nameReview: data.nameReview,
        descReview: data.descReview,
      }
    })
    resetField('nameReview')
    resetField('descReview')
    setIsEditing(true)
  }

  if (updateError) {
    return <h3>Error...</h3>
  }


  return (
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
      <ButtonGroup fullWidth={true} variant="contained" aria-label="outlined primary button group">
        <Button variant="contained" onClick={() => setIsEditing(true)}>Cancel</Button>
        <Button type="submit" variant="contained">Save</Button>
      </ButtonGroup>
    </form>
  )
}

export default UpdateReview