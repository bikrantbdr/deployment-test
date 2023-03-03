const { createRoom, updateRoom, deleteRoom, getRoom, getRooms } = require('../controllers/room');
const { verifyAdmin } = require('../utils/verifyToken');

const router = require('express').Router();

router.post('/:hotelId', verifyAdmin, createRoom)
router.put('/:id', verifyAdmin, updateRoom)
router.delete('/:id/:hotelId', verifyAdmin, deleteRoom)
router.get('/:id', getRoom)
router.get('/', getRooms)

module.exports = router