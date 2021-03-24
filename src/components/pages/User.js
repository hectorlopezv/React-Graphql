import React, { useContext } from 'react'
import { Context } from '../../Context'

const User = () => {
  const { removeAuth } = useContext(Context)
  return (

    <>
      <h1>User</h1>
      <button onClick={removeAuth}>Cerrar Sesion</button>
    </>
  )
}

export default User
