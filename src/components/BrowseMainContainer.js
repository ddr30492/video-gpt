import React from 'react'
import { useSelector } from 'react-redux'
import BrowseBGVideo from './BrowseBGVideo';
import BrowseVideoTitleDesc from './BrowseVideoTitleDesc';

const BrowseMainContainer = () => {

    const movieData = useSelector((store) => store.movie?.nowPlayingMovies);
    if (movieData === null) return;
    const mainMovie = movieData[0];

    const {original_title, overview, id} = mainMovie;

    return (
        <div className='main-container w-full h-screen relative'>
            <BrowseBGVideo movieId={id}/>
            <BrowseVideoTitleDesc title={original_title} overview={overview} />
        </div>
    )
}

export default BrowseMainContainer