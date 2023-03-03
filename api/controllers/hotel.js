const Hotel = require('../models/Hotel');
const Room = require('../models/Room');

exports.createHotel = async (req, res, next) => {
    
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(201).json(savedHotel)
    } catch(err) {
        next(err)
    }
}

exports.updateHotel = async (req, res, next) => {

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedHotel)
    } catch(err) {
        next(err)
    }
}

exports.deleteHotel = async (req, res, next) => {

    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel has been deleted successfully!')
    } catch(err) {
        next(err)
    }
}

exports.getHotel = async (req, res, next) => {
    
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch(err) {
        next(err)
    }
}

exports.getHotels = async (req, res, next) => {
    try {
        const { min, max, ...others } = req.query

        const hotels = await Hotel.find({ ...others, 
            cheapestPrice: {$gte: min || 1, $lte:max || 900}
            }).limit(req.query.limit)
        res.status(200).json(hotels)
    } catch(err) {
        next(err)
    }
}

exports.countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(',')
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch(err) {
        next(err)
    }
}

exports.countByType = async (req, res, next) => {
    try {
        const hotels = await Hotel.countDocuments({type:'hotel'})
        const apartments = await Hotel.countDocuments({type:'apartment'})
        const resorts = await Hotel.countDocuments({type:'resort'})
        const villas = await Hotel.countDocuments({type:'villa'})
        const cabins = await Hotel.countDocuments({type:'cabin'})
        
        res.status(200).json([
            {type:'hotels', count:hotels},
            {type:'apartments', count:apartments},
            {type:'resorts', count:resorts},
            {type:'villas', count:villas},
            {type:'cabins', count:cabins}
        ])
    } catch (err) {
        next(err)
    }
}

exports.getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.hotelId)
        const list = await Promise.all(hotel.rooms.map(room => {
            return Room.findById(room)
            })
        )
        res.status(200).json(list)
    } catch(err) {
        next(err)
    }
}