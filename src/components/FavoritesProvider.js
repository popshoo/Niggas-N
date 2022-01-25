import { useState, useEffect } from 'react';
import axios from 'axios';
import { FavoritesContext } from '../contexts/FavoritesContext';

const FavoritesProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [favoriteIds, setFavoriteIds] = useState([]);

    useEffect(() => {
       const loadFavorites = async () => {
           const response = await axios.get('/favorites');
           setFavoriteIds(response.data);
           setIsLoading();
       }

       loadFavorites();
    }, []);

    const removeFavorite = async friendId => {
        const response = await axios.delete(`/favorites/${friendId}`);
        setFavoriteIds(response.data);
    }

    const toggleFavorite = async friendId => {   
        if (favoriteIds.includes(friendId)) {
            removeFavorite(friendId);
        }else {
            const response = await axios.post('/favorites', {friendId});
            setFavoriteIds(response.data);
        }
    }

    return ( 
        <FavoritesContext.Provider value={{favoriteIds, toggleFavorite, removeFavorite, isLoading}}>
            {children}
        </FavoritesContext.Provider>
    );
}

export {FavoritesProvider};