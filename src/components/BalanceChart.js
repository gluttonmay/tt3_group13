import React, {useState, useEffect} from "react";
import axios from "axios";

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";

function BalanceChart(props)
{
    const [data, setData] = useState([]);
    const [assetBalance, setAssetBalance] = useState(null);
    const [cashBalance, setCashBalance] = useState(null);

    useEffect(() =>
    {
        // get user info from api
        const headers = {"x-api-key": "QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY"};
        const body = {"accountKey": props.acckey};
        axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance", body, {
            headers: headers
          }).then((response) => {
            console.log(response);
            if (response.status === 200)
            {
                setAssetBalance(response.data.assetBalance);
                setCashBalance(response.data.cashBalance);

                var data0 = [
                    {
                      name: "Asset Balance",
                      amt: 2400,
                    },
                    {
                      name: "Cash Balance",
                      amt: 2210,
                    }
                ];

                data0[0].amt = response.data.assetBalance;
                data0[1].amt = response.data.cashBalance;

                setData(data0);
            }
          })
          .catch((error) => {
            console.log(error);
          });

    }, [props.acckey]);

    return(
        <div>
            {assetBalance && cashBalance && <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize = {50}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey= "name"/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey = "amt" fill = "#8884d8"/>
            </BarChart>}
        </div>
    );
}

export default BalanceChart;