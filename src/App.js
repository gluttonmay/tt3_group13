import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import WalletBalance from "./components/WalletBalance"
import Header from "./components/Header"
import UserInfo from "./components/UserInfo";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <WalletBalance />
    
      </div>
    </Router>
  );
}

export default App;