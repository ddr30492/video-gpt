import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { MOVIE_OPTIONS } from "../utils/constants";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, MOVIE_OPTIONS);
            const jsonData = await data.json();

            // ✅ safely find a trailer
            const trailer = jsonData?.results?.find(
                (vid) => vid.type === "Trailer" && vid.site === "YouTube"
            );

            if (trailer) {
                dispatch(addTrailerVideo(trailer));
            } else {
                console.warn("No trailer found for this movie");
                dispatch(addTrailerVideo(null)); // fallback
            }
        } catch (error) {
            console.error("Error fetching trailer:", error);
        }

    }

    useEffect(() => {
        if (!movieId) return;
        getMovieVideo();
    }, [])
}

export default useTrailerVideo;