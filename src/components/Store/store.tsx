import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // imports the local storage
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from './authSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
    },
});

let persistor = persistStore(store);

export { store, persistor };
