import { fetchMoviesByIdCast } from "api";
import { ErrorMessage } from "../ErrorMessage";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { useParams } from "react-router-dom";

export const MoviesCast = () => {
    const params = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function getMovies() {
            try {
                setLoading(true);
                const fetchedMovies = await fetchMoviesByIdCast(params.movieId, controller);
                setCast(fetchedMovies);
            } catch (error) {
                if (error.message !== 'canceled') {
                    console.log(error);
                    setError(true);
                }
            } finally {
                setLoading(false);
            }
        }

        getMovies();

        return () => {
            controller.abort();
        };
    }, [params.movieId]);

    const castList = cast.cast;

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
                {castList && castList.map(element => (
                    <li key={element.id}>
                        <p>{element.name}</p>
                        <p>{element.character}</p>
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${element.profile_path}`} alt="actor" width={100} height={150} />
                    </li>
                ))}
            </ul>

            {(castList?.length === 0) && (<p>there are no cast</p>)}
        </>
    );
};