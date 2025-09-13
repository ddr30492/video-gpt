import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS, TOP_RATED_MOVIE_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovieData = async () => {
        const data = await fetch(TOP_RATED_MOVIE_URL, MOVIE_OPTIONS);
        const dataJson = await data.json();
        dispatch(addTopRatedMovies(dataJson.results));
    }

    useEffect(() => {
        getTopRatedMovieData();
    }, [])
}

export default useTopRatedMovies;