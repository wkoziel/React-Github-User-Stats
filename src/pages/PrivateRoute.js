import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ childern, ...rest }) => {
  const { isAuthenticated, user } = useAuth0()
  const isUser = isAuthenticated && user
  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? childern : <Redirect to='/login' />
      }}
    ></Route>
  )
}

export default PrivateRoute
