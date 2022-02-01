import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthedRoute } from './auth/AuthedRoute';
import { UnauthedRoute } from './auth/UnauthedRoute';
import { EditFriendPage } from './pages/EditFriendPage';
import { FriendDetailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { NewFriendPage } from './pages/NewFriendPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { FavoritesProvider } from './components/FavoritesProvider'; 
import { FriendsProvider } from './components/FriendsProvider';
import { UserProvider } from './components/UserProvider';
import { NavBar } from './components/NavBar';
import { LoginPage } from './components/LoginPage';
import styles from './App.module.css';

export const App = () => {
  return (
    <UserProvider>
    <BrowserRouter>
      <NavBar/>
      <FavoritesProvider>
      <FriendsProvider>
        <div className={styles.contentContainer}>
          <Routes>
            {/* NOTES: (AUTHEDROUTE) AND (UNAUTHEDROUTE) UNDEFINED For testing security purposes */}

            <Route 
              path="/"
              element={<FriendsPage />} />
                      
            <Route 
              path="/friends/:friendId" 
              element={<FriendDetailPage />} /> 
                      
            <Route
              path="/edit/:friendId" 
              element={<EditFriendPage />} />
            
            <Route
              path="/user-profile"
              element={<UserProfilePage />} />

            <Route 
              path="/new-friends"
              element={<NewFriendPage />} />

            
            <Route 
              path="/login"
              element={<LoginPage />} />    
            
            </Routes>  
            </div>
          </FriendsProvider>
        </FavoritesProvider>
    </BrowserRouter>
    </UserProvider>
  );
}