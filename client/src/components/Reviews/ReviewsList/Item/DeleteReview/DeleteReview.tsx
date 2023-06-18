import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import classes from '../Item.module.scss'
import {FC} from 'react'

interface IDeleteReview {
  deleteReview: any
  reviewId: any
}

const DeleteReview: FC<IDeleteReview> = ({deleteReview, reviewId}) => {
  const deleteClick = () => {
    deleteReview({
      variables: {
        id: reviewId
      }
    })
  }

  return (
    <HighlightOffIcon onClick={deleteClick} className={classes.icon}/>
  )
}

export default DeleteReview