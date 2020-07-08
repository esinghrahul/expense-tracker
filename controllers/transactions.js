const Transaction = require('../models/Transaction')

//Get Transaction - GET
exports.getTransactions = async(req, res, next) => {
    try{
        const transactions = await Transaction.find()
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    }catch{
        res.send(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

//Add Transaction - POST
exports.addTransaction = async(req, res, next) => {
    res.send('POST transaction')
}

//Delete Transaction
exports.deleteTransaction = async(req, res, next) => {
    res.send('Delete transaction')
}