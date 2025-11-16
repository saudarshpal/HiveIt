import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardDescription,  } from "../ui/card"

const UserDetails = ({user,totalposts}) => {
  return (
    <Card className='bg-black rounded-xs gap-1 px-5 pt-2 pb-4 border-none'>
        <div className='flex flex-col '>
            <div className="flex flex-row items-center gap-2">
               <Avatar>
                  <AvatarImage />
                  <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
               </Avatar>
               <span className=" text-neutral-300">{user.profile.displayName}</span>
            </div> 
            <p className=" text-neutral-500 text-md mt-2">{usernmae.profile.description}</p>
        </div>
        <CardDescription className="text-sm font-semibold items-center mt-2 text-neutral-500">
            <span >Gender {username.profile.gender}</span>
            <div className=" space-y-1 flex flex-row items-center justify-between mt-1">
               <span>Followers {username.followers.length}</span>
               <span>Following {username.following.length}</span>
            </div>
            <div className=" space-y-1 flex flex-row items-center justify-between mt-1">
               <span>Posts {totalposts}</span>
               {/* <span>Communities 30</span> create backend route user spacific communities */}
            </div>
        </CardDescription>
    </Card>
  )
}

export default UserDetails