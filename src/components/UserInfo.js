import React, {useState, useEffect} from "react";
//import {BrowserRouter, Route, useHistory, useLocation} from "react-router-dom";
import axios from "axios";

import BalanceChart from "./BalanceChart";

function UserInfo(props)
{
    const [accountKey, setAccountKey] = useState("");
    const [firstName, setFirstName] = useState("first");
    const [lastName, setLastName] = useState("last");
    const [nric, setNric] = useState("S1234567C");
    const [address, setAddress] = useState("test blk test #12-345");
    const [phoneNumber, setPhoneNumber] = useState("98765432");
    const [email, setEmail] = useState("test@test.com");

    useEffect(() =>
    {
        // get user info from api
        const headers = {"x-api-key": "QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY"};
        const body = {"username": "Group13", "password": "QZAesJtZdQQyAJX"};

        axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login", body, {
            headers: headers
          }).then((response) => {
            console.log(response);
            if (response.status === 200)
            {
                setAccountKey(response.data.accountKey);
                setAddress(response.data.address);
                setEmail(response.data.email);
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setNric(response.data.nric);
                setPhoneNumber(response.data.phoneNumber);
            }
          })
          .catch((error) => {
            console.log(error);
          });

    }, []);

    function handleBalanceClick()
    {
        //history.push("/balance");
        console.log("balance");
    }

    function handleMarketClick()
    {
        //history.push("/market");
        console.log("market");
    }

    function handleHistory()
    {
        //history.push("/history");
        console.log("history");
    }

    function handleLogout()
    {
        //history.push("/login");
        console.log("logout");
    }

    return(
        <div style = {{float: "left"}}>
            <button type = "button" onClick = {handleBalanceClick}>Balance</button>
            <button type = "button" onClick = {handleMarketClick}>Market</button>
            <button type = "button" onClick = {handleHistory}>History</button>
            <button type = "button" onClick = {handleLogout}>Logout</button>
            
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h1>{nric}</h1>
            <h1>{address}</h1>
            <h1>{phoneNumber}</h1>
            <h1>{email}</h1>
            {accountKey && <BalanceChart key = {accountKey} />}
        </div>
    );
}

export default UserInfo;