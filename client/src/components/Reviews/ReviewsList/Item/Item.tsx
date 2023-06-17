import {FC} from 'react'
import {IReviews} from '../../../../interface/interface'
import {Paper} from '@mui/material'
import classes from './Item.module.scss'
import Typography from '@mui/material/Typography'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface IItem {
  review: IReviews
}

const Item: FC<IItem> = ({review}) => {
  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.name}>
        {review.nameReview}
        <HighlightOffIcon className={classes.icon}/>
      </div>
      <div className={classes.desc}>{review.descReview}</div>
    </Paper>
  )
}

export default Item