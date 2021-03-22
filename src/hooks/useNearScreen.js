import { useEffect, useRef, useState } from 'react'
export const useNearScreen = () => {
  const [show, setShow] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      // intersecction observer
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true) // si esta true se muetra o renderiza...
          observer.disconnect() // cuando este visible o intersecte eel vh lo desconctamos el listener
        }
      })
      observer.observe(ref.current)
    }) // import dinamico(bajo demanda) ... polyfill
  }, [ref])

  return [show, ref]
}


