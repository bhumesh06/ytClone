
const SideVideo = ({info}) => {


    const {snippet, statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;


  return (
    <div className=" flex p-2 m-2  shadow-lg cursor-pointer rounded-sm ">
      <div className=" ">
        <img className="rounded-md w-full h-full" alt="thumbnail" src={thumbnails?.high?.url}></img>
      </div>
    <div className="p-1">
    <ul className="">
       <li className="font-bold py-2 text-s">{title}</li>
       <li  >{channelTitle}</li>
       <li >{statistics.viewCount} Views</li>

    </ul>
    </div>
   </div>
  )
}

export default SideVideo
