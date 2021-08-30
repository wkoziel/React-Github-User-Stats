import React from 'react'
import { Info, Repos, User, Search, Navbar } from '../components'
import loadingImg from '../images/preloader.gif'

const Dashboard = () => {
  return (
    <main>
      {/* <Navbar /> */}
      {/* <Search /> */}
      <Info />
      <User />
      <Repos />
    </main>
  )
}

export default Dashboard
