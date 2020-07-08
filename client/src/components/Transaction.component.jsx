import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState'

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : ''
    return(
        <li className={transaction.amount > 0 ? 'plus' : 'minus'}>{transaction.text}
        <span>{sign}{Math.abs(transaction.amount)} INR<button onClick={()=> deleteTransaction(transaction.id)} className='delete-btn'></button></span>
        </li>
    )
}