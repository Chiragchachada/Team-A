module.exports = (err, req, res, next) => {

    let status = 500
    let message = ''

    if (err.name === 'CastError') {
        message = `Resource not found. Invalid: ${err.path}`;
        status = 404
        // err = new CustomError(message, 404);
    }
    if (err.name === 'TokenExpiredError') {
        message = `Json Web Token is expired, try again with fresh token`;
        status = 400
        // err = new CustomError(message, 404);
    }

    // Duplicate key error
    if (err.code == 11000) {
        message = `Duplicate key`;
        status = 400
        //err = new CustomError(message, 400);
    }
    if (err.name === 'ValidationError') {
        message = `Schema Validation Failed, try again with proper validation`;
        status = 400
        // err = new CustomError(message, 404);
    }
    


    res.status(status).json({
        success: false,
        message: message
    })
}