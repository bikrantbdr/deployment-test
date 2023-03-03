router = require('express').Router()

const { createHotel, updateHotel, deleteHotel, getHotel, getHotels, countByCity, countByType, getHotelRooms } = require('../controllers/hotel')
const { verifyAdmin } = require('../utils/verifyToken')

router.post('/', verifyAdmin, createHotel)
router.put('/:id', verifyAdmin, updateHotel)
router.delete('/:id', verifyAdmin, deleteHotel)
router.get('/find/:id', getHotel)
router.get('/', getHotels)
router.get('/countByCity', countByCity)
router.get('/countByType', countByType)
router.get('/room/:hotelId', getHotelRooms)

module.exports = router