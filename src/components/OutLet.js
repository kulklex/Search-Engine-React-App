import React, {useState} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function OutLet({children}) {
  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <>
    <div className={darkTheme ? 'dark': ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen py-4">
        <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        {children} 
        <Footer/>
      </div>
    </div>
    </>
  )
}
