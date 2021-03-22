import React from 'react'
import PhotoCard from '../PhotoCard'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
const GET_SINGLE_PHOTO = gql`
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
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, { variables: { id } })

  if (loading) return 'Loading...'
  if (error) return 'Error'
  return <PhotoCard {...data.photo} />
}
