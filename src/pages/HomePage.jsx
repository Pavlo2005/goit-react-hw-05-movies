import { useEffect, useState } from 'react';
import { MoviesList } from "components/MoviesList/MoviesList";
import { Bars } from 'react-loader-spinner';
import { ErrorMessage } from 'components/ErrorMessage';
import { fetchMovies } from 'api';



export default function HomePage() {

    const [moviesItems, setMoviesItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getQuizzes() {
            try {
                setLoading(true);
                setError(false);
                const movies = await fetchMovies();
                setMoviesItems(movies.results);
            } catch (error) {
                setError(true);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        getQuizzes();
    }, []);

    return <div>
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
        <MoviesList items={moviesItems}></MoviesList>
    </div>;
}