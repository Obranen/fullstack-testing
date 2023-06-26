import {useMutation, useQuery} from '@apollo/client'
import {DELETE, GET_REVIEW} from '../../../apollo/query'
import Item from './Item/Item'
import {IReviews} from '../../../interface/interface'
import Typography from '@mui/material/Typography'
import {motion, AnimatePresence} from 'framer-motion'

const ReviewsList = () => {
  const {loading, error, data} = useQuery(GET_REVIEW)
  const [deleteReview, {error: deleteError}] = useMutation(DELETE, {
    // update(cache, {data: {removeReview}}) {
    //   cache.modify({
    //     fields: {
    //       getReview(currentReviews = []) {
    //         return currentReviews.filter((review: any) => review.__ref !== `Review:${removeReview.id}`)
    //       }
    //     }
    //   })
    // }
    refetchQueries: [
      {query: GET_REVIEW}
    ]
  })

  if (loading) {
    return <h3>Loading...</h3>
  }

  if (error || deleteError) {
    return <h3>Error...</h3>
  }

  if (!(data.getReview.length)) {
    return <Typography variant="h6" textAlign="center" marginBottom={2} color={'red'}>No review</Typography>
  }

  return (
    <AnimatePresence initial={false}>
      <Typography variant='h5' textAlign='center' marginBottom={2}>List Reviews</Typography>
      {data.getReview.map((review: IReviews) =>
        <motion.div
          key={review.id}
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: 100}}
          transition={{duration: .5}}
        >
          <Item
            review={review}
            deleteReview={deleteReview}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ReviewsList