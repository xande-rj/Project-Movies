import{FaStar} from 'react-icons/fa'

import {Link} from 'react-router-dom'

const imagenUrl = import.meta.env.VITE_IMG

export default function MovieCard({movie, shortLink= true}) {
  return (
    <div className="movie-card">
        <img src={imagenUrl+movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar/> {movie.vote_average}
        </p>
        {shortLink && <Link to={`/movie/${movie.id}`}>Detales</Link>}
    </div>
  )
}
