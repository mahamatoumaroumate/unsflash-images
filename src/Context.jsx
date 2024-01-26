import { useState, useContext, createContext, useEffect } from 'react'
const appContext = createContext()
export const useGlobalContext = () => useContext(appContext)
const getInitial = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches
  const storedDarkMode = localStorage.getItem('darkTheme')

  if (storedDarkMode == null) {
    return prefersDarkMode
  }
  return storedDarkMode === 'true'
}
export const AppProvider = ({ children }) => {
  const [toggle, setToggle] = useState(getInitial())
  const [search, setSearch] = useState('cat')
  const SetToggle = () => {
    const newToggle = !toggle
    setToggle(newToggle)
    localStorage.setItem('darkTheme', newToggle)
  }
  const SetSearch = (value) => {
    setSearch(value)
  }
  useEffect(() => {
    document.body.classList.toggle('dark-theme', toggle)
  }, [toggle])
  return (
    <appContext.Provider value={{ toggle, SetToggle, search, SetSearch }}>
      {children}
    </appContext.Provider>
  )
}
