import { useQuery } from '@apollo/react-hooks'

export const useFetchGraphql = (query, variable = {}) => {
  const { loading, data, error } = useQuery(query, {
    variables: { ...variable }
  })
  return [loading, data, error]
}
