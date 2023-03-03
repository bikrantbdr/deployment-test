router = require('express').Router()

const { updateUser, deleteUser, getUser, getUsers } = require('../controllers/user')
const { verifyUser, verifyAdmin } = require('../utils/verifyToken')

router.put('/:id', verifyUser, updateUser)
router.delete('/:id', verifyUser, deleteUser)
router.get('/:id', verifyUser, getUser)
router.get('/', verifyAdmin, getUsers)

module.exports = router