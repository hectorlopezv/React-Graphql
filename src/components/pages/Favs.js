import React from 'react'
import { useGetFavorites } from '../../hooks/useGetFavorites'
import Layout from '../Layout'

const Favs = () => {
  const { data, loading, error } = useGetFavorites()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const { favs } = data
  return (
    <Layout
      title='PetGram - Tus Favoritos'
      subtitle=' Con Petgram puedes encontras fotos de animales domesticos muy bonitos'
    >
      {favs.map((fav) => (
        <img key={fav.id} src={fav.src} />
      ))}
    </Layout>
  )
}

export default Favs
