import React, { useState, useEffect } from 'react'
import axios from 'axios'

function TransactionHistory(props)
{
    const [accountKey, setAccountKey] = useState("key123");
    const [transactionId, setTransactionId] = useState(123);
    const [orderType, setOrderType] = useState('BUY');
    const [timestamp, setTimestamp] = useState('1614921081');
    const [assetSymbol, setAssetSymbol] = useState('as');
    const [assetAmount, setAssetAmount] = useState(1000);
    const [assetPrice, setAssetPrice] = useState(2.00);
    const [cashAmount, setCashAmount] = useState(5000.00);

    useEffect(() =>
    {
        const headers = {"x-api-key": "QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY"};
        const body = {"username": "Group13", "password": "QZAesJtZdQQyAJX"};

        axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view", body, {
            headers: headers
          }).then((response) => {
            console.log(response);
            console.log(response.data);
            setTransactionId(response.data.transactionId);
            setOrderType(response.data.orderType);
            setTimestamp(response.data.timestamp);
            setAssetSymbol(response.data.assetSymbol);
            setAssetAmount(response.data.assetAmount);
            setAssetPrice(response.data.assetPrice);
            setCashAmount(response.data.cashAmount);
          });

    }, []);

    return(
        <div>
            <h1>TransactionHistory</h1>
            <h3>{transactionId}</h3>
            <h3>{orderType}</h3>
            <h3>{timestamp}</h3>
            <h3>{assetSymbol}</h3>
            <h3>{assetAmount}</h3>
            <h3>{assetPrice}</h3>
            <h3>{cashAmount}</h3>
        </div>
    );
}

export default TransactionHistory
