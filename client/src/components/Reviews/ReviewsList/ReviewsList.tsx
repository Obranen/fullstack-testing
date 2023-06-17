import {useQuery} from '@apollo/client'
import {GET_REVIEW} from '../../../apollo/query'
import Item from './Item/Item'
import {IReviews} from '../../../interface/interface'
import Typography from '@mui/material/Typography'

const ReviewsList = () => {
  const {loading, error, data} = useQuery(GET_REVIEW)

  if (loading) {
    return <h3>Loading...</h3>
  }

  if (error) {
    return <h3>Error...</h3>
  }

  return (
    <>
      <Typography variant='h5' textAlign='center' marginBottom={2}>List Reviews</Typography>
      {data.getReview.map((review: IReviews) =>
        <Item
          key={review.id}
          review={review}
        />
      )}
    </>
  )
}

export default ReviewsList