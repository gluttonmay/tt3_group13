import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import './Login.css';
import jwt from 'jsonwebtoken';


// Password: QZAesJtZdQQyAJX

export default function Login() {

    // write this to use history.push later on
    const history = useHistory();

    // get inputs from the input fields to send to API for validation
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState(false);

    // setting data for post method
    var postData = {
        'username': username,
        'password': password,
    };

    let axiosConfig = {
        headers: {
                'x-api-key': 'QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY',
        }
    };

    // login function to validate login and store token
    const login = () => {
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', postData, axiosConfig)
        .then((response) => {
            console.log(response);
            if(!response.status===200) {
                setLoginStatus(false);
            } else {
                // const id = response[0];
                // const token = jwt.sign({id}, 'secret', {
                //     expiresIn: 500
                // });
                localStorage.setItem('token', response.data[0]);
                setLoginStatus(true);
                history.push('/account');
            }
        });
    };

    // persistant login
    useEffect(() => {
    if(localStorage.getItem('token'))
    {
        history.push('/account')
    }    
    }, [])

    return (
        <div
            className = 'div1' 
            style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL + 'https://images.unsplash.com/photo-1542114740389-9b46fb1e5be7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80'})` ,
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="div2">
                <form className='input-fields'>
                    <h1>Welcome</h1>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }} 
                        required
                    /><br></br>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}                             
                        required
                    /><br></br>
                    <button className="submit" onClick={login}>Submit</button>
                </form>
            </div>
        </div>
    )
}
