import React from 'react'
import { MOVIE_CARD_URL } from '../utils/constants'

const MoviesCard = ({poster_path}) => {
  return (
    <div className='flex rounded-md overflow-hidden flex-[0_0_120px]'>
            <img src={`${MOVIE_CARD_URL}${poster_path}`} alt="MovieCardPoster" className='w-[100%] max-h-[100%]'/>
    </div>
    
  )
}

export default MoviesCard