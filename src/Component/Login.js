import React, { useState } from 'react';
import axios from 'axios';


// Password: QZAesJtZdQQyAJX

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState(false);

    var postData = {
        'username': username,
        'password': password,
    };

    let axiosConfig = {
        headers: {
                'x-api-key': 'QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY',
        }
    };

    const login = () => {
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', postData, axiosConfig)
        .then((response) => {
            console.log(response);
            if(!response.status===200) {
                setLoginStatus(false);
            } else {
                localStorage.setItem('token', response.data);
                setLoginStatus(true);

            }
            console.log(loginStatus);
        }
    );
};


    return (
        <div>
            <input 
                type='text' 
                placeholder='username'
                onChange={(e) =>{
                    setUsername(e.target.value);
                }} 
                required
            />
            <input 
                type='password' 
                placeholder='password'
                onChange={(e) =>{
                    setPassword(e.target.value);
                }} 
                required
            />
            <button onClick={login}>Login</button>
        </div>
    )
}
