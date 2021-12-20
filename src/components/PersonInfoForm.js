import { useState } from 'react';
import PropTypes from 'prop-types'
import styles from './PersonInfoForm.Module.css';

const PersonInfoForm = ({person = {}, onsubmit = () => {}, buttonText = 'Submit' }) => {
    const [name,setName] = useState(person.name || '');
    const [age,setAge] = useState(person.age || '');
    const [profilePicUrl,setProfilePicUrl] = useState(person.profilePicUrl || '');
    const [bio, setBio] = useState(person.bio || '');
    const [BirthDay, setBirthDay] = useState(person.BirthDay || '');
    const [interest, setInterest] = useState((person.interest && person.interest.join(', ')) || '');
    

    const onCreateClicked = () => {
        const newFriend = {
            name,
            age,
            profilePicUrl,
            bio,
            BirthDay,
            interest: interest.split(',').map(str => str.trim()),
        }
        onsubmit(newFriend);
    }
    return (
        <>
        <div className={styles.intoForm}>
            <label htmlFor="name">
                Name
            </label>
            <input id="name" 
                placeholder="YOUMI"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
            <label htmlFor="age">
                Age
            </label>
            <input id="age" 
                placeholder="Age"
                type="number"
                value={age}
                onChange={e => setAge(Number(e.target.value))} />
            <label htmlFor="age">
                Profile Pic Url
            </label>
            <input id="profile-pic-url" 
                placeholder="https://..."
                type="text"
                value={profilePicUrl}
                onChange={e => setProfilePicUrl( e.target.value)} />
            <label htmlFor="bio">
            Bio
            </label>
            <textarea id="bio" 
                placeholder="Bio"
                type="text"
                value={bio}
                onChange={e => setBio(e.target.value)} />
            <label htmlFor="BirthDay">
            Birthday
            </label>
            <input id="BirthDay" 
                placeholder="Experations Date ;D"
                type="text"
                value={BirthDay}
                onChange={e => setBirthDay(e.target.value)} />
            <label htmlFor="interest">
            Interest
            </label>
            <input id="interest" 
                placeholder="Tastes"
                type="text"
                value={interest}
                onChange={e => setInterest(e.target.value)} />
            <button onClick={onCreateClicked}>{buttonText}</button>
        </div>
        </>
    ); 
}

PersonInfoForm.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string,
        profilePicUrl: PropTypes.string,
        age: PropTypes.number,
        bio: PropTypes.string,
        BirthDay: PropTypes.string,
        interest: PropTypes.arrayOf(PropTypes.string),
    }),
    onsubmit: PropTypes.func,
    buttonText: PropTypes.string,
}

export {PersonInfoForm};