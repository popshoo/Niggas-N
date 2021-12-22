import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ProfileInfo } from '../components/ProfileInfo';
import {PersonInfoForm} from '../components/PersonInfoForm'
import styles from './UserProfilePage.Module.css'


const UserProfilePage = () => {
    
    const [isEditing, setIsEditing] = useState(false);
    const userInfo = useSelector(state => state.profile)

    const updateUserInfo = updatedInfo => {
        setIsEditing(false);
    }

    const actions = [{
        actionName: 'Edit My Info',
        handler: () => setIsEditing(true),
    }];

    return (
        <>
        <h2 className={styles.contentHeading}>My Profile</h2>
        {isEditing
            ? <PersonInfoForm person={userInfo} onsubmit={updateUserInfo} buttonText='Save Changes'/>
            : <ProfileInfo person={userInfo} actions={actions} />
        }
        </>
    );
}

export { UserProfilePage };