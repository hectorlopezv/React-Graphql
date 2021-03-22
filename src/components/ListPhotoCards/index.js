import React from 'react'
import PhotoCard from '../PhotoCard'
import { Container } from './styles'
import Spinner from '../Spinner'
import { gql } from 'apollo-boost'
import { useFetchGraphql } from '../../hooks/useFetchGraphql'

const ListPhotoCards = ({ categoryId = 1 }) => {
  const getPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
  const [loading, data, error] = useFetchGraphql(getPhotos, { categoryId })

  if (loading) {
    return (
      <div>
        <Spinner loading={loading} size={150} />
      </div>
    )
  }

  if (error) {
    return <p>Error</p>
  }

  return (
    <Container>
      {data.photos?.map(photo => (
        <PhotoCard key={photo.id} id={photo.id} {...photo} />
      ))}
    </Container>
  )
}

export default ListPhotoCards
