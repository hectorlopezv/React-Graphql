import React from 'react'
import ListCategory from './components/ListCategory'
import ListPhotoCards from './components/ListPhotoCards'
import Logo from './components/Logo'

import { GlobalStyle } from './components/styles/globalStyles'
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListCategory />

      <ListPhotoCards />
    </>
  )
}

export default App
