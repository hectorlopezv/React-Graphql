import React from 'react'
import ListCategory from '../ListCategory'
import ListPhotoCards from '../ListPhotoCards'
import Layout from '../Layout'

const Home = ({ id }) => {
  return (
    <Layout
      title='PetGram - fotos Mascotas'
      subtitle=' Con Petgram puedes encontras fotos de animales domesticos muy bonitos'
    >
      <ListCategory />
      <ListPhotoCards categoryId={id} />
    </Layout>
  )
}

export default React.memo(Home, (prevProps, props) => {
  return prevProps.id === props.id
})
