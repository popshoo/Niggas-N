import PropTypes from 'prop-types';
import { NewFriendPage } from '../pages/NewFriendPage';
import styles from './NewFriendCard.Module.css'

const NewFriendCard = ({onClick = () => {} }) => {
    return (
        <div onClick={onClick} className={styles.cardContainer}>
            <h3>Add New Friend</h3>
        </div>
    );
}

NewFriendPage.propTypes = {
    onClick : PropTypes.func,
}

export {NewFriendCard};