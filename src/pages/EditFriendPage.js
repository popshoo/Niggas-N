import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PersonInfoForm } from "../components/PersonInfoForm";

const EditFriendPage = () => {
    const {friendId} = useParams();
    const friends = useSelector(state => state.friends);
    const selectedFriend = friends.find(f => f.id === friendId);
    // const navigate = useNavigate();

    const saveUpdateInformation = updateInfo => {
        
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