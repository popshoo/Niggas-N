import { useState, useEffect } from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { UserContext } from '../contexts/UserContext';

export const UserProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        return onAuthStateChanged(auth, user => {
            setUser(user);
            setIsLoading(false);
        });
    }, [])

    return(
        <UserContext.Provider value={{isLoading, user}}>
            {children}
        </UserContext.Provider>
    );
}