import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_API } from "../utils/constants"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"
import {HOVideocard} from "../components/VideoCard"


const VideoContainer = () => {


  const [videos,setvideos] = useState([])
  const UpdatedVideocard = HOVideocard(VideoCard)

  //calling youtube api
  useEffect(()=>{
    getVideos()
    
  },[])

  const getVideos= async() =>{
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json()
   // console.log(json.items)
    setvideos(json.items)
  }



  return (
    <div className="flex flex-wrap">
      {
        videos.map((video)=> <Link key={video.id} to={"/watch?v=" + video.id}>{
          video.id ? <VideoCard info={video}/> : <UpdatedVideocard info={video}/>
        }
          </Link>)
      }
      {/* <VideoCard info={videos[0]}/> */}
    </div>
  )
}

export default VideoContainer
