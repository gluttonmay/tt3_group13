import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import WalletBalance from "./Components/WalletBalance"
import Header from "./Components/Header"
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
