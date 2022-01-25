import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { ProfileInfo } from '../components/ProfileInfo';
import { FriendsContext } from '../contexts/FriendsContext';

const FriendDetailPage = () => {
    const navigate = useNavigate(FriendDetailPage);
    const {favoriteIds, toggleFavorite, removeFavorite} = useContext(FavoritesContext);
    const {removeFriend} = useContext(FriendsContext)
    const { friendId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [friend, setFriend] = useState(null);
    const isFavorite = friend && favoriteIds.includes(friend.id);

    useEffect(() => {
        const loadFriend = async () => {
            try {
                const response = await axios.get(`/friends/${friendId}`);
                setFriend(response.data);
                setIsLoading(false);    
            } catch (e) {
                console.log(e)
                setIsLoading(false);
            }
        }
        loadFriend();
    }, [friendId]);

    const pageActions = [{
        actionName: isFavorite ? 'Remove from Favorited ' : 'Add to Favorite',
        handler: () => toggleFavorite(friendId),
    }, {
        actionName: 'Edit Info',
        handler: () => navigate(`/edit/${friendId}`),
    }, {
        actionName: 'Delete Friend',
        handler: async () => {
            await removeFavorite(friendId);
            await removeFriend(friendId);
            navigate('/');
        }    
    }];

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return friend ? (
        <ProfileInfo 
        person={friend} 
        actions={pageActions}/>
    ): (
        <>
            <p>Oops! Couldn't fiend that friend</p>
            <Link to="/">
            <button >Back To Home</button>
            </Link>
        </>
    )
}

export { FriendDetailPage };