
import { useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';

const BrowseBGVideo = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movie?.trailerVideo);
    useTrailerVideo(movieId);

    return (
        <div className='h-screen w-full'>
            <iframe 
                className='w-full h-screen'
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${trailerVideo?.key}`} 
                title="YouTube video player" 
                allow="autoplay; encrypted-media; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            >
            </iframe>
        </div>
    )
}

export default BrowseBGVideo