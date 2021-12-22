import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ProfileInfo } from '../components/ProfileInfo';
import { addFavorite, removeFavorite } from '../actions/favorites';

const FriendDetailPage = () => {
    const navigate = useNavigate(FriendDetailPage);
    const dispatch = useDispatch();

    const { friendId } = useParams();

    const selectedFriend = useSelector(state => state.friends.find(friend => friend.id === friendId));
    const isFavorite = useSelector(state => state.favorites.includes(friendId));

    const toggleFavorite = friendId => {
        if(isFavorite) {
            dispatch(removeFavorite(friendId));
        } else {
            dispatch(addFavorite(friendId));
        }
    }

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