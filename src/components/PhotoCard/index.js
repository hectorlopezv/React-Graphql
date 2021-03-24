import React, { useCallback } from 'react'
import { ImgWrapper, Img, Container, Link } from './styles'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useMuationToogleLike } from '../../hooks/ToogleLikeMutation'
import FavButton from '../FavButton'

const PhotoCard = ({
  id,
  liked,
  likes = 0,
  src = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_rabbits.jpg'
}) => {
 
 
  const [show, element] = useNearScreen()
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike()
  const handleFavClick = () => {
     mutation({
      variables: {
        input: { id }
      }
    })
    
  }

  return (
    <Container ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='No Image' />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Container>
  )
}

export default PhotoCard
