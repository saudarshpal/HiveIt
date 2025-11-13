import { Button } from "./ui/button"
import { HomeIcon, LogOutIcon, PlusIcon, User2Icon } from "lucide-react"

const SideBar = () => {
  return (
      <div className=" py-4 px-3 h-screen ">
        <div className="place-self-center flex flex-col justify-around gap-6 h-full w-full">
          <div className="flex flex-col gap-6">
             <div className=" text-white  text-sm font-semibold rounded-2xl flex items-center justify-start gap-2 py-2 w-full hover:bg-sky-600 pl-10 cursor-pointer">
                <HomeIcon size={20} color="white"/> Home
            </div>
            <div className="  text-white text-sm font-semibold rounded-2xl flex items-center justify-start gap-2 py-2 w-full  hover:bg-sky-600 pl-10 cursor-pointer">
                <User2Icon size={20} color="white"/>Profile
            </div>
            
            <div className="  text-white text-sm font-semibold rounded-2xl flex items-center justify-start gap-2 py-2 w-full  hover:bg-sky-600 pl-10 cursor-pointer">
                <PlusIcon size={20} color="white"/>Start a community
            </div>
            <Button className="bg-sky-700 text-sm rounded-lg flex items-center justify-center hover:bg-sky-600 cursor-pointer">
                <LogOutIcon size={20}/> Logout
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-1 ">
                <span className="text-start text-neutral-500 text-xs font-semibold hover:underline hover:text-white cursor-pointer">RimSide Rules</span>
                <span className="text-start text-neutral-500 text-xs font-semibold hover:underline hover:text-white cursor-pointer">Privacy Policy</span>
                <span className="text-start text-neutral-500 text-xs font-semibold hover:underline hover:text-white cursor-pointer">User Agreement</span>
                <span className="text-start text-neutral-500 text-xs font-semibold hover:underline hover:text-white cursor-pointer">Accessibility</span>
                <span className="text-start text-neutral-500 text-xs font-semibold hover:underline hover:text-white cursor-pointer">RimSide, Inc. ©2025. All rights reserved</span>
          </div>
        </div>
    </div>    
  )
}

export default SideBar