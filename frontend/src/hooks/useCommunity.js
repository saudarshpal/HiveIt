const { communityAtom } = require("@/store/atoms/Community")
const { useEffect } = require("react")
const { useRecoilState } = require("recoil")

const useCommunity = () => {
  const [community,setCommunity] = useRecoilState(communityAtom)
  const fetchCommunity = async()=>{
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/community/bulk`)
        setCommunity(response.data.communities)
  }
  useEffect(()=>{
    fetchCommunity()
  },[])
  return community
}
export default useCommunity