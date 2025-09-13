import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS, POPULAR_MOVIE_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovieData = async () => {
        const data = await fetch(POPULAR_MOVIE_URL, MOVIE_OPTIONS);
        const dataJson = await data.json();
        dispatch(addPopularMovies(dataJson.results));
    }

    useEffect(() => {
        getPopularMovieData();
    }, [])
}

export default usePopularMovies;