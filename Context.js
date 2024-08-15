'use client'
 
import { createContext, useState } from 'react'
 
export const ThemeContext = createContext({})
 
export default function ThemeProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false)
    const [pdfData,setPdfData]=useState(null)

  return <ThemeContext.Provider value={{authenticated, setAuthenticated,pdfData,setPdfData}}>
    {children}
    </ThemeContext.Provider>
}