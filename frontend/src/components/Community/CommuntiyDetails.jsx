import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import UserProfileCard from "../User/UserProfileCard"

const CommuntiyDetails = ({communtiy}) => { 
  return (
    <Card className='bg-black rounded-xs gap-1 px-5 pt-2 pb-4 border-none'>
        <div className='flex flex-col '>
            <span className=" text-neutral-300">{community.name} </span>
            <p className=" text-neutral-500 text-md">{communtiy.desscription}</p>
        </div>
        <CardDescription className="text-sm font-semibold items-center mt-2 text-neutral-500">
            <span >{community.created}</span>
            <div className=" space-y-1 flex flex-row items-center justify-between mt-1">
               <span>Posts {communtiy.count.posts}</span>
               <span>Followers {communtiy.count.subscribers}</span>
            </div>
            <div className="flex flex-col gap-1  mt-3">
                <span className="text-center">Admin</span>
                <UserProfileCard userId={community.admin}/>
            </div>
            <div className="flex flex-col gap-2 border-neutral-700 mt-1 overflow-y-auto">
                <span className="text-center">Moderators</span>
                {communtiy.moderators.map((m,index)=><UserProfileCard key={index} userId={m._id}/>)}
              
            </div>
        </CardDescription>
    </Card>
  )
}

export default CommuntiyDetails