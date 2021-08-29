import React, { useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={'hi'}>{children}</AppContext.Provider>
}

export const useGlobalConstext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
