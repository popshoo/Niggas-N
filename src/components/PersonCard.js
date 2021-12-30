import PropTypes from 'prop-types'
import styles from './PersonCard.Module.css';
import { useEffect } from 'react/cjs/react.development';

const PersonCard = ({
    person: { id, profilePicUrl, name, age },
    onCardClicked,
    actionName,
    onAction,
}) => {
    useEffect(() => {
        console.log('PersonCard effet callback called')

        return () => console.log('PersonCard Cleanup!')
    })
    
    return (
            <div 
                className={styles.card}
                onClick={() => onCardClicked(id)}>
                
                <div className={styles.detailsContainer}>
                <div className={styles.profilePicLeft}>
                    <div className={styles.profilePicWrap}>
                        <img 
                            className={styles.profilePic}
                            src={profilePicUrl}
                            alt=""/>
                    </div>
                </div>
                <div className={styles.cardDetails}>
                    <h3>Name</h3>
                    <p>{name}</p>
                    <h3>Age</h3>
                    <p>{age}</p>
                </div>
            </div>
                {actionName && onAction && (
                <button
                onClick={e => {    
                    onAction(id);
                    e.stopPropagation();
                }}
                className={styles.actionButton}>{actionName}</button>
                )}
                </div>
    );
}
    
PersonCard.propTypes = {
    person: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        profilePicUrl: PropTypes.string,
        age: PropTypes.number,
    }).isRequired,
    isFavorite: PropTypes.bool,
    onCardClicked: PropTypes.func,
    actionName: PropTypes.string,
    onAction: PropTypes.func
};


export {PersonCard};