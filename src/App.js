import React from 'react'
import Logo from './components/Logo'
import { GlobalStyle } from './components/styles/globalStyles'
import Home from './components/pages/Home'
import Detail from './components/pages/Details'
import User from './components/pages/User'
import Favs from './components/pages/Favs'
import NotRegisterUser from './components/pages/NotRegisterUser'
import NavBar from './components/NavBar'
import { Router } from '@reach/router'
import {Consumer} from './Context'


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              
              <Home path='/' />
              <Home path='/pet/:id' />
              <Detail path='/detail/:detailId' />
              <Favs path='/favs' />
              <User path='/user' />
            </Router>
          ) : (
            <Router>
              <NotRegisterUser path='/favs' />
              <NotRegisterUser path='/user' />
            </Router>
          )
        }
      </Consumer>

      <NavBar />
    </>
  )
}

export default App
