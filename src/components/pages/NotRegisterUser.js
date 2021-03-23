import React from 'react'
import Context from '../../Context'
import UserForm from '../Form'
import { useRegisterUser } from '../../hooks/useRegisterUser'
import { useLoginUser } from '../../hooks/useLoginUser'
import Spinner from '../Spinner'

const NotRegisterUser = () => {
  const { mutation, mutationLoading, mutationError } = useRegisterUser()
  const {login, data, error, loading} = useLoginUser()
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const handlerSubmitRegister = ({ email, password }) => {
          mutation({
            variables: {
              input: {
                email: email.value,
                password: password.value
              }
            }
          }).then(() => {
            console.log('hola', activateAuth)
            activateAuth()
          }
          )
        }

        const handlerSubmitLogin = ({ email, password }) => {
          login(email.value, password.value).then(() => {
            console.log('hola2', activateAuth)
            activateAuth()
          }
          )
        }
        if (mutationError) {
          return (<div>...Error</div>)
        }
        if (mutationLoading) {
          return (<Spinner loading={mutationLoading} size={150} />)
        }
        return (
          <>
            <UserForm onSubmit={handlerSubmitRegister} title='Registrarse' disabled={mutationLoading} />
            <UserForm onSubmit={handlerSubmitLogin} title='Iniciar Sesion' disabled={loading} />
          </>
        )
      }}
    </Context.Consumer>
  )
}

export default NotRegisterUser
