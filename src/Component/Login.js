import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState(false);

    const login = () => {
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', {
            username: username,
            password: password,
        }, {
            'x-api-key': 'QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY' 
        }).then((res) => {
            console.log(res);
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
                    setUsername(e.target.value);
                }} 
                required
            />
            <button onClick={login}>Login</button>
        </div>
    )
}
