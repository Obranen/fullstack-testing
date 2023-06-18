import Review from './models/Review.js'

export const resolvers = {
  Query: {
    getReview: async () => await Review.find()
  },
  Mutation: {
    addReview: async (_, {nameReview, descReview}) => {
      const newReview = new Review({nameReview, descReview})
      await newReview.save()
      return newReview
    },
    removeReview: async (_, {id}) => {
      const result = await Review.deleteOne({_id: id})
      if (result.acknowledged && result.deletedCount == 1) {
        return id
      }
      return null
    },
    editReview: async (_, {id, nameReview, descReview}) => {
      const result = await Review.updateOne(
        {_id: id},
        {
          $set: {
            descReview,
            nameReview
          }
        }
      )
      if (result.acknowledged && result.deletedCount == 1) {
        return Review.findOne({_id: id})
      }
      return null
    }
  }
}