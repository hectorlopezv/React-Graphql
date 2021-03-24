import React from 'react'
import { useGetFavorites } from '../../hooks/useGetFavorites'
const Favs = () => {
  const { data, loading, error } = useGetFavorites()
  if (loading) return (<p>Loading...</p>)
  if (error) return (<p>Error!</p>)
  const { favs } = data
  return favs.map(fav => <img key={fav.id} src={fav.src} />)
}

export default Favs
