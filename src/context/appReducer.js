export default(state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(trx=> trx.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default:
            return state
    }
}