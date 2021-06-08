const router = require('express').Router();
const usersController = require('../../controllers/users');

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.delete('/:id', usersController.deleteUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUserById);

module.exports = router;