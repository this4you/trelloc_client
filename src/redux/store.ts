import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
// import { moviesReducer } from './movieSlice';
 import { authReducer } from 'auth-module/redux/auth-state';


const reducer = {
    auth: authReducer
};

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;