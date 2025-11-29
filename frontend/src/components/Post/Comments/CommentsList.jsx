import { motion } from "framer-motion";
import Comment from "./Comment";



const CommentsList = ({comments,postId}) => {
  const totalcomments = comments.length
  return (
    <div className="max-h-80 overflow-y-auto space-y-4 pr-2">
          {totalcomments>0 ? comments.map((c, index) => (<motion.div key={index}
                                                   initial={{ opacity: 0,y:8}}
                                                   animate={{ opacity: 1, y:0 }}
                                                   className="flex gap-3 "
                                        >
              <Comment comment={c} postId={postId}/>
              
            </motion.div>
          )) : <div className="text-neutral-600"> No comments posted </div>}
        </div>
  )
}



export default CommentsList