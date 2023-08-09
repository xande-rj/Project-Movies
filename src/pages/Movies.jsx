import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import{
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from 'react-icons/bs'

import MovieCard from '../Components/MovieCard'

import './MovieGrid.css'
import './Movie.css'

const movieURl = import.meta.env.VITE_API

const apiKey = import.meta.env.VITE_API_KEY

export default function Movie() {
      const {id} = useParams()

      const [movie,setMovie] = useState(null)

      const getMovie = async (url)=>{
        const res = await fetch(url)
        const data = await res.json()
        
        setMovie(data)
      }

      const formatCurrency = (number)=>{
        return number.toLocaleString("en-US",{
          style: "currency",
          currency: "USD",
        })
      }

      useEffect(()=>{
        const movieUrl = `${movieURl}${id}?${apiKey}`
    
        getMovie(movieUrl)
      },[])


  return (
    <div className="movie-page">
      {movie && (
      <>
      <MovieCard movie={movie} shortLink={false}/>
      <p className="tagline">{movie.tagline}</p>
      <div className="info">
        <h3> <BsWallet2/> Budget : </h3>
        <p>{formatCurrency(movie.budget)}</p>
      </div>
      <div className="info">
        <h3> <BsGraphUp/> Invoicing : </h3>
        <p>{formatCurrency(movie.revenue)}</p>
      </div>
      <div className="info">
        <h3> <BsHourglassSplit/> Duration : </h3>
        <p>{movie.runtime} Minutes</p>
      </div>
      <div className="info description">
        <h3> <BsFillFileEarmarkTextFill/> Description : </h3>
        <p>{movie.overview}</p>
      </div>
      </>
      )}
    </div>
  )
}
