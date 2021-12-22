import { useNavigate } from                 'react-router-dom';
import { useSelector } from 'react-redux';
import { myprofileData } from  '../data';
import { PeopleList } from                  '../components/PeopleList';
import { WelcomeMessage } from              '../components/WelcomeMessage';
import styles from                          './FriendsPage.Module.css'

const FriendsPage = () => {
    const navigate = useNavigate();
         
    const favorites = useSelector(state => state.favorites.map(id =>
        state.find(friend => friend.id === id )));
    const nonFavorites = useSelector(state => state.friends.filter(friend =>
        !state.favorites.find(id => friend.id === id)));


    // const favorites = favoriteIds.map(id => 
    //     friends.find(friend => friend.id === id));
    // const nonFavorites = friends.filter(friend => 
    //     !favoriteIds.find(id => friend.id === id));

    const goToPersonDetail = personId => {
        navigate(`/friends/${personId}`)
    }

        return (
        <>  
        <WelcomeMessage name={myprofileData.name} />
        <p>You have {favorites.length} {favorites.length === 1 ? 'favorite' : 'favorites'}</p>
        <h2 className={styles.contentHeading}>Favorites</h2>
        <PeopleList
            people={favorites} 
            onClickPerson={goToPersonDetail} 
            personActionName="Remove from Favorites"
            onPersonAction={() => {}}/>

        <h2 className={styles.contentHeading}>My Friends</h2>

        <PeopleList
            people={nonFavorites} 
            onClickPerson={goToPersonDetail} 
            personActionName="Add to Favorites"
            onPersonAction={() => {}}
            allowAdditions/>
        </>
        );
}

export { FriendsPage };