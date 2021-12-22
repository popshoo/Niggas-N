import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { PersonInfoForm } from "../components/PersonInfoForm";
import {editFriend} from '../actions/friends';

const EditFriendPage = () => {
    const {friendId} = useParams();
    const friends = useSelector(state => state.friends);
    const selectedFriend = friends.find(f => f.id === friendId);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const saveUpdateInformation = updateInfo => {
        dispatch(editFriend(friendId, updateInfo));
        navigate('/');
    };

    return (
        <>
        <h1>Edit Info</h1>
        <PersonInfoForm 
        person={selectedFriend} 
        onsubmit={saveUpdateInformation} 
        buttonText="Save Changes"/>

        </>
    );
}

export { EditFriendPage };