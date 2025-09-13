import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movie);
  return (
    <div className='secondary-wrapper -mt-[300px] bg-black relative z-30'>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
      <MovieList title="Top Rated" movies={movies.topRatedMovies}/>
      <MovieList title="Popular" movies={movies.popularMovies}/>
      <MovieList title="UpComing" movies={movies.upcomingMovies}/>
      {/* MovieType Popular
          Moviecard

      MovieType Now Playing
      MovieType Trending
      MovieType Horror */}


    </div>
  )
}

export default SecondaryContainer