import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EditFriendPage } from './pages/EditFriendPage';
import { FriendDetailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { NewFriendPage } from './pages/NewFriendPage';
import { UserProfilePage } from './pages/UserProfilePage';
// import { FavoritesProvider } from './components/FavoritesProvider'; 
// import { FriendsProvider } from './components/FriendsProvider';
import { NavBar } from './components/NavBar';
import styles from './App.module.css';


export const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
  
      <div className={styles.contentContainer}>
        <Routes>
          <Route path="/" 
            element={<FriendsPage 
                  
            />} exact/>
          <Route path="/friends/:friendId" 
            element={<FriendDetailPage 

            />}  />
            <Route path="/edit/:friendId" 
            element={<EditFriendPage 

            />}  />
          <Route path="/user-profile"
            element={<UserProfilePage 
            
            />} />
          <Route path="/new-friends"
            element={<NewFriendPage />
            
            }>    
          </Route>
        </Routes>
          </div>
          
    </BrowserRouter>
  );
}