import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { ArrowBigDown, ArrowBigUp} from "lucide-react";


const CommentsList = ({comments}) => {
  
  return (
    <div className="max-h-80 overflow-y-auto space-y-4 pr-2">
          {comments.map((c, index) => (<motion.div key={index}
                                                   initial={{ opacity: 0,y:8}}
                                                   animate={{ opacity: 1, y:0 }}
                                                   className="flex gap-3 "
                                        >
              <Avatar className="h-9 w-9">
                <AvatarImage  />
                <AvatarFallback>{c.username.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-zinc-300">{c.username}</p>
                <p className="text-sm text-zinc-400 leading-6">{c.text}</p>
                <div className="place-self-start ">
                    <div className="text-white text-xs rounded-full flex flex-row items-center gap-1 ">
                        <ArrowBigUp size={15} color="white" className="hover:bg-white/40 rounded-full cursor-pointer "/>
                        
                        <ArrowBigDown size={15} color="white" className="hover:bg-white/40 rounded-full cursor-pointer" />
                    </div >
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
  )
}



export default CommentsList