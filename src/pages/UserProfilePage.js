import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProfileInfo } from '../components/ProfileInfo';
import {PersonInfoForm} from '../components/PersonInfoForm'
import styles from './UserProfilePage.Module.css'

const UserProfilePage = () => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userInfo, setUserInfo] = useState(null);


    useEffect(() => {

        const loadUserInfo = async () => {
            const response = await axios.get('/users/007');
            setUserInfo(response.data);
            setIsLoading(false);
        }

        loadUserInfo();
    }, []);


    const updateUserInfo = async updatedInfo => {
        const response = await axios.put('/users/007', updatedInfo)
        setUserInfo(response.data);
        setIsEditing(false);
    };

    const actions = [{
        actionName: 'Edit My Info',
        handler: () => setIsEditing(true),
    }];

    //Visualize diferentes formas de jugar con el  return de CARGA
    return isLoading ? <p>Loading...</p> : (
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