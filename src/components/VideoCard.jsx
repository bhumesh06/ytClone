import { value_converter } from '../utils/data'




const VideoCard = ({info}) => {
   // console.log(info)
    const {snippet, statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className="p-2 m-2 w-80 shadow-lg cursor-pointer rounded-sm">
     <img className="rounded-md" alt="thumbnail" src={thumbnails?.high?.url}></img>
     <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <p>{value_converter(statistics.viewCount)} Views </p>

     </ul>
    </div>
  )
}

//creating hoc
 export const HOVideocard = (VideoCard)=>{
  return (props)=>{
    return(
      <>
      <label></label>
      <VideoCard {...props}/>
      </>
    )
  }
}

export default VideoCard
