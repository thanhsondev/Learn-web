import express from 'express';
import APIController from '../controller/APIController.js';
let router = express.Router();

const initAPIRoute = (app) => {
  /*Tạo route*/
  // Các method chính:
  // Create = Post // Read = Get // Update = Put // Delete = Delete
  router.get('/users', APIController.getAllUSer); //Method GET -> READ data
  router.post('/create-user', APIController.createNewUser); //Method POST -> Create data
  router.put('/update-user', APIController.updateUser); //Method PUT -> Update data
  router.delete('/delete-user/:id', APIController.deleteUser); //Method DELETE -> Delete data

  return app.use('/api/v1', router);
}
export default initAPIRoute;