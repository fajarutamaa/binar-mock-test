const router = require('express').Router()
const storage = require('../libs/multer')
const { ListUsers, DeleteUser, ChangePhoto, ViewProfile } = require('../controllers/user.controller')
const { Authenticate } = require('../middleware/restrict')

router.get('/', ListUsers)
router.delete('/:username', DeleteUser)
router.put('/change-photo', Authenticate, storage.image.single('image'), ChangePhoto)
router.get('/:username', ViewProfile)

module.exports = router