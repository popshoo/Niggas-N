import { useState } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

const FavoritesProvider = ({children}) => {

    const existingState = JSON.parse(sessionStorage.getItem('favorateIds'));
    const [favoriteIds, setFavoriteIds] = useState(existingState||[]);

    const toggleFavorite = personId => {   
        let newFavoritesIds = favoriteIds.includes(personId)
        ? favoriteIds.filter(id => id !== personId)
        : favoriteIds.concat(personId);

        setFavoriteIds(newFavoritesIds);
        localStorage.setItem('favoriteIds', JSON.stringify(newFavoritesIds));
    }

    return (
        <FavoritesContext.Provider value={{favoriteIds, toggleFavorite}}>
            {children}
        </FavoritesContext.Provider>
    );
}

export {FavoritesProvider};