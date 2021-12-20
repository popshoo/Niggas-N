import PropTypes from 'prop-types';
import styles from './ProfileInfo.Module.css';
import { Tag } from './Tag';

const ProfileInfo = ({ 
    person: { profilePicUrl, name, age, bio, BirthDay, interest },
    actions = [],
}) => {  
    
    return (
        <>
            <div className={styles.profilePicContainer}>
                <div className={styles.profilePicWrap}>
                    <img
                        className={styles.profilePic}
                        src={profilePicUrl}
                        alt={`${name} smiling`}/>
                </div>
            </div>
                <h2 className={styles.contentHeading}>MyProfile</h2>
                <h3 className={styles.detailHeading}>Name</h3>
                <p>{name}</p>
                <h3 className={styles.detailHeading}>Age</h3>
                <p>{age}</p>
                <h3 className={styles.detailHeading}>Bio</h3>
                <p>{bio}</p>
                <h3 className={styles.detailHeading}>BirthDay</h3>
                <p>{BirthDay}</p>
                <h3 className={styles.detailHeading}>Interest</h3>
                {interest.map(interest => <Tag key={interest} text={interest} />)}     
                {actions.map(action => (
                    <button key={action.actionName} 
                    className={styles.actionButton} 
                    onClick={action.handler}>{action.actionName}</button>
                ))}
        </>
      );
}

ProfileInfo.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profilePicUrl: PropTypes.string,
        age: PropTypes.number,
        bio: PropTypes.string,
        BirthDay: PropTypes.string,
        interest: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            actionName: PropTypes.string.isRequired,
            onAction: PropTypes.func.isRequired,
        })
    ),
}

export {ProfileInfo};