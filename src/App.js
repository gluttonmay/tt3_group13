import logo from './logo.svg';
import './App.css';
import UserInfo from "./components/UserInfo";
import Header from "./components/Header";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <UserInfo />
    </div>
    </Router>
  );
}

export default App;
