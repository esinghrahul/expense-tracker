import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/globalState'
import { Transaction } from './Transaction.component'

export const TransactionList=() => {
    const {transactions, getTransactions} = useContext(GlobalContext)
    useEffect(()=> {
        getTransactions()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
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