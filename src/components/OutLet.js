import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function OutLet({children, setDarkTheme, darkTheme}) {
  return (
    <>
        <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <div>{children}</div>
        <Footer/>
    </>
  )
}
