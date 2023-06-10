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
    }
  }
}