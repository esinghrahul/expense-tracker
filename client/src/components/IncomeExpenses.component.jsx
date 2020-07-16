import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState'
import {numberWithCommas} from '../utils/format'

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(trx=> trx.amount)
    const income = amounts.filter(item=> item > 0).reduce((acc, item)=> (acc+= item), 0).toFixed(2)
    const expense = amounts.filter(item=> item < 0).reduce((acc, item)=> (acc+= item), 0).toFixed(2)
    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{numberWithCommas(income)} INR</p>
            </div>
            <div>
            <h4>Expense</h4>
            <p className="money minus">{numberWithCommas(expense)} INR</p>
            </div>
        </div>
    )
}