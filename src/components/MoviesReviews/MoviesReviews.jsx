import { fetchMoviesByIdReviews } from "api";
import { ErrorMessage } from "../ErrorMessage";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { useParams } from "react-router-dom";

export const MoviesReviews = () => {
    const params = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function getQuiz() {
            try {
                setLoading(true);
                const fetchedMovies = await fetchMoviesByIdReviews(params.movieId, controller);
                setReviews(fetchedMovies);
            } catch (error) {
                if (error.message !== 'canceled') {
                    console.log(error);
                    setError(true);
                }
            } finally {
                setLoading(false);
            }
        }

        getQuiz();

        return () => {
            controller.abort();
        };
    }, [params.quizId]);

    const reviewsList = reviews.results;

    return (
        <>
            {loading && (
                <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    visible={true}
                />
            )}
            {error && (
                <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
            )}
            <ul>
                {reviewsList && reviewsList.map(element => (
                    <li key={element.id}>
                        <p>{`Author: ${element.author}`}</p>
                        <p>{element.content}</p>
                    </li>
                ))}
            </ul>
            {(reviewsList?.length === 0) && (<p>there are no reviews</p>)}
        </>
    );
};