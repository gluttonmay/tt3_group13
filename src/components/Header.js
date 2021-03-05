import React from 'react'
import {Link, useHistory} from "react-router-dom" 
import "./Header.css"

export default function Header() { 

    const history = useHistory()

    const logOut = () => {
        localStorage.clear()
        history.push('/')
        window.location.reload()
    }
        return (
            <header className="secnav">
                <table>
                    <tr>
                        <td>
                            <Link to="/account"><button className="button">Account Details</button></Link>
                        </td>

                        <td>
                            <Link to="/market"><button className="button">Buy and Sell</button></Link>
                        </td>

                        
                        <td>
                            <Link to="/history"><button className="button">View Transactions</button></Link>
                        </td>
                        

                        <td>
                            <Link to="/balance"><button className="button">Account Balance</button></Link>
                        </td>            
                    </tr>
                </table>          
            </header>
        )
}