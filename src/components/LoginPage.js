import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const logIn = async () => {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/user-profile')
    }

    return (
        <>
        <h1>Log In</h1>
        <input 
            type="email"
            placeholder="C. E."
            className="full-width space-below"
            value={email} 
            onChange={e => setEmail(e.target.value)}/>
        <input
            type="password"
            placeholder='Enter Your Password'
            className='full-width space-below' 
            value={password}
            onChange={e => setPassword(e.target.value)} />
        <button
            className="full-width space-below"
            onClick={logIn}>
        Log In</button>
        <Link to="/create-account">
            Create an account here.
        </Link>
        </>
)};