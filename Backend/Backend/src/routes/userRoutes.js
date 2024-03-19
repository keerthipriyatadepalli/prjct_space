const express = require('express');
const Router = express.Router();
const UserController = require('../controllers/userController');
Router.post('/api/add-user',UserController.AddUserData);
Router.get('/api/get-user',UserController.GetUserData);
Router.get("/api/get-single-user/:id",UserController.UserDataById);
Router.put('/api/update-user/:id',UserController.UpdateSingleUser);
Router.delete("/api/delete-user/:id",UserController.DeleteUserData);
module.exports = Router;