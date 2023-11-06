import { MoviesCast } from "components/MoviesCast/MoviesCast";
import { MoviesReviews } from "components/MoviesReviews/MoviesReviews";
import { useInfo } from "hooks/useInfo";

export const MoviesInfo = () => {
    const { cast, reviews, changeCast, changeReviews } = useInfo();
    return (
        <div>
            <div>
                <button onClick={() => changeCast()}> Cast </button>
                {cast && <MoviesCast></MoviesCast>}
            </div>
            <div>
                <button onClick={() => changeReviews()}> Reviews </button>
                {reviews &&
                    <div>
                        <MoviesReviews></MoviesReviews>
                    </div>
                }
            </div>
        </div>
    );
};