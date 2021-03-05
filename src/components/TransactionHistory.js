import React, { useState, useEffect } from 'react'
import axios from 'axios'

function TransactionHistory(props)
{
    const [transactions, setTransactions] = useState([])

    useEffect(() =>
    {
        const headers = {"x-api-key": "QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY"};
        //const body = {"username": "Group13", "password": "QZAesJtZdQQyAJX"};
        const accountKey = "cc9fd35f-3d59-4700-8d78-ad5405c767ad"

        axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view", {accountKey}, {
            headers: headers
          }).then((response) => {
            console.log(response);
            console.log(response.data);
            setTransactions(response.data.transactions);
          });

    }, []);

    const transactionItems = transactions.map((transaction) =>    <li>{transaction.orderType}</li>  );

    return(
        <ul>{transactionItems}</ul>
            /* {transactions.map((transaction) =>    <li>{number}</li>  );
            <h1>TransactionHistory</h1>
            <p>TransactionId: {transaction.transactionId}</p>
            <p>Order Type: {transaction.orderType}</p>
            <p>Timestamp: {transaction.timestamp}</p>
            <p>Asset Symbol: {transaction.assetSymbol}</p>
            <p>Asset Amount: {transaction.assetAmount}</p>
            <p>Asset Price: ${transaction.assetPrice}</p>
            <p>Cash Amount: ${transaction.cashAmount}</p>
        </> */
    );
}

export default TransactionHistory
