import {
    UPDATE_PROFILE,
} from '../actions/profile'
import { myprofileData } from '../data'

export const profileReducer = (state = myprofileData, action) => {
    const {type, payload} = action;

    switch(type) {
        case UPDATE_PROFILE: {
            const {updates} = payload;
            return {...state ,...updates};
        }
        default: 
        return state;
    }
}