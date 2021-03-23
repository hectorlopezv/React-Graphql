import React from 'react'
import Context from '../../Context'
import UserForm from '../Form'
import { useAuthUser } from '../../hooks/useAuthUser'

const NotRegisterUser = () => {
  const { mutation, mutationLoading, mutationError } = useAuthUser()

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const handlerSubmit = ({ email, password }) => {
          mutation({
            variables: {
              input: {
                email: email.value,
                password: password.value
              }
            }
          }).then(()=>{
            console.log("hola", activateAuth)
            activateAuth()
          }
            )
        }
        return (
          <>
            <UserForm onSubmit={handlerSubmit} title='Registrarse' />
            <UserForm onSubmit={handlerSubmit} title='Iniciar Sesion' />
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default NotRegisterUser
