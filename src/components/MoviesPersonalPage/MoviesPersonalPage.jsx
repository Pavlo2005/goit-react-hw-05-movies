export const MoviesPersonalPage = ({ movies }) => {

    return (
        <div>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movies.poster_path}`} alt="#" />
            <p>{movies.title}</p>
            <p>{`popularity ${movies.popularity}`}</p>
            <p>{`release date ${movies.release_date}`}</p>
            <p>{`${movies.overview}`}</p>
            <p>genres</p>
            <ul>
                {movies.genres.map(element => (
                    <li>{element.name}</li>
                )
                )}
            </ul>
        </div>
    );
}