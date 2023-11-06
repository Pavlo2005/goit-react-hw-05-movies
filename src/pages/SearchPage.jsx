import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ErrorMessage } from 'components/ErrorMessage';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchMoviesBySearch } from 'api';
import { BackLink } from 'components/BackLink/BackLink';

export default function QuizzesPage() {
    const location = useLocation();
    const [params, setParams] = useSearchParams();
    const [moviesItems, setMoviesItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState(params.get('search') ?? '');

    useEffect(() => {
        async function getQuizzes() {
            try {
                setLoading(true);
                setError(false);
                const movies = await fetchMoviesBySearch(search);
                setMoviesItems(movies.results);
            } catch (error) {
                setError(true);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        if (search !== '') {
            getQuizzes();
        }
    }, [search]);

    const changeSearch = async value => {
        setParams({ search: value });
        setSearch(value);
    }

    return (
        <div>
            <BackLink to={location.state?.from ?? '/'}>
                Back to Home
            </BackLink>

            <SearchBar onChangeSearch={changeSearch} />

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
            {moviesItems.length > 0 && (
                <MoviesList items={moviesItems}></MoviesList>
            )}
        </div>
    );
}
