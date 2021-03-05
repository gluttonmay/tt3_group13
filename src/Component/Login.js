import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
            <button>Login</button>
        </div>
    )
}
