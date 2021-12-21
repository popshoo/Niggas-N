import {useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import {v4 as uuid} from 'uuid';
import { PersonInfoForm } from '../components/PersonInfoForm';
import { FriendsContext } from '../contexts/FriendsContext';


const NewFriendPage = ()=> {
    const {addFriend} = useContext(FriendsContext);
    const navigate = useNavigate();

    const onFormSubmit = friendInfo => {
        const newFriend = {
            ...friendInfo,
            id: uuid(),
        };
    addFriend(newFriend);
    navigate('/');
    }
    return (
        <>
        <h1>Add A New Friend</h1>
        <PersonInfoForm 
        onsubmit={onFormSubmit}
        buttonText="Create"/>
        </>
    ); 
}

export {NewFriendPage};