import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./TransactionHistory.css"

function TransactionHistory(props)
{
    const [transactions, setTransactions] = useState([])

    useEffect(() =>
    {
        const headers = {"x-api-key": "QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY"};
        const accountKey = "cc9fd35f-3d59-4700-8d78-ad5405c767ad"

        axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view", {accountKey}, {
            headers: headers
          }).then((response) => {
            console.log(response);
            console.log(response.data);
            setTransactions(response.data);
          }).catch((error) => {
            window.alert(error)
        })

    }, []);

    return(
        <div>
            <h1>TransactionHistory</h1>
            {transactions.map((transaction) => {
                return (
                    <div className='transaction'>
                    <h3>TransactionId: {transaction.transactionId}</h3>
                    <p>Order Type: {transaction.orderType}</p>
                    <p>Timestamp: {transaction.timestamp}</p>
                    <p>Asset Symbol: {transaction.assetSymbol}</p>
                    <p>Asset Amount: {transaction.assetAmount}</p>
                    <p>Asset Price: ${transaction.assetPrice}</p>
                    <p>Cash Amount: ${transaction.cashAmount}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default TransactionHistory
