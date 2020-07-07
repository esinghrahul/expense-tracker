import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState'
import { Transaction } from './Transaction.component'

export const TransactionList=() => {
    const {transactions} = useContext(GlobalContext)
    return(
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(trx=> (
                    <Transaction key = {trx.id} transaction = {trx} />
                    ))}
            </ul>
        </>
    )
}