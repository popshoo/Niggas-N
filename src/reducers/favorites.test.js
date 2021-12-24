import {favoritesReducer} from './favorites';
import {ADD_FAVORITE, REMOVE_FAVORITE} from '../actions/favorites';

test('Adds an id to favorites when the ADD_FAVORITE ction occurs', () => {
    const startingState = ['007'];
    const fakeAction = { type: ADD_FAVORITE, payload: {friendId: '456'} };

    const actual = favoritesReducer(startingState, fakeAction);
    const expected = ['007', '456'];

    expect(actual).toEqual(expected);
});

test('Remove id from favorite then REMOVE_FAVORITE action occurs', () => {
    const startingStart = ['123','456','789'];
    const fakeAction = {type: REMOVE_FAVORITE, payload: {friendId: '789'}};

    const actual = favoritesReducer(startingStart, fakeAction);
    const expected = ['123','456'];

    expect(actual).toEqual(expected);
});