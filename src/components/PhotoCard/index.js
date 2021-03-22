import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Container, Link } from './styles'
import { HiOutlineHeart } from 'react-icons/hi'
const PhotoCard = ({
  id,
  likes = 0,
  src = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_rabbits.jpg'
}) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      // intersecction observer
      const observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true) // si esta true se muetra o renderiza...
          observer.disconnect()// cuando este visible o intersecte eel vh lo desconctamos el listener
        }
      })
      observer.observe(ref.current)
    }) // import dinamico(bajo demanda) ... polyfill
  }, [ref])

  return (
    <Container ref={ref}>
      {show && (
        <>
          <Link href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='No Image' />
            </ImgWrapper>
          </Link>
          <Button>
            <HiOutlineHeart size={'32px'} />
            {likes} !likes
          </Button>
        </>
      )}
    </Container>
  )
}

export default PhotoCard
