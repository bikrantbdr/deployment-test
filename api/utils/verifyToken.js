const jwt = require('jsonwebtoken');
const { CreateError } = require('./CreateError');

exports.verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(CreateError("You are not authenticated!", 401))
    
    try {
        jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
            console.log(user)
            req.user = user;
            next()
        })
    } catch (error) {
        next(CreateError("Token is not valid!", 401))
    }
}

exports.verifyUser = (req, res, next) => {
    this.verifyToken(req, res, next, () => {
        if (req.user.id == req.params.id || req.user.isAdmin) next()
        else next(CreateError("You are not allowed to perform this action!", 403))
    })
}

exports.verifyAdmin = (req, res, next) => {
    this.verifyToken(req, res, next, () => {
        console.log(req.user.isAdmin)
        if (req.user.isAdmin) next()
        else next(CreateError("You are not allowed to perform this action!", 403))
    })
}