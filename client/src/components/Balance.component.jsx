import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState'
import {numberWithCommas} from '../utils/format'

export const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(trx=> trx.amount)
    const total = amounts.reduce((acc, item)=> (acc += item), 0).toFixed(2)
    return(
        <>
            <h4>Your Balance: </h4>
            <h1>INR {numberWithCommas(total)}</h1>
        </>
    )
}