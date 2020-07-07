import React from 'react';
import { Header } from './components/Header.component';
import './App.css'
import { Balance } from './components/Balance.component';
import { IncomeExpenses } from './components/IncomeExpenses.component';
import { TransactionList } from './components/TransactionList.component';
import { AddTransaction } from './components/AddTransaction.component';
import { GlobalProvider } from './context/globalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
