import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS, MOVIE_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getMovieData = async () => {
        const data = await fetch(MOVIE_URL, MOVIE_OPTIONS);
        const dataJson = await data.json();
        dispatch(addNowPlayingMovies(dataJson.results));
    }

    useEffect(() => {
        getMovieData();
    }, [])
}

export default useNowPlayingMovies;