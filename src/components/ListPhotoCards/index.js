import React from 'react'
import PhotoCard from '../PhotoCard'
import { Container } from './styles'
const ListPhotoCards = () => {
  return (
    <Container>
      {[1, 2, 3].map(id => (
        <PhotoCard key={id} />
      ))}
    </Container>
  )
}

export default ListPhotoCards
