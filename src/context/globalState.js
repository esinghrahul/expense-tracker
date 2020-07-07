import React, { createContext, useReducer } from 'react'
import AppReducer from './appReducer'

const INITIAL_STATE = {
    transactions: []
}

export const GlobalContext = createContext(INITIAL_STATE)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE)

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}