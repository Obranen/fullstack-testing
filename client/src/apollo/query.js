import {gql} from '@apollo/client'

export const GET_REVIEW = gql `
  query GetReview {
    getReview {
      descReview
      id
      nameReview
    }
  }
`