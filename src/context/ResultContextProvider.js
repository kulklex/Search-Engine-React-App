import React, {createContext, useContext, useState} from "react";

const ResultContext = createContext()
const baseUrl = 'https://google-search72.p.rapidapi.comn'

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true)

        const response = await fetch(`${baseUrl}/${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
            }
        })

        const data = await response.json()

        setResults(data)
        setIsLoading(false)
    }

    return (<ResultContext.Provider value={{getResults, results, searchTerm, isLoading, setSearchTerm}}>
        {children}
    </ResultContext.Provider>)
}

export const useResultContext = () => useContext(ResultContext)