import { useState } from "react";
import { FriendsContext } from "../contexts/FriendsContext";
import {friendsData as starterFriends} from '../data';

const FriendsProvider = ({children}) => {
    const existingState = JSON.parse(localStorage.getItem('friends'));
    const [friends, setFriends] = useState(existingState || starterFriends);

    const addFriend = friend => {
        const newFriends = [...friends,friend];
        setFriends(newFriends);
        localStorage.setItem('friends', JSON.stringify(newFriends));
    }

    const updateFriend = updateInfo => {
        const updateFriends = friends.map(friend => {
            if (friend.id === updateInfo.id){
                return updateInfo;
            }
            return friend;
        })

        setFriends(updateFriends);
        localStorage.setItem('friends', JSON.stringify(updateFriends));
    }

    return (
        <FriendsContext.Provider value={{friends, addFriend, updateFriend}}>
            {children}
        </FriendsContext.Provider>
    );
}

export {FriendsProvider};