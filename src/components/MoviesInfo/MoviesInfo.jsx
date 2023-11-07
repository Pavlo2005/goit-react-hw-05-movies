import { MoviesCast } from "components/MoviesCast/MoviesCast";
import { MoviesReviews } from "components/MoviesReviews/MoviesReviews";
import { useInfo } from "hooks/useInfo";

export const MoviesInfo = () => {
    const { cast, reviews, changeCast, changeReviews } = useInfo();
    return (
        <div>
            <button onClick={() => changeCast()}> Cast </button>
            <button onClick={() => changeReviews()}> Reviews </button>
            <div>
                {cast && <MoviesCast></MoviesCast>}
            </div>
            <div>
                {reviews && <MoviesReviews></MoviesReviews>}
            </div>
        </div>
    );
};