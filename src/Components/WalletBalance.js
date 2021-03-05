import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function WalletBalance() {

    const[assetBalance, setAssetBalance] = useState ("")
    const[cashBalance, setCashBalance] = useState("")

    const fetchbal = () => {
        axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance", {
            assetBalance: assetBalance,
            cashBalance: cashBalance
        }, 
        {headers: QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY})
        .then((response) => {
            console.log(response.data[0])
            setAssetBalance(response.data[0].assetBalance)
            setCashBalance(response.data[0].cashBalance)
        }).catch((error) => {
            windows.alert(error)
        })
    }

    return (
        <div>
            <div>
                <img src= "https://static.thenounproject.com/png/3201525-200.png"/>
            </div>

            <div>
                <h2>Available Balance</h2>
                <div>
                    Asset Balance: 
                </div>
                <div>
                    Cash Balance: $
                </div>
            </div>
            
        </div>
    )
}
