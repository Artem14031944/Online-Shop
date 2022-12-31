const AppError = require('../error/apiError');


module.exports = function(err, req, res, next) {
    if(err instanceof AppError) {
        return res.status(err.status).json({message: err.message})
    }

    return err.status(500).json({message: 'Упс!!!'})
}

