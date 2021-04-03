import React, { useContext } from 'react'
import Logo from './components/Logo'
import { GlobalStyle } from './components/styles/globalStyles'
import Home from './components/pages/Home'
import Detail from './components/pages/Details'
import User from './components/pages/User'
import Favs from './components/pages/Favs'
import NotRegisterUser from './components/pages/NotRegisterUser'
import NavBar from './components/NavBar'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'
import NotFound from './components/pages/NotFound'

const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisterUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>

      <NavBar />
    </>
  )
}

export default App
