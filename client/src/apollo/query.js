import {gql} from '@apollo/client'

export const GET_REVIEW = gql`
  query GetReview {
    getReview {
      descReview
      id
      nameReview
    }
  }
`

export const ADD_REVIEW = gql`
  mutation Mutation($nameReview: String, $descReview: String) {
    addReview(nameReview: $nameReview, descReview: $descReview) {
      descReview
      id
      nameReview
    }
  }
`