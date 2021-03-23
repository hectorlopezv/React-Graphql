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
import Context from './Context'


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path='/favorites' />
              <User path='/user' />
            </Router>
          ) : (
            <Router>
              <NotRegisterUser path='/favorites' />
              <NotRegisterUser path='/user' />
            </Router>
          )
        }
      </Context.Consumer>

      <NavBar />
    </>
  )
}

export default App
