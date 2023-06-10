import {useQuery} from '@apollo/client'
import {GET_REVIEW} from './apollo/query'

function App() {
  const {loading, error, data} = useQuery(GET_REVIEW)

  if (loading) {
    return <h3>Loading...</h3>
  }

  if (error) {
    return <h3>Error...</h3>
  }

  return (
    <>
      {data.getReview.map((review: any) =>
        <div key={review.id}>
          <p>{review.nameReview}</p>
          <p>{review.descReview}</p>
        </div>
      ) }
    </>
  )
}

export default App
