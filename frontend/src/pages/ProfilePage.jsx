import TopBar from "@/components/TopBar"
import SideBar from "@/components/SideBar"
import UserProfilePage from "@/components/User/UserProfilePage"
import { useParams } from "react-router-dom"






const ProfilePage = () => {
  const {userId} = useParams()
  return ( 
    <div className='bg-neutral-900 h-full'>
       <TopBar/>
       <div className='flex flex-row'>
          <div className='border-r border-neutral-700 w-3/15'>
             <SideBar/>
          </div>
          <div className='w-12/15 px-4 py-2'>
               <UserProfilePage userId={userId}/>
          </div>
          

       </div>
    </div>
  )
}
export default ProfilePage