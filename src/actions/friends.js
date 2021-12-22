export const ADD_FRIEND = 'ADD_FRIEND';
export const addFriend = newFriendInfo => ({
    type: ADD_FRIEND,
    payload: {newFriendInfo},
});

export const EDIT_FRIEND = 'EDIT_FRIEND'; 
export const editFriend = updates => ({
    type: EDIT_FRIEND,
    payload: {updates},
});