import './App.css';
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom';
import Login from './Component/Login';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path='/' exact component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
