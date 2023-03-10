import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

export default function NavBar({setDarkTheme, darkTheme}) {
  return (
    <div className='py-5 lg:pb-0 flex flex-wrap justify-between lg:justify-around items-center border-b dark:border-gray-700 border-gray-200'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
        <Link to='/'>
          <p className='text-2xl bg-blue-400 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-200 italic'>Search-Engine</p>
        </Link>
        <button className='text-xl dark:text-gray-900 dark:bg-white border rounded-full px-2 py-1 hover:shadow-lg' type='button' onClick={() => setDarkTheme(!darkTheme)}>
          {darkTheme ? '💡 Light' : '🌙 Dark'} Mode
        </button>
      </div>
      <Search/>
    </div>
  )
}
