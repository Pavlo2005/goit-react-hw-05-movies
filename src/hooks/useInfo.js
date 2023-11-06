import { useParams, useSearchParams } from 'react-router-dom';

export const useInfo = () => {
    const [params, setParams] = useSearchParams();
    const cast = params.get('cast') ?? '';
    const reviews = params.get('reviews') ?? '';

    const changeCast = () => {
        if (!cast) {
            params.set('cast', 'cast');
        } else {
            params.set('cast', '');
        }

        setParams(params);
    };

    const changeReviews = evt => {
        if (!reviews) {
            params.set('reviews', 'reviews');
        } else {
            params.set('reviews', '');
        }
        setParams(params);
    };

    return {
        cast,
        reviews,
        changeCast,
        changeReviews,
    };
};