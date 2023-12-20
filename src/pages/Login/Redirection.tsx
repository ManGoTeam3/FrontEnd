import {useNavigate, useLocation} from "react-router-dom";
import {useEffect} from "react";

const Redirection = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Log the entire query string to the console
        console.log(`Query string: ${location.search}`);

        // Parse the URL parameters
        const params = new URLSearchParams(location.search);
        const accessToken = params.get('accessToken');
        const nickname = params.get('nickname');

        // Log the access token and nickname to the console
        console.log(`Access Token: ${accessToken}`);
        console.log(`Nickname: ${nickname}`);

        // Store the access token and nickname in the local storage
        if (accessToken && nickname) {
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('nickname', nickname);

            // Navigate to the main page
            navigate('/');
        }
    }, []);

    return <div>로그인 중입니다.</div>;
};

export default Redirection;