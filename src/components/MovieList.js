import React from 'react'
import MoviesCard from './MoviesCard'

const MovieList = ({title, movies}) => {
    // console.log('movies', movies, title)
  return (
    <div className='movie-list-wrapper mt-10'>
        <h2 className='px-8 font-semibold text-2xl mb-3 text-white'>{title}</h2>
        <div className='px-8 flex gap-2 overflow-x-scroll'>
            {movies?.map((movie) => <MoviesCard key={movie.id} poster_path={movie.poster_path} /> )}
        </div>
    </div>
  )
}

export default MovieList