import React from 'react'

export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : ''
    return(
        <li className={transaction.amount > 0 ? 'plus' : 'minus'}>{transaction.text}
        <span>{sign}{Math.abs(transaction.amount)} INR<button className='delete-btn'></button></span>
        </li>
    )
}