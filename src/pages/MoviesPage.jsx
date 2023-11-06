import { fetchMoviesById } from 'api';
import { BackLink } from 'components/BackLink/BackLink';
import { MoviesInfo } from 'components/MoviesInfo/MoviesInfo';
import { MoviesPersonalPage } from 'components/MoviesPersonalPage/MoviesPersonalPage';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function QuizDetailsPage() {
    const location = useLocation();
    const params = useParams();
    const [movies, setMovies] = useState();

    useEffect(() => {
        async function getMovies() {
            try {
                const fetchedMovies = await fetchMoviesById(params.movieId);
                setMovies(fetchedMovies);
            } catch (error) { }
        }

        getMovies();
    }, [params.movieId]);

    return (
        <div>
            <h1>MoviesDetailsPage</h1>

            <BackLink to={location.state?.from ?? '/movies'}>
                Back to Search
            </BackLink>

            {movies && (
                <>
                    <MoviesPersonalPage movies={movies}></MoviesPersonalPage>
                    <MoviesInfo></MoviesInfo>
                </>
            )}
        </div>
    );
}