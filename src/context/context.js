import React, { useContext, useState } from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import axios from 'axios'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [githubRepos, setGithubRepos] = useState(mockRepos)
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers)
  return (
    <AppContext.Provider value={{ githubUser, githubFollowers, githubRepos }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalConstext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
