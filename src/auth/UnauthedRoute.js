import {useContext} from 'react';
import { Navigate, Route } from 'react-router-dom';
import {UserContext} from '../contexts/UserContext';

export const UnauthedRoute = props => {
    const {isLoading, user} = useContext(UserContext);

    if (isLoading) {
        return <p>Loading...</p>
    }   
    
    return !!user 
        ? <Navigate to="/" />
        : <Route {...props} />; 
};