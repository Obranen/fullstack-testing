import ReviewsList from './ReviewsList/ReviewsList'
import ReviewsForm from './ReviewsForm/ReviewsForm'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'

const Reviews = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={4} xlOffset={4}>
        <Typography variant={'h4'} align={'center'}>RHF and Graphql</Typography>
        <ReviewsForm/>
        <ReviewsList/>
      </Grid>
    </Grid>
  )
}

export default Reviews