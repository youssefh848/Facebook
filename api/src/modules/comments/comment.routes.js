import { Router } from 'express';
import * as commentControllenr from './comment.controller.js';

const router = Router()

router.post('/addComment', commentControllenr.addComment)
router.get('/getComments', commentControllenr.getComments)
router.put('/UpdateComment', commentControllenr.UpdateComment)
router.delete('/DeleteComment', commentControllenr.DeleteComment)




  



export default router 
