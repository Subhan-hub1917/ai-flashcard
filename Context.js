'use client'
 
import { createContext, useState } from 'react'
 
export const ThemeContext = createContext({})
 
export default function ThemeProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false)
  return <ThemeContext.Provider value={{authenticated, setAuthenticated}}>
    {children}
    </ThemeContext.Provider>
}