import { Globe } from "lucide-react"
import { Card, CardDescription} from "../ui/card"
import UserProfileCard from "../User/UserProfileCard"

const CommuntiyDetails = ({community}) => { 
  return (
    <Card className='bg-black rounded-xs gap-1 px-5 pt-2 pb-4 border-none mt-2'>
        <div className='flex flex-col '>
            <span className=" text-neutral-300 font-semibold">{community.name} </span>
            <p className=" text-neutral-500 text-md">{community.description}</p>
        </div>
        <CardDescription className="text-sm font-semibold items-center mt-2 text-neutral-500">
            <span className="flex flex-row gap-2" ><Globe size={18}/>{community?.created && new Date(community.created).toLocaleDateString("en-GB", {
                                                                                        day: "2-digit",
                                                                                        month: "short", 
                                                                                        year: "numeric"
                                                                                    })}
            </span>
            <div className=" space-y-1 flex flex-row items-center justify-between mt-3">
               <span>Posts {community.count?.posts}</span>
               <span>Followers {community.count?.subscribers}</span>
            </div>
            <div className="flex flex-col gap-1  mt-3">
                <span className="text-center mb-1">Admin</span>
                <UserProfileCard userId={community.admin}/>
            </div>
            <div className="flex flex-col gap-2 border-neutral-700 mt-1 overflow-y-auto">
                <span className="text-center">Moderators</span>
                {community.moderators?.map((m,index)=><UserProfileCard key={index} userId={m._id}/>)}
              
            </div>
        </CardDescription>
    </Card>
  )
}

export default CommuntiyDetails