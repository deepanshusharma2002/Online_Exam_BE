const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

// CRUD routes
router.post('/', userController.createUser);       // Create user
router.get('/', userController.getUsers);          // Get all users
router.get('/:id', userController.getUserById);    // Get user by ID
router.put('/:id', userController.updateUser);     // Update user
router.delete('/:id', userController.deleteUser);  // Delete user
router.post('/login', userController.loginUser);

module.exports = router;
