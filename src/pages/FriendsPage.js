import { useContext } from 'react';
import { useNavigate } from                 'react-router-dom';
import PropTypes from 'prop-types';
import { myprofileData } from  '../data';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { FriendsContext } from '../contexts/FriendsContext';
import { PeopleList } from                  '../components/PeopleList';
import { WelcomeMessage } from              '../components/WelcomeMessage';
import styles from                          './FriendsPage.Module.css'

const FriendsPage = () => {

    const {favoriteIds, toggleFavorite} = useContext(FavoritesContext);
    const {friends} = useContext(FriendsContext);

    const navigate = useNavigate();
         
    const favorites = favoriteIds.map(id => 
        friends.find(friend => friend.id === id));

    const nonFavorites = friends.filter(friend => 
        !favoriteIds.find(id => friend.id === id));

    const goToPersonDetail = personId => {
        navigate(`/friends/${personId}`)
    }

        return (
        <>  
        <WelcomeMessage name={myprofileData.name} />
        <p>You have {favoriteIds.length} {favoriteIds.length === 1 ? 'favorite' : 'favorites'}</p>
        <h2 className={styles.contentHeading}>Favorites</h2>
        <PeopleList 
            people={favorites} 
            onClickPerson={goToPersonDetail} 
            personActionName="Remove from Favorites"
            onPersonAction={toggleFavorite}/>

        <h2 className={styles.contentHeading}>My Friends</h2>

        <PeopleList 
            people={nonFavorites} 
            onClickPerson={goToPersonDetail} 
            personActionName="Add to Favorites"
            onPersonAction={toggleFavorite}
            allowAdditions/>
        </>
        );
}

FriendsPage.propTypes = {
    onToggleFavorite: PropTypes.func.isRequired,
}

export { FriendsPage };