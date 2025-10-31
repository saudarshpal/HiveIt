import express from "express";
import { commentOnPost, createPost, deleteComment, deletePost, getAllcomments, getAllPosts, getPostById, getYourPosts, voteOnComment, voteOnPost} from "../controllers/postController.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = express.Router()

router.use(authMiddleware)

router.post('/create',createPost) // create a post
router.get('/all',getAllPosts) // get all posts
router.get('/own',getYourPosts) // get your posts
router.delete('/:postId/delete',deletePost) // delete a post
router.get('/:postId',getPostById) // get post by id
router.post('/:postId/votes',voteOnPost) // vote on post
router.post('/:postId/comments',commentOnPost) // comment on post
router.get('/:postId/comments',getAllcomments) // get all comments on post
router.delete('/:postId/comments/:commentId/delete',deleteComment) // delete comment
router.post('/:postId/comments/:commentId/votes',voteOnComment)// vote on comment



export default router;