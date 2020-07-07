import React from 'react';
import { Header } from './components/Header.component';
import './App.css'
import { Balance } from './components/Balance.component';
import { IncomeExpenses } from './components/IncomeExpenses.component';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
      <Balance />
      <IncomeExpenses />
      </div>
    </div>
  );
}

export default App;
