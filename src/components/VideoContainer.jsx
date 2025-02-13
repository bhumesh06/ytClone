import { useEffect, useState } from "react"
import {  YOUTUBE_VIDEO_API } from "../utils/constants"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"
import {HOVideocard} from "../components/VideoCard"
import { useSelector } from "react-redux"


const VideoContainer = () => {
  

  const [videos,setvideos] = useState([])
  const UpdatedVideocard = HOVideocard(VideoCard)

  const activeCategory = useSelector((store) => store.sidebar.activeCategory);


  //calling youtube api
  useEffect(()=>{
    getVideos()
    
  },[])

  useEffect(()=>{
    getVideosOG(activeCategory)
    
  },[activeCategory])

  const getVideos= async() =>{
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json()
    //console.log(json.items)
    setvideos(json.items || [])
  }

  const getVideosOG= async(category) =>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=AIzaSyCTLBERtTKBWWT0MwhN2bCF6zB5Zig9Gkk`)
    const json = await data.json()
    //console.log(json.items)
    setvideos(json.items || [])
  }



  return (
    <div className="flex flex-wrap ">
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
