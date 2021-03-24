import { useQuery } from '@apollo/react-hooks'
import qgl from 'graphql-tag'

const GET_FAVORITES = qgl`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const useGetFavorites = () => {
  const { data, error, loading } = useQuery(GET_FAVORITES, { fetchPolicy: 'cache-and-network' })
  return { data, loading, error }
}
