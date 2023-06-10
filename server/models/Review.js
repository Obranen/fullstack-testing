import mongoose from 'mongoose'

const Review = new mongoose.Schema({
  nameReview: {
    type: String,
    required: true
  },
  descReview: {
    type: String,
    required: true
  }
})

export default mongoose.model('Review', Review)