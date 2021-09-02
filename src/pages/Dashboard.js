import React from 'react'
import { Info, Repos, User, Search, Navbar } from '../components'
import { useGlobalConstext } from '../context/context'
import loadingImg from '../images/preloader.gif'

const Dashboard = () => {
  const { loading } = useGlobalConstext()
  if (loading)
    return <img src={loadingImg} alt='loading' className='loading-img' />
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  )
}

export default Dashboard
