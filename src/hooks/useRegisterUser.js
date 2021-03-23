import { useMutation, gql } from '@apollo/client'

const REGISTER_MUTATION = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`

export const useRegisterUser = () => {
  const [
    mutation,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(REGISTER_MUTATION)
  return { mutation, mutationLoading, mutationError }
}


