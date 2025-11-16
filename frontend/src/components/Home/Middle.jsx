import React from 'react'
import CreatePost from '../Post/CreatePost'

import Post from '../Post/Post'
import { useRecoilValue } from 'recoil'
import { createModalAtom } from '@/store/atoms/Modal'
import { postAtom } from '@/store/atoms/Post'
import CommentSection from '../Post/CommentSection'
import CreateCommunity from './CreateCommunity'

const Middle = () => {
  const modal = useRecoilValue(createModalAtom)
  const posts = useRecoilValue(postAtom)
  return (
    <>
       {modal=== "createPost" ? (<CreatePost />) :
             modal==="createCommunity" ? (<CreateCommunity/>):
             modal==="postComment" ? (<CommentSection />) :
             posts.map((post,index)=><Post key={index} post={post}/>)
        } 
    </>
  )
}

export default Middle