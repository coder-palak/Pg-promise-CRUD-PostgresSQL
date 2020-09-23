const express = require('express');
const userRouter = express.Router();

const userController = require('../controller/users.controller');


userRouter.get('/', userController.getUsers)


userRouter.post('/', userController.addUser)


userRouter.put('/', userController.updateUser)


userRouter.delete('/', userController.deleteUser)


module.exports = userRouter;