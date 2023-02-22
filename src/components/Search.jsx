import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import {useDebounce} from 'use-debounce'
import { useResultContext } from '../context/ResultContextProvider'

export default function Search() {
  const [text, setText] = useState('Google Search Api')
  const {setSearchTerm} = useResultContext()
 

  // On complicated projects where you have an input field, if you want some changes to happen whenever the user types something in
  // By default as the user is typing each individual letter, a new request is being made. We do not want that, we're going to DEBOUNCE the input
  const {debouncedValue} = useDebounce(text, 500) // we're deBouncing it every 500 milliseconds


  useEffect(() => {
    if(debouncedValue) setSearchTerm(debouncedValue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  return (
    <div className='relative lg:ml-48 md:ml-72 lg:mt-5 mt-3'>
      
      <input value={text} type="text" className='lg:w-96 w-60 h-10 dark:bg-gray-200 lg:ml-0 md:ml-8 ml-24 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'  
        placeholder="🔎 Search or type URL" onChange={(e) => setText(e.target.value)}/>
      
      {text && (<button type='button' onClick={() => setText('')} className='absolute top-1.5 right-4 text-2xl text-gray-500 '>
        X
      </button>)}

      <div className="flex justify-around items-center mt-4">
        <NavLink to='/search'  className="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2  ">🔎 All</NavLink>
        <NavLink to='/imagesearch' className="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 ">📸 Images</NavLink>
      </div>

    </div>
  )
}
