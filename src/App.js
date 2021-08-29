import React from 'react'
import { Dashboard, Login, Error } from './pages'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path='/'>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
