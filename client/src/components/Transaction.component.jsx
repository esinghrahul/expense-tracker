import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState'
import {numberWithCommas} from '../utils/format'

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : ''
    return(
        <li className={transaction.amount > 0 ? 'plus' : 'minus'}>{transaction.text}
        <span>{sign}{numberWithCommas(Math.abs(transaction.amount))} INR<button onClick={()=> deleteTransaction(transaction._id)} className='delete-btn'></button></span>
        </li>
    )
}