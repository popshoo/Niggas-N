import { Navigate, Route } from 'react-router-dom';
import {useUser} from '../hooks/useUser'

export const UnauthedRoute = props => {
    const {isLoading, user} = useUser();

    if (isLoading) {
        return <p>Loading...</p>
    }   
    
    return !!user 
        ? <Navigate to="/user-profile" />
        : <Route {...props} />; 
};