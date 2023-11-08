import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './components/Store/store'; // Redux store를 import 합니다.
import { login } from './components/Store/authSlice'; // authSlice에서 login 액션 생성자를 import 합니다.
import './index.scss';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const accessToken = localStorage.getItem('accessToken');
const username = localStorage.getItem('username');
if (accessToken && username) {
    store.dispatch(login({ accessToken, username })); // login 액션 생성자를 사용합니다.
}

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
