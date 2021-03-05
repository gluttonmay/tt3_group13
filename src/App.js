<<<<<<< HEAD
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import WalletBalance from "./Components/WalletBalance"
import Header from "./Components/Header"
import './App.css';
import UserInfo from "./components/UserInfo";
=======
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TransactionHistory from './components/TransactionHistory'

>>>>>>> origin/Ting-Xuan

function App() {
  
  return (
    <Router>
<<<<<<< HEAD
    <div className="App">
      <Header />
      <WalletBalance />

      <UserInfo />
    </div>
=======
      <div>
        <Route path='/history' exact component={TransactionHistory} />
      </div>
>>>>>>> origin/Ting-Xuan
    </Router>
  );
}

export default App;
