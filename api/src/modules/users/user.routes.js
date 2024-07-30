import { Router } from 'express';
import * as userController from './user.controller.js';

const router = Router()

router.post('/registration', userController.addUser)
router.post('/login', userController.login)
router.post('/logOut', userController.logOut)


  



export default router 