import './App.css';
import { useState, useEffect } from 'react'
import TransactionHistory from './components/TransactionHistory'


function App() {
  const [transactions, setTransactions] = useState([])
  const accountKey = ""

  useEffect(() => {
    const getTasks = async () => {
      const transactionsFromAPI = await fetchTransactionHist(accountKey)
      setTransactions(transactionsFromAPI)
    }

    getTasks()
  }, [])

  //Fetch transaction history
  const fetchTransactionHist = async (accountKey) => {
    const res = await fetch(`https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view/${accountKey}`)
    const data = await res.json()

    return data
  }

  return (
    <div>
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
