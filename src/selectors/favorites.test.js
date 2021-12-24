import {
    getFavorites,
    getIsFavorite,
    getNonFavorites,} from './favorites';

const people = [{
    id: '123',
    name: 'Eva Heyes',
    profilePicUrl: `${process.env.PUBLIC_URL}/friend-11.jpg`,
    age: 44,
    bio: 'I like aventures',
    BirthDay: 'March 3',
    interest: ['Traveling', ' Languages', ' Meeting People']
},{
    id: '456',
    name: 'Elizabeth Taylor',
    profilePicUrl: `${process.env.PUBLIC_URL}/friend-67.jpg`,
    age: 32,
    bio: 'I like Desing',
    BirthDay: 'August 7',
    interest: ['Dance', ' Sexting', ' Desing']
},{
    id: '789',
    name: 'Lisbeth Adams',
    profilePicUrl: `${process.env.PUBLIC_URL}/friend-10.jpg`,
    age: 25,
    bio: 'I like Food',
    BirthDay: 'August 27',
    interest: ['Events', ' Cars', ' Rolex']
}]

test('getFavorites correctly populates favoriteIds with people', () => {
    const favorites = ['123', '789'];
    const friends = people;

    const state = {
        favorites,
        friends,
    };

    const actual = getFavorites(state);
    const expected = [people[0], people[2]];

    expect(actual).toEqual(expected);
});

test('getIsFavorite returns true if person id is in favorites', () => {
    const favorites = ['123','789'];
    const id = '765875';
    const state = {
        favorites,
    }

    const actual = getIsFavorite(id, state);
    const expected = false;

    expect(actual).toEqual(expected)
});

test('getNonFavorites returns all people whose id not in favorites', () => {
    const favorites = ['123','789'];
    const friends = people;

    const state = {
        favorites,
        friends,
    }

    const actual = getNonFavorites(state);
    const expected = [people[1]];

    expect(actual).toEqual(expected)
    
});