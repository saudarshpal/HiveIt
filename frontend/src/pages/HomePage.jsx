import TopBar from "../components/TopBar"
import SideBar from "../components/SideBar"
import CommunityBar from "../components/CommunityBar"
import { useRecoilValue } from "recoil"
import { postModalAtom } from "@/store/atoms/Modal"



const HomePage = () => {
  const postModal = useRecoilValue(postModalAtom)
  return (
    <div className='bg-neutral-900 h-full'>
       <TopBar></TopBar>
       <div className='flex flex-row'>
          <div className='border-r border-sky-700 w-3/15'>
             <SideBar/>
          </div>
          <div className='w-8/15 px-4 py-2'>
          </div>
          <div className='border-l border-sky-700 px-5 py-2 w-4/15'>
              <CommunityBar />
          </div>

       </div>
    </div>
  )
}

export default HomePage