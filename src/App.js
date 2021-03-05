import './App.css';
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom';
import Login from './Component/Login';
import Account from './Component/Account';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path='/login' exact component={Login}/>
        <Route path='/account' exact component={Account}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
