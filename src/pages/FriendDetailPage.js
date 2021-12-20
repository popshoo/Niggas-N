import { useContext } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { FriendsContext } from '../contexts/FriendsContext';
import { ProfileInfo } from '../components/ProfileInfo';

const FriendDetailPage = () => {
    const navigate = useNavigate(FriendDetailPage);
    const {favoriteIds, toggleFavorite} = useContext(FavoritesContext);
    const {friends} = useContext(FriendsContext);

    const { friendId } = useParams();
    const selectedFriend = friends.find(friend => friend.id === friendId)

    const isFavorite = favoriteIds.includes(friendId);

    const pageActions = [{
        actionName: isFavorite ? 'Remove from Favorited ' : 'Add to Favorite',
        handler: () => toggleFavorite(friendId),
    }, {
        actionName: 'Edit Info',
        handler: () => navigate(`/edit/${friendId}`),
    }]

    return selectedFriend ? (
        <ProfileInfo 
        person={selectedFriend} 
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