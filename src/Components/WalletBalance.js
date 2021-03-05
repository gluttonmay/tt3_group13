import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function WalletBalance() {

    const[assetBalance, setAssetBalance] = useState ("")
    const[cashBalance, setCashBalance] = useState("")

    var postData = {accountKey: "cc9fd35f-3d59-4700-8d78-ad5405c767ad"}
    var user= localStorage.getItem(postData)
    var decoded = jwt_decode(user)
    console.log(decoded) 

    const fetchbal = () => {
        axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance", 
        postData, 
        {headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            "x-api-key": "QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY"}})
        .then((response) => {
            console.log(response.data)
            setAssetBalance(response.data.assetBalance)
            setCashBalance(response.data.cashBalance)
        }).catch((error) => {
            window.alert(error)
        })
    }

    useEffect(() => {
        fetchbal()
    })

    return (
        <div>
            <div>
                <img src= "https://static.thenounproject.com/png/3201525-200.png" alt="Avatar"/>
            </div>

            <div>
                <h2>Available Balance</h2>
                <div>
                    Asset Balance: $ {assetBalance}
                </div>
                <div>
                    Cash Balance: $ {cashBalance}
                </div>

            </div>
            
        </div>
    )
}