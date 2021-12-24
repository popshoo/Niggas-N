import { useSelector ,useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { PersonInfoForm } from "../components/PersonInfoForm";
import {editFriend} from '../actions/friends';
import { getFriendById, getFriends } from '../selectors/friends';

const EditFriendPage = () => {
    console.log('EditFriendPage rendering');

    const {friendId} = useParams();
    const selectedFriend = useSelector(getFriendById(friendId));
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