import React, { createContext, useState } from 'react'
const Context = createContext()
const { Provider: ContextProvider, Consumer } = Context

const Provider = ({ children }) => {
  const [isAuth, setAuth] = useState(() =>
    window.sessionStorage.getItem('token')
  )
  const value = {
    isAuth,
    activateAuth: token => {
      setAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }

  return <ContextProvider value={value}>{children}</ContextProvider>
}

export { Provider, Consumer, Context }