import React, { useState, useEffect } from 'react'
import axios from 'axios'

function TransactionHistory(props)
{
    const [accountKey, setAccountKey] = useState("key123");
    const [orderType, setOrderType] = useState('');
    const [assetSymbol, setAssetSymbol] = useState('');

    useEffect(() =>
    {
        const headers = {"x-api-key": "QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY"};
        const body = {"username": "Group13", "password": "QZAesJtZdQQyAJX"};

        axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view", body, {
            headers: headers
          }).then((response) => {
            console.log(response);
            console.log(response.data);
            setOrderType(response.data.orderType);
            setAssetSymbol(response.data.assetSymbol);
          });

    }, []);

    return(
        <div>
            <h1>{orderType}</h1>
            <h1>{assetSymbol}</h1>
        </div>
    );
}

export default TransactionHistory
