import React from 'react'
import ListCategory from './components/ListCategory'
import ListPhotoCards from './components/ListPhotoCards'
import Logo from './components/Logo'

import { GlobalStyle } from './components/styles/globalStyles'
import { PhotoCardWithQuery } from './components/container/PhotoCardWithQuery'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (<PhotoCardWithQuery id={detailId} />) : (
        <>
          <ListCategory />
          <ListPhotoCards />
        </>
      )
      }
    </>
  )
}

export default App
