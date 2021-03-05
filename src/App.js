import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import WalletBalance from "./Components/WalletBalance"
import Header from "./Components/Header"
import './App.css';
import UserInfo from "./components/UserInfo";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  
  return (
    <Router>
    <div className="App">
      <Header />
      <WalletBalance />
      <TransactionHistory />
      <UserInfo />
    </div>
    </Router>
  );
}

export default App;
