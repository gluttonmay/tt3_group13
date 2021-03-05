import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TransactionHistory from './components/TransactionHistory'


function App() {
  
  return (
    <Router>
      <div>
        <Route path='/history' exact component={TransactionHistory} />
      </div>
    </Router>
  );
}

export default App;
