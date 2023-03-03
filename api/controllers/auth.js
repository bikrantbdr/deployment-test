const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { CreateError } = require('../utils/CreateError');

exports.register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            isAdmin: req.body.isAdmin || false
        })

        await newUser.save();
        res.status(200).json({
            "success": true,
            "message": "User created successfully"
        })

    } catch (error) {
        next(error)
    }
}

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) return next(CreateError("User not found😥", 404))
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(CreateError("Invalid password for the username😥", 401))

        token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET)

        res.cookie("access_token", token).status(200).json({
            "success": true,
            "message": "User logged in successfully"
        })

    } catch (error) {
        next(error)
    }
}