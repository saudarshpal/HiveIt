import { postModalAtom } from "@/store/atoms/Modal"
import { BellIcon, CirclePlus, CircleUser, MessageCircle, MessageCircleCodeIcon, MessageCircleDashed, MessageCircleMore, SearchIcon } from "lucide-react"
import { useSetRecoilState } from "recoil"

const TopBar = () => {
  const setPostModal = useSetRecoilState(postModalAtom)
  return (
    <>
      <header className="border-0 border-b border-sky-700 px-md ">
        <div className="h-15 flex itmes-center px-3">
          <div className="flex items-center justify-start">
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
               <path fill="#29b6f6" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"></path><path fill="#0277bd" d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
             </svg>
             <span className="text-white text-3xl font-bold px-3">RimSide</span>
          </div>
          <div className="w-full flex items-center">
              <div className="w-full flex items-center px-40">
                   <div className="bg-neutral-600 flex items-center gap-2 m-3 rounded-full px-3 py-2 w-110 ">
                      <SearchIcon color="gray" size={20}/>
                      <input type="text" placeholder="Search RimSide " className="text-white px-1 w-full outline-none rounded-full placeholder:text-md  "></input>
                    </div>
              </div>      
          </div>
          <div className="flex items-center gap-2 ">
             <div className="bg-neutral-600 flex items-center p-1.5 rounded-full cursor-pointer">
                 <MessageCircleMore size={22} color="white" />
             </div>
             <div className="bg-sky-700 text-white text-lg font-medium flex items-center gap-1 px-3 py-1 rounded-full cursor-pointer hover:bg-sky-600" onClick={()=>setPostModal(true)}>
                   Create<CirclePlus size={22} color="white"/>
             </div>
             <div className="bg-neutral-600 flex items-center p-1.5 rounded-full cursor-pointer">
                 <BellIcon size={22} color="white" />
             </div>
             <div className="bg-neutral-600 flex items-center p-1.5 rounded-full cursor-pointer">
                 <CircleUser size={22} color="white"/>
             </div>
          </div>
        </div>

      </header>
    </>
  )

}

export default TopBar