export const ADD_FAVORITE = 'ADD_FAVORITE';
export const addFavorite = (friendId) => ({
    type: ADD_FAVORITE,
    payload: {friendId: '123'}
});


export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const removeFavorite = (friendId) => ({
    type: REMOVE_FAVORITE,
    payload: {friendId},
});




/*
dispatch({ addFavorite, {friendId: '123'}})
*/