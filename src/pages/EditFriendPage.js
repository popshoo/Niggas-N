import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FriendsContext } from "../contexts/FriendsContext";
import { PersonInfoForm } from "../components/PersonInfoForm";

const EditFriendPage = () => {
    const {friendId} = useParams();
    const {friends, updateFriend} = useContext(FriendsContext);
    const selectedFriend = friends.find(f => f.id === friendId);
    const navigate = useNavigate();

    const saveUpdateInformation = updateInfo => {
        
        updateFriend({
        ...updateInfo,
        id: friendId,});

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