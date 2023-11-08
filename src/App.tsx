import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './components/Store/authSlice'; // authSlice에서 login 액션 생성자를 import 합니다.
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import './App.scss';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const username = localStorage.getItem('username');
        if (accessToken && username) {
            dispatch(login({ accessToken, username })); // login 액션 생성자를 사용합니다.
        }
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Route>
        </Routes>
    )
}

export default App;
