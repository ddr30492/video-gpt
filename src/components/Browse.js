import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import BrowseMainContainer from './BrowseMainContainer'
import SecondaryContainer from './SecondaryContainer';

export const Browse = () => {

  useNowPlayingMovies();

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
