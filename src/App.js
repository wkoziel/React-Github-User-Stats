import React from 'react'
import { Dashboard, Login, Error, PrivateRoute, AuthWrapper } from './pages'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <AuthWrapper>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact={true} path='/'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthWrapper>
    </div>
  )
}

export default App
