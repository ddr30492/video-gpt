import { useDispatch } from "react-redux";
import { MOVIE_OPTIONS, UPCOMING_MOVIE_URL } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovieData = async () => {
        const data = await fetch(UPCOMING_MOVIE_URL, MOVIE_OPTIONS);
        const dataJson = await data.json();
        dispatch(addUpcomingMovies(dataJson.results));
    }

    useEffect(() => {
        getUpcomingMovieData();
    }, [])
}

export default useUpcomingMovies;