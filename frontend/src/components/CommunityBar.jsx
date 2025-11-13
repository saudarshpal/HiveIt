import { SearchIcon } from "lucide-react"

const CommunityBar = () => {
  return (
    <div className=" h-full rounded-lg">
        <div className="w-full flex items-center">
            <div className="bg-neutral-600 flex items-center gap-1 m-3 rounded-full px-3 py-2 w-full ">
                <SearchIcon size={20} color="gray"/>
                <input type="text" placeholder="Search Communities " className=" text-white px-1 w-full outline-none rounded-full placeholder:text-sm "></input>
            </div>      
          </div>
    </div>
  )
}

export default CommunityBar