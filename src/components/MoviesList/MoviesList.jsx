import { List, ListItem } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ items }) => {
    const location = useLocation();
    return (
        <List>
            {items.map(item => (
                <ListItem key={item.id}>
                    <Link to={`/movies/${item.id}`} state={{ from: location }}>
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.backdrop_path}`} alt="backdrop_path" height={150} width={100} />
                        <p>{item.title}</p>
                    </Link>
                </ListItem>
            ))}
        </List>
    );
};