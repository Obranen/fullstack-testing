import {FC, useState} from 'react'
import {IReviews} from '../../../../interface/interface'
import {Paper} from '@mui/material'
import classes from './Item.module.scss'
import DeleteReview from './DeleteReview/DeleteReview'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import UpdateReview from './UpdateReview/UpdateReview'

interface IItem {
  review: IReviews
  deleteReview: any
}

const Item: FC<IItem> = ({review, deleteReview}) => {
  const [isEditing, setIsEditing] = useState(true)
  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container spacing={2}>
        {isEditing ?
          <>
            <Grid xs={10}>
              <div className={classes.name}>
                {review.nameReview}
                <p>{review.id}</p>
                <DeleteReview reviewId={review.id} deleteReview={deleteReview}/>
              </div>
              <div className={classes.desc}>{review.descReview}</div>
            </Grid>
            <Grid xs={2}>
              <Button variant="contained" onClick={() => setIsEditing(false)}>Edit</Button>
            </Grid>
          </>
          :
          <Grid xs={10} xlOffset={1}>
            <UpdateReview reviewId={review.id} setIsEditing={setIsEditing}/>
          </Grid>
        }
      </Grid>
    </Paper>
  )
}

export default Item