//Get Transaction - GET
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions')
}

//Add Transaction - POST
exports.addTransaction = (req, res, next) => {
    res.send('POST transaction')
}

//Delete Transaction
exports.deleteTransaction = (req, res, next) => {
    res.send('Delete transaction')
}