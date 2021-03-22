import React from 'react'
import { ImgWrapper, Img, Button, Container, Link } from './styles'
import { HiOutlineHeart } from 'react-icons/hi'
import { MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const PhotoCard = ({
  id,
  likes = 0,
  src = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_rabbits.jpg'
}) => {
  const key = `like-${id}`

  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()
  const Icon = liked ? MdFavorite : HiOutlineHeart

  return (
    <Container ref={element}>
      {show && (
        <>
          <Link href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} alt='No Image' />
            </ImgWrapper>
          </Link>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size={'32px'} />
            {likes} !likes
          </Button>
        </>
      )}
    </Container>
  )
}

export default PhotoCard
