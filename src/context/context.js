import React, { useContext, useState, useEffect } from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import axios from 'axios'

const AppContext = React.createContext()
const url = 'https://api.github.com'

const AppProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [githubRepos, setGithubRepos] = useState(mockRepos)
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers)

  const [requests, setRequests] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})

  const checkRequests = () => {
    axios(`${url}/rate_limit`)
      .then(
        ({
          data: {
            rate: { remaining },
          },
        }) => {
          setRequests(remaining)
          if (remaining === 0) {
            //to do
          }
        }
      )
      .catch((err) => console.log(err))
  }

  useEffect(checkRequests, [])
  return (
    <AppContext.Provider
      value={{ githubUser, githubFollowers, githubRepos, requests }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalConstext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
