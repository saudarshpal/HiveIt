import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRecoilState, useRecoilValue} from "recoil";
import { createModalAtom } from "@/store/atoms/Modal";
import { postCommentAtom, postIdAtom } from "@/store/atoms/Post";
import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import { ArrowRight } from "lucide-react";
import axios from "axios";

const CommentSection =()=>{
  const postId = useRecoilValue(postIdAtom)
  const [modal,setModal] = useRecoilState(createModalAtom)
  const [postAllcomments,setPostAllComments] = useState([])
  // const authHeader = localStorage.getItem('token')
  const [comment,setComment] = useState('')

  const fetchPostComments = async()=>{
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/${postId}/comments`,{
          headers : {
            Authorization : 'Bearer '+authHeader
          }
    })
    setPostAllComments(response.data.comments)
  }
  
  const CreateComment = async()=>{
       await axios.post( `${import.meta.env.VITE_API_BASE_URL}/${postId}/comments`,{content: comment},{
          headers : {
            Authorization : 'Bearer '+authHeader
        }
      })
  }
  useEffect(()=>{
  fetchPostComments()
  },[])
  return (
    <>
     {modal==="postComment" && <Card className="bg-neutral-900 border-neutral-800 shadow-neutral-600 rounded-2xl w-full max-w-2xl p-3">
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle className="text-xl font-semibold text-gray-100">Add Comment</CardTitle>
           <ArrowRight onClick={()=>setModal(null)}color="white" size={20} className="cursor-pointer"></ArrowRight>
      </CardHeader>   
      <CardContent className="space-y-4">
        <div className="space-y-3 pb-4 border-b border-neutral-800">
          <Textarea value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="Write a comment..."
                    className="bg-neutral-800 border-neutral-700 text-neutral-200 resize-none"/>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={CreateComment}>Comment</Button>
        </div>

        <CommentsList comments={postAllcomments}/>
        
      </CardContent>
    </Card>}
    </>
    
  );
}

export default CommentSection
