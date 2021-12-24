import {createStore, combineReducers} from 'redux'
import { persistStore , persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {devToolsEnhancer} from 'redux-devtools-extension';
import { favoritesReducer } from './reducers/favorites';
import { friendsReducer } from './reducers/friends';
import { profileReducer } from './reducers/profile';

const rootReducer = combineReducers ({
    favorites: favoritesReducer,
    friends: friendsReducer,
    profile: profileReducer,
});

const persistConfig ={
    key: 'friendsTrackerRoot',
    storage, 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, devToolsEnhancer());
export const persitor = persistStore(store);