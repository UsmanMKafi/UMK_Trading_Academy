import { createContext, useContext, useState, useCallback } from 'react'

const AppContext = createContext()

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [courseFilter, setCourseFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const updateFilter = useCallback((filter) => {
    setCourseFilter(filter)
  }, [])

  const updateSearchQuery = useCallback((query) => {
    setSearchQuery(query)
  }, [])

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    courseFilter,
    updateFilter,
    searchQuery,
    updateSearchQuery,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}


