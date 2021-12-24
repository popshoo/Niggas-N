import {friendsReducer} from './friends';
import { ADD_FRIEND, EDIT_FRIEND } from '../actions/friends';

const friend1 = {
    id: '123',
    name: 'Eva Heyes',
    profilePicUrl: `${process.env.PUBLIC_URL}/friend-11.jpg`,
    age: 44,
    bio: 'I like aventures',
    BirthDay: 'March 3',
    interest: ['Traveling', ' Languages', ' Meeting People'],
}

const friend2 = {
    id: '456',
    name: 'Elizabeth Taylor',
    profilePicUrl: `${process.env.PUBLIC_URL}/friend-67.jpg`,
    age: 32,
    bio: 'I like Desing',
    BirthDay: 'August 7',
    interest: ['Dance', ' Sexting', ' Desing'],
}

test('Prepends the new friend info to the existing friends array when ADD_FRIEND action occurs', () => {
    const startingState = [friend1];
    const fakeAction = {
        type: ADD_FRIEND,
        payload: {
            newFriendInfo: friend2,
        }
    }

    const actual = friendsReducer(startingState, fakeAction);
    const expected = [friend2, friend1];

    expect(actual).toEqual(expected);
});

test('Applies updates to friend when EDIT_FRIEND action occurs', () => {
    const startingState = [friend1, friend2];
    const fakeAction = {
        type: EDIT_FRIEND,
        payload: {
            friendId: '123',
            updates: {name: 'Eva Heyes'},
        },
    };

    const actual = friendsReducer(startingState, fakeAction);
    const expected = [{ ...friend1, name: 'Eva Heyes'}, friend2];

    expect(actual).toEqual(expected);
});