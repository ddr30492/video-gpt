import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import BrowseMainContainer from './BrowseMainContainer'
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';

export const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <BrowseMainContainer />
      <SecondaryContainer />
      {
        /** main container video playing in bg */
      }
      {
        /** collection of movies */
      }
    </div>
  )
}
