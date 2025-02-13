import  { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from "../utils/appSlice"
import { Link,useSearchParams } from 'react-router-dom'
import { USERICON_LOGO, YOUTUBE_VIDEO_API } from '../utils/constants'
import SideVideo from './SideVideo'
import CommentContainer from './CommentContainer'
import { value_converter } from '../utils/data'

const WatchPAge = () => {

  
    const [videos,setvideos] = useState([])
    const [data,setdata] =useState("")
    const dispatch = useDispatch()
    const[searchparams] = useSearchParams()
   // console.log(searchparams.get("v"))



    useEffect(()=>{
        getVideos()
       dispatch(closeMenu())
    },[])

    useEffect(()=>{
      getvideodata()
      
    },[searchparams])


      //get video for sidevideo
      const getVideos= async() =>{
      const data = await fetch(YOUTUBE_VIDEO_API)
      const json = await data.json()
      //console.log(json.items)
      setvideos(json.items)
    }


    //get video data
    const getvideodata = async()=>{
      const vidId = searchparams.get("v")
      const viddata = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +vidId+"&key=AIzaSyCTLBERtTKBWWT0MwhN2bCF6zB5Zig9Gkk")
      const json = await viddata.json()
      //console.log(json.items)
      setdata(json.items[0])
    }

   

   


  if(data === null) return <h1>Loading</h1>

  return (

    <div className=' flex spacing-x-2'>
       
        <div className=' w-8/12 px-2 rounded-sm'>
             <iframe 
             width="900" 
             height="500" 
             src={"https://www.youtube.com/embed/" + searchparams.get("v")}
             
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
             allowFullScreen> 
             </iframe>
             <h1 className='font-bold text-2xl'>{data?.snippet?.title}</h1>
            <div className='flex py-3 m-1'>
                <div className='px-1 py-1'>
                  <img className='w-10' alt='img' src={USERICON_LOGO}/>
                </div>
                <div className='pr-10'>
                  <h1 className='font-bold'>{data?.snippet?.channelTitle}</h1>
                  <p className='text-xs'>{value_converter(data?.statistics?.viewCount)} Subscribers</p>
                </div>
                <div className="flex items-center space-x-4 px-3 py-2">
                    <button className="px-6 py-2 bg-red-500 text-white font-bold text-sm rounded-3xl hover:bg-red-700 transition duration-200 shadow-md">
                     Subscribe
                    </button>
                        <button className="px-4 py-2 rounded-2xl bg-gray-300 hover:bg-gray-200 text-sm font-semibold">
                      Like
                     </button>
                     <button className="px-4 py-2 rounded-2xl bg-gray-300 hover:bg-gray-200 text-sm font-semibold">
                       Dislike
                     </button>
                     <button className="px-4 py-2 rounded-2xl bg-gray-300 hover:bg-gray-200 text-sm font-semibold">
                       Share
                     </button>
                </div>
            </div>
              <div className='border-b-2 border-gray-300 w-full my-2'></div>
                <CommentContainer />
              </div>
        
        <div className='w-5/12'> 
        <ul>
          {
            videos.map((video)=> <Link key={video.id} to={"/watch?v=" + video.id}><li><SideVideo info={video}/></li></Link>)
          }
         <li>video</li>
        </ul>
        </div>
    </div>
  )
}

export default WatchPAge






