import React from 'react'
import { userInputValue } from '../../hooks/useInputValue'
import { Input, Form, Button, Title } from './styles'
const UserForm = ({ onSubmit, title }) => {
  const email = userInputValue('')
  const password = userInputValue('')
  const handlerSubmit = (event) => {
    console.log("event",event)
    event.preventDefault()
    onSubmit({ email, password })
  }
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handlerSubmit}>
        <Input placeholder='Email' {...email} />
        <Input placeholder='Password' type='password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}

export default UserForm
