import { Link } from 'react-router-dom';
import {getAuth, signOut} from 'firebase/auth'
import styles from './NavBar.Module.css'
import { useUser } from '../hooks/useUser';

const NavBar = () => {
    // TEXT HACKED!    
    // const maliciousString = `<img onerror='alert("Hacked!")' src='invalid-image' />`;
    const {isLoading, user } = useUser();

    const logOut = async () => {
        const auth = getAuth();
        await signOut(auth);
    }


    return (
        <nav className={styles.navBar}> 
            <Link to="/">
             <h1 className={styles.siteHeading}>Friend Tracker</h1>
            </Link>

            {isLoading ? <p>Loading...</p> : !!user ? (
            <>
            {/* <p className={styles.actionButton}>Logged In As {user.email}</p>     */}
            <button onClick={logOut} className={styles.actionButton}>Log Out</button>
            <Link to="/user-profile">
                <button className={styles.actionButton}>My Profile</button>
            </Link>
            {/* <div dangerouslySetInnerHTML={{__html: maliciousString}}></div> */}
            
            </>
            ) : (
            <>
            <Link to="/login">
                <h1 className={styles.actionButton}>Log In</h1>
            </Link>

            <Link to="/create-account">
                <button className={styles.actionButton}>Create Account</button>
            </Link>
            </>
            )}
        </nav>
    );
}

export {NavBar};