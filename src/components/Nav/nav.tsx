import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Store/authSlice';
import './nav.scss';
import logo from '../../assets/icons/logo.png';

export default function Nav() {
    const dispatch = useDispatch();
    // @ts-ignore
    const { accessToken, username } = useSelector(state => state.auth);

    const logoutUser = () => {
        dispatch(logout());
        localStorage.removeItem('accessToken');
        localStorage.removeItem('username');
        alert('Logout successful!');
    };

    return (
        <div className="NavContainer">
            <img src={logo} width="130px" height="50px" alt={logo}/>
            <ul>
                {!accessToken ? (
                    <>
                        <li><Link to="/login">로그인</Link></li>
                        <div className="navLine"></div>
                        <li><Link to="/Signup">회원가입</Link></li>
                    </>
                ) : (
                    <>
                        <li>Welcome, {username}!</li>
                        <li onClick={logoutUser}>로그아웃</li>
                        <li className="reviewBtn">리뷰 작성하기</li>
                    </>
                )}
            </ul>
        </div>
    );
}
