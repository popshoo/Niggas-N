import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {v4 as uuid} from 'uuid';
import { PersonInfoForm } from '../components/PersonInfoForm';
import {addFriend} from '../actions/friends'

const NewFriendPage = ()=> {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFormSubmit = friendInfo => {
        const newFriend = {
            ...friendInfo,
            id: uuid(),
        };
    dispatch(addFriend(newFriend));
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