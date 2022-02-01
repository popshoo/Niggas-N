import {useContext} from 'react';
import { Navigate, Route } from 'react-router-dom';
import {UserContext} from '../contexts/UserContext';

export const AuthedRoute = props => {
    const {isLoading, user} = useContext(UserContext);
    
    if (isLoading) {
        return <p>Loading...</p>
    }
    
    return !!user 

        ? <Route {...props} /> 
        : <Navigate to="/login" />
};