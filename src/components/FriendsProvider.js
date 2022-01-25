import axios from "axios";
import { useState, useEffect } from "react";
import { FriendsContext } from "../contexts/FriendsContext";

const FriendsProvider = ({children}) => {
    const [isLoading , setIsLoading] = useState(true);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const loadFriend = async () => {
            const response = await axios.get('/friends');
            setFriends(response.data);
            setIsLoading(false);
        }
        loadFriend();
    }, []);

    const addFriend = async newFriendInfo => {
        const response = await axios.post('/friends', newFriendInfo);
        setFriends(response.data);
    }

    const updateFriend = async updateInfo => {
        const friendId = updateInfo.id;
        const response = await axios.put(`/friends/${friendId}`, updateInfo);
        setFriends(response.data);
    }

    const removeFriend = async friendId => {
        const response = await axios.delete(`/friends/${friendId}`);
        setFriends(response.data);
    }

    return (
        <FriendsContext.Provider value={{isLoading, friends, addFriend, updateFriend, removeFriend}}>
            {children}
        </FriendsContext.Provider>
    );
}

export {FriendsProvider};