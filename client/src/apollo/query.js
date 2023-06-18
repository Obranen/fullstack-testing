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
export const DELETE = gql `
  mutation Mutation($id: ID) {
    removeReview(id: $id)
  }
`

export const UPDATE_REVIEW = gql `
  mutation Mutation($id: ID, $nameReview: String, $descReview: String) {
    editReview(id: $id, nameReview: $nameReview, descReview: $descReview) {
      descReview
      id
      nameReview
    }
  }
`