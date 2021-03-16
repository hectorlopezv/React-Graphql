import React from 'react'
import { ImgWrapper, Img, Button, Container, Link } from './styles'
import { HiOutlineHeart } from 'react-icons/hi'
const PhotoCard = ({
  id,
  likes = 0,
  src = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_rabbits.jpg'
}) => {
  return (
    <Container>
      <Link href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt='No Image' />
        </ImgWrapper>
      </Link>
      <Button>
        <HiOutlineHeart size={'32px'} />
        {likes} !likes
      </Button>
    </Container>
  )
}

export default PhotoCard
