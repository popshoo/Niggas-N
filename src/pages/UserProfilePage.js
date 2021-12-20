import { useState } from 'react';
import { myprofileData as startingInfo } from '../data';
import { ProfileInfo } from '../components/ProfileInfo';
import {PersonInfoForm} from '../components/PersonInfoForm'
import styles from './UserProfilePage.Module.css'


const UserProfilePage = () => {
    const existingInfo = JSON.parse(localStorage.getItem('userInfo'));
    
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState(existingInfo || startingInfo);

    const updateUserInfo = updatedInfo => {
        setUserInfo(updatedInfo);
        localStorage.setItem('userInfo', JSON.stringify(updatedInfo));
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