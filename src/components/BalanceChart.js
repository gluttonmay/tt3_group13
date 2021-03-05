import React, {useState, useEffect} from "react";
import axios from "axios";

function BalanceChart(props)
{
    const [assetBalance, setAssetBalance] = useState(0.0);
    const [cashBalance, setCashBalance] = useState(0.0);

    useEffect(() =>
    {
        // get user info from api
        const headers = {"x-api-key": "QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY"};
        const body = {"accountKey": "cc9fd35f-3d59-4700-8d78-ad5405c767ad"};

        axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance", body, {
            headers: headers
          }).then((response) => {
            console.log(response);
            if (response.status === 200)
            {
                setAssetBalance(response.data.assetBalance);
                setCashBalance(response.data.cashBalance);
            }
          })
          .catch((error) => {
            console.log(error);
          });

    }, []);

    return(
        <div>
            BALANCE CHART
            {assetBalance}
            {cashBalance}
        </div>
    );
}

export default BalanceChart;