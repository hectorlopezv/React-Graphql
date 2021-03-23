import React from 'react'
import ListCategory from '../ListCategory'
import ListPhotoCards from '../ListPhotoCards'

const Home = ({ id }) => {
  return (
    <>
      <ListCategory />
      <ListPhotoCards categoryId={id} />
    </>
  )
}

export default Home
