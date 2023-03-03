const Room = require('../models/Room');
const Hotel = require('../models/Hotel');

exports.createRoom = async (req, res) => {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } })
        res.status(201).json(savedRoom);
    } catch(err) {
        next(err);
    }
}

exports.updateRoom = async (req, res, next) => {

    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedRoom)
    } catch(err) {
        next(err)
    }
}

exports.deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    try {
        await Room.findByIdAndDelete(req.params.id)
        await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } })
        res.status(200).json('Room has been deleted successfully!')
    } catch(err) {
        next(err)
    }
}

exports.getRoom = async (req, res, next) => {
    
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    } catch(err) {
        next(err)
    }
}

exports.getRooms = async (req, res, next) => {
    
    try {
        const rooms = await Room.find()
        res.status(200).json(rooms)
    } catch(err) {
        next(err)
    }
}