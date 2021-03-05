import React, {useState, useEffect} from "react";
import axios from "axios";

function UserInfo(props)
{
    const [accountKey, setAccountKey] = useState("key123");
    const [firstName, setFirstName] = useState("first");
    const [lastName, setLastName] = useState("last");
    const [nric, setNric] = useState("S1234567C");
    const [address, setAddress] = useState("test blk test #12-345");
    const [phoneNumber, setPhoneNumber] = useState("98765432");
    const [email, setEmail] = useState("test@test.com");

    useEffect(() =>
    {
        const headers = {"x-api-key": "QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY"};
        const body = {"username": "Group13", "password": "QZAesJtZdQQyAJX"};

        axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login", body, {
            headers: headers
          }).then((response) => {
            console.log(response);
            console.log(response.data);
            setAccountKey(response.data.accountKey);
            setAddress(response.data.address);
            setEmail(response.data.email);
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setNric(response.data.nric);
            setPhoneNumber(response.data.phoneNumber);

          });

    }, []);

    return(
        <div style = {{float: "left", }}>
            <h1>{accountKey}</h1>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h1>{nric}</h1>
            <h1>{address}</h1>
            <h1>{phoneNumber}</h1>
            <h1>{email}</h1>
        </div>
    );
}

export default UserInfo;