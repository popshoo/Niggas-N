import {Navigate, Route} from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export const AuthedRoute = props => {
    const {isLoading, user} = useUser();
    
    if (isLoading) {
        return <p>Loading...</p>
    }
    
    return !!user 
    
        ? <Route {...props} />
        : <Navigate to="/login" />

};