import React, { useState } from 'react';
import axios from 'axios';
import './Signup.scss'
import {Link} from "react-router-dom";


const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //회원 가입 절차에는 일반적으로 엑세스 토큰을 필요로 하지 않는다 -> 사용자가 아직 시스템상에 등록되어 있지 않기 때문
    const register = async () => {
        try {
            await axios.post('http://34.83.15.61:8080/api/user/join', {
                userName: username,
                password: password,
            });
            alert('Registration successful!');

        } catch (error) {
            alert('Registration failed!');
            console.error(error);
        }
    };
    return (
        <div>
            <section className="signup">
                <div className="logo">
                    <svg width="267" height="102" viewBox="0 0 267 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M201.186 88.1482H225.865H236.058H266.639V99.9511H201.186V88.1482ZM203.332 85.8949V77.4719C203.332 76.0233 203.332 74.1456 203.332 69.4244L218.461 67.2785C218.783 67.2248 218.89 67.2248 218.944 67.0639H203.332V56.9241H264.224V67.0639H239.385C235.629 67.0639 228.923 67.0639 225.114 67.0639V70.3365C225.114 71.6777 225.114 73.1799 225.114 74.6821C225.543 73.8237 226.026 72.9117 226.455 71.9996C227.045 70.8193 227.528 69.7463 227.796 69.2635H263.527V75.8624H225.114V78.1693C225.114 78.223 225.114 78.223 225.167 78.223H266.102L264.224 85.8949H203.332Z" fill="#3DAB60"/>
                        <path d="M178.117 101.829V88.5774C178.117 81.4957 178.117 74.3603 178.117 67.2249V55.6902H197.967V73.3409C197.967 82.8369 197.967 92.3329 197.967 101.829H178.117ZM134.392 77.8475C134.392 76.2916 134.499 74.7358 134.714 73.3409C135.68 67.2785 138.523 62.3427 142.815 59.0701C146.302 56.4413 150.702 54.9391 155.745 54.9391H155.798C159.071 54.9391 162.075 55.5292 164.758 56.7095L157.14 70.873C157.032 70.8194 156.657 70.7657 156.549 70.7657H156.388C154.189 70.7657 152.901 73.2336 152.901 78.384C152.901 80.6909 153.169 82.4614 153.652 83.7489C154.242 85.2511 155.154 86.0022 156.335 86.0022C157.569 86.0022 158.481 85.1975 159.071 83.5343C159.554 82.3004 159.768 80.5836 159.768 78.384C159.768 73.9311 158.803 71.4632 157.14 70.873L169.962 59.9822C174.522 64.0595 177.204 70.3365 177.204 77.8475C177.204 84.9292 174.844 90.938 170.659 95.0154C166.957 98.6099 161.861 100.756 155.798 100.756C149.36 100.756 144.049 98.3953 140.294 94.3716C136.538 90.3478 134.392 84.5537 134.392 77.8475Z" fill="#3DAB60"/>
                        <path d="M67.8667 99.9511V88.0946C67.8667 84.661 67.8667 81.1738 67.8667 77.6865V73.6092H83.1568C83.3178 73.019 83.4251 72.3752 83.586 71.7851C83.6933 71.1949 83.8543 70.6048 83.9616 70.0146C83.9616 69.961 83.9616 69.961 83.9079 69.961H67.8667V56.2267H98.3933L97.9105 61.4843C97.6959 63.8986 97.4813 66.3128 97.374 68.6734C97.1594 70.2829 97.0521 71.8924 96.8911 73.6092H101.612C101.666 73.6092 101.666 73.6092 101.666 73.5555V55.6902H114.005V77.6329C114.005 85.6803 114.005 93.7278 114.005 101.829H101.666V91.7427C101.666 88.8993 101.666 86.0022 101.666 83.2125C101.666 83.1588 101.666 83.1588 101.612 83.1588H82.1911C82.1375 83.1588 82.1375 83.1588 82.1375 83.2125V85.0365C82.1375 85.6803 82.1375 86.3241 82.1375 87.0216C82.1375 87.0752 82.1375 87.0752 82.1911 87.0752H100.056L98.1787 99.9511H67.8667ZM116.151 101.829V82.8906C116.151 73.8238 116.151 64.757 116.151 55.6902H131.441V69.1562C131.441 80.0471 131.441 90.938 131.441 101.829H116.151Z" fill="#3DAB60"/>
                        <path d="M1.77043 101.829V94.2106C1.77043 92.3865 1.77043 90.6161 1.77043 88.792H44.2609V88.2019C44.2609 87.88 44.2609 87.5581 44.2609 87.2362C44.2609 87.1825 44.2609 87.1825 44.2073 87.1825H2.03868V81.9785H63.6821V84.0172V88.792C63.6821 89.6504 63.6821 90.5088 63.6821 91.3672H21.2453C21.1916 91.3672 21.1916 91.3672 21.1916 91.4208V92.1719C21.1916 92.4402 21.1916 92.6548 21.1916 92.923C21.1916 92.9767 21.1916 92.9767 21.2453 92.9767H46.085H65.077L63.5212 101.829H1.77043ZM0 80.6909V74.7895H24.6788H34.8723H65.4526V80.6909H0ZM1.34123 62.8792V56.0121H64.1113V62.8792H43.7781C39.0569 62.8792 34.3894 62.8792 28.8099 62.8792H17.9726C12.4467 62.8792 6.92079 62.8792 1.34123 62.8792ZM1.87773 73.7165V69.8537H10.6763C7.08174 68.727 6.00876 66.6884 5.52591 64.2205L28.8099 63.2548C28.8099 65.9373 29.6682 68.4588 31.6533 69.8537H35.0869C35.1941 69.8537 35.1942 69.8537 35.1942 69.8L35.9989 66.6347C36.2135 65.7227 36.4281 64.8106 36.6427 63.8986H59.4975C59.1756 64.8106 58.8537 65.7763 58.5854 66.6884C58.2099 67.7614 57.888 68.7807 57.5661 69.8C57.5661 69.8537 57.5661 69.8537 57.6197 69.8537H63.5748V73.7165H1.87773Z" fill="#3DAB60"/>
                        <path d="M188.067 29.7219C181.629 29.7219 176.371 28.327 172.562 25.8055C168.807 23.2839 166.661 19.4748 166.661 14.8609C166.661 13.8416 166.822 12.6613 167.09 11.6956C168.056 7.83285 170.577 4.66752 174.976 2.57518C178.464 0.858395 182.97 0 188.013 0H188.067C191.339 0 194.398 0.429197 196.865 1.12664L189.837 10.8909L190.213 10.9445C193.861 8.63759 198.529 5.57956 202.23 3.27263C206.791 5.90146 209.473 9.87153 209.473 14.8609C209.473 19.6358 207.112 23.4449 202.928 26.1274C199.226 28.488 194.129 29.7219 188.067 29.7219ZM171.489 46.3533V41.6321C171.489 39.3788 171.489 37.1792 171.489 34.9259V31.3314H193.164V33.3164C193.164 33.9602 193.164 34.6577 193.164 35.2478C193.164 35.3015 193.164 35.3015 193.217 35.3015H230.772L229.27 46.3533H171.489ZM184.687 15.7193C184.687 17.1142 184.955 18.1336 185.492 18.831C186.189 19.6894 187.262 20.1186 188.603 20.1186C189.998 20.1186 191.071 19.6894 191.769 18.7237C192.305 17.9726 192.52 17.0606 192.52 15.7193C192.52 13.1978 191.447 11.7493 189.515 11.3737L188.925 11.3201C188.872 11.3201 188.764 11.3201 188.657 11.3201C186.135 11.3201 184.687 12.7686 184.687 15.7193ZM210.385 32.9409V23.6058C210.385 21.4599 210.385 19.3675 210.385 17.2215V0.482846H228.894V9.44234H232.65V26.6102H228.894V32.9409H210.385Z" fill="#3DAB60"/>
                        <path d="M143.859 46.6216V33.3701C143.859 26.2884 143.859 19.153 143.859 12.0176V0.48291H163.71V18.1336C163.71 27.6296 163.71 37.1256 163.71 46.6216H143.859ZM101.476 44.7439V32.8873C101.476 29.4537 101.476 25.9665 101.476 22.4793V18.4019H121.863C122.078 17.7581 122.238 17.0606 122.453 16.4705L122.936 14.8074C122.936 14.7537 122.936 14.7537 122.882 14.7537H101.476V1.01941H140.64L140.05 6.27707C139.782 8.69131 139.514 11.1055 139.299 13.4661C139.084 15.0756 138.924 16.6851 138.763 18.4019H140.64V27.9515H118.698C118.644 27.9515 118.644 27.9515 118.644 28.0052V29.8293C118.644 30.4731 118.644 31.1169 118.644 31.8143C118.644 31.868 118.644 31.868 118.698 31.868H142.786L140.104 44.7439H101.476Z" fill="#3DAB60"/>
                        <path d="M52.6551 46.3534V44.3147C52.6551 43.6709 52.6551 43.0271 52.6551 42.3296C52.6551 42.276 52.6551 42.276 52.6014 42.276H32.8047V30.4731H98.2572V42.276H78.4605C78.4069 42.276 78.4069 42.276 78.4069 42.3296V44.261C78.4069 45.0121 78.4069 45.7096 78.4069 46.3534H52.6551ZM34.7897 28.0588V21.7818C34.7897 19.9577 34.7897 18.1873 34.7897 16.4169L56.6251 14.0563C49.3288 14.0563 42.0861 14.0563 34.7897 14.0563V1.23401H96.2186V14.0563H81.8941H57.3226C57.3226 15.2902 57.3226 16.6851 57.3226 17.919C57.3226 17.9727 57.3226 17.9727 57.3762 17.9727H97.5598L96.2186 28.0588H34.7897Z" fill="#3DAB60"/>
                    </svg>
                </div>
                    <div className={"inputs"}>
                    <input className="login__form" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                    <input  className="login__form" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <button className={"btn"} onClick={register}><p className={"btntxt"}>회원가입</p></button>
                        <Link to={'/login'}><button className={"btn"}><p className={"btntxt"}>로그인</p></button></Link>
                    </div>
            </section>
        </div>
    );
};

export default Signup;