import React from 'react'

export const TransactionList=() => {
    return(
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                <li className='minus'>Cash
                    <span><button className='delete-btn'></button></span>
                </li>
            </ul>
        </>
    )
}