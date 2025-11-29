import CommentVote from "./commentVote";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Comment = ({comment,postId}) => {
  const authorId = comment?.author
  const [user,setUser] = useState({}) 
  const authHeader = localStorage.getItem('authHeader')
  const getUser = async()=>{
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/${authorId}`,{
        headers : {
          'Authorization' : authHeader
        }
      })
      setUser(response.data.user)
   }
   useEffect(()=>{
    getUser()
   })
  return (
      <div className="flex felx-row ">
        <div className="pt-1">
          <Avatar className="h-8 w-8">
                  <AvatarImage img={user?.profile?.avatar?.url}/>
                  <AvatarFallback>{user?.username?.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col w-full pl-2">
              <div className="flex flex-col items-start">
                <span className="text-sm text-center font-medium text-zinc-300 ">{user.username}</span>
                <p className="text-sm text-zinc-400 leading-6">{comment.content}</p>
              </div>
              <div className="place-self-start">
                  <div className="text-white text-xs rounded-full flex flex-row items-center gap-1 ">
                      <CommentVote comment={comment} postId={postId}/>
                  </div >
              </div>
        </div>
      </div>
         
  )
}

export default Comment