import express from 'express';
import userRouter from './routes/user'
import communityRouter from './routes/community'
import postRouter from './routes/post'


const router = express.Router();


router.get('/user',userRouter);
router.get('/community',communityRouter)
router.get('/post',postRouter)