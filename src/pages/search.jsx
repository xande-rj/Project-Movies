import { useEffect,useState } from "react"
import { useSearchParams } from "react-router-dom"


import MovieCard from '../Components/MovieCard'

import './MovieGrid.css'

const searchUrl = import.meta.env.VITE_SEARCH

const apiKey = import.meta.env.VITE_API_KEY

export default function Search() {
      const [searchParams] = useSearchParams()

      const [movies,setMovies] = useState([])

      const query = searchParams.get('q')

      const getSearchMovies = async (url)=>{
        const res = await fetch(url)
        const data = await res.json()
        
        setMovies(data.results)
      }
      useEffect(()=>{
        const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`
    
        getSearchMovies(searchWithQueryUrl)
      },[])


  return (
    <div className="container">
      <h2 className="title">
        Result for : <span className="query-text">{query} </span>
      </h2>
      <div className="movie-container">
      {movies.length ===0 && <p> Loading...</p>}
      {movies.length >0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}
