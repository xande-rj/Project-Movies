import { useState,useEffect } from "react"
import MovieCard from "../Components/MovieCard"

import './MovieGrid.css'

  const movieURl = import.meta.env.VITE_API
  const apiKey = import.meta.env.VITE_API_KEY

export default function Home() {
  const [TopMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url)=>{
    const res = await fetch(url)
    const data = await res.json()
    
    setTopMovies(data.results)
  }
  useEffect(()=>{
    const TopRatedUrl = `${movieURl}top_rated?${apiKey}`

    getTopRatedMovies(TopRatedUrl)
  },[])

  return (
    <div className="container">
      <h2 className="title">Best Movies</h2>
      <div className="movie-container">
      {TopMovies.length ===0 && <p> Loading...</p>}
      {TopMovies.length >0 && TopMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}
