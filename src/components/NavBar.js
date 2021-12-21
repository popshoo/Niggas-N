import { Link } from 'react-router-dom';
import styles from './NavBar.Module.css'

const NavBar = () => {
    // TExt HACKED!    
    const maliciousString = `<img onerror='alert("Hacked!")' src='invalid-image' />`;
    
    return (
        <nav className={styles.navBar}> 
            <Link to="/">
            <h1 className={styles.siteHeading}>Friend Tracker</h1>
            </Link>

            <Link to="/user-profile">
            <button className={styles.profileButton}>My Profile</button>
            </Link>
            <div dangerouslySetInnerHTML={{__html: maliciousString}}></div>
        </nav>
    );
}

export {NavBar};