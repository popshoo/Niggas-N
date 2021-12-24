import { useSelector , useDispatch} from    'react-redux';
import { useNavigate } from                 'react-router-dom';
import {addFavorite, removeFavorite} from '../actions/favorites'
import { myprofileData } from               '../data';
import { PeopleList } from                  '../components/PeopleList';
import { WelcomeMessage } from              '../components/WelcomeMessage';
import styles from                          './FriendsPage.Module.css'
import { getFavorites, getNonFavorites } from '../selectors/favorites';

const FriendsPage = () => {
    console.log('Friendsp0 Page Rendering')
    const navigate = useNavigate();
    const dispatch = useDispatch();
         
    const favorites = useSelector(getFavorites);
    const nonFavorites = useSelector(getNonFavorites);

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
            onPersonAction={id => dispatch(removeFavorite(id))} />

        <h2 className={styles.contentHeading}>My Friends</h2>

        <PeopleList
            people={nonFavorites} 
            onClickPerson={goToPersonDetail} 
            personActionName="Add to Favorites"
            onPersonAction={id => dispatch(addFavorite(id))}
            allowAdditions/>
        </>
        );
}

export { FriendsPage };