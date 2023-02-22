import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
// import ReactPlayer from 'react-player'
import { useResultContext } from '../context/ResultContextProvider'
import { Loading } from './Loading'

export default function Results() {
  const { results, isLoading, getResults, searchTerm } = useResultContext()
  const location = useLocation() 
  

  useEffect(() => {
    if(searchTerm) {
        if (location.pathname === '/search') {
            getResults(`search?query=${searchTerm}&num=10&start=0&sort=relevance`)
        } else  if (location.pathname === '/imagesearch') {
            getResults(`imagesearch?query=${searchTerm}&num=10&start=0&sort=relevance`)
        }
    }
    getResults('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, location.pathname])


  if (isLoading) return <Loading/>
  
  switch (location.pathname) {
    case '/search': 
        return (
            <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                {results?.items?.map(({link, title}, index) => (
                <div key={index} className='md:w-2/5 w-full'>
                    <a href={link} target='_blank' rel='noreferrer'>
                        <p className='text-sm'>
                            {link?.length > 30 ? link.substring(0, 30) : link}
                        </p>
                        <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                            {title}
                        </p>
                    </a>
                </div>))}
            </div>
        )

    case '/imagesearch': 
        return (<div className='flex flex-wrap justify-center items-center'>
            {results?.items?.map(({originalImageUrl, title, contextLink}, index) => (
            <a key={index} className='sm:p-3 p-5' href={contextLink} target='_blank' rel='noreferrer'>
                <img src={originalImageUrl} alt='' loading='lazy'/>
                <p className='w-36 break-words text-sm mt-2' >{title}</p>

            </a>))}
        </div>)
        
    // case '/videos':
    //         return (
    //           <div className="flex flex-wrap ">
    //             {results?.results?.map((video, index) => (
    //               <div key={index} className="p-2">
    //                 <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
    //               </div>
    //             ))}
    //           </div>
    //         )     
        
    default:
        return 'ERROR.....'
  } 


  
}
