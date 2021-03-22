import React from 'react'
import PhotoCard from '../PhotoCard'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(query, { variables: { id } })

  if (loading) return 'Loading...'
  return <PhotoCard {...data.photo} />
}
