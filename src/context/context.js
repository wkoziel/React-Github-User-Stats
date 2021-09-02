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
  const [error, setError] = useState({ show: false, msg: '' })

  const toggleError = (show = false, msg = '') => {
    setError({ show, msg })
  }

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

  const searchGithubUser = async (user) => {
    toggleError()
    setLoading(true)
    const response = await axios(`${url}/users/${user}`).catch((err) =>
      console.log(err)
    )

    if (response) {
      setGithubUser(response.data)
      const { login, followers_url } = response.data
      await Promise.allSettled([
        axios(`${url}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ]).then(([repos, followers]) => {
        setGithubRepos(repos.value.data)
        setGithubFollowers(followers.value.data)
      })
    } else {
      toggleError(true, 'No user with that username')
    }
    checkRequests()
    setLoading(false)
  }

  useEffect(checkRequests, [])
  return (
    <AppContext.Provider
      value={{
        githubUser,
        githubFollowers,
        githubRepos,
        requests,
        error,
        loading,
        searchGithubUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalConstext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
