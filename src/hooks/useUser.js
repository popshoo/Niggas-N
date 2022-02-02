import {useContext} from 'react';
import { UserContext } from '../contexts/UserContext';

export const useUser = () => {
    const {isLoading, user} = useContext(UserContext);
    return {isLoading, user};
};