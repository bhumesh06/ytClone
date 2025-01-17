import {  useSearchParams } from "react-router-dom"
import { YOUTUBE_COMMENT_API1, YOUTUBE_COMMENT_API2} from "../utils/constants"
import { useEffect, useState } from "react"





const CommentContainer = () => {

    const [searchparams] = useSearchParams()
    const [Data , setData] = useState([])
    
    //destructure bacha haoi
    
    useEffect(()=>{
        getdata()
    },[searchparams])

    const getdata = async()=>{
        const vidID = searchparams.get("v")
        const data =  await fetch(YOUTUBE_COMMENT_API1 +vidID+ YOUTUBE_COMMENT_API2)
        const json = await data.json()
        //console.log(json.items)
        setData(json.items)
        //console.log(Data)

        //map karna hai 
    }
  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
     <ul>
     {Data.map((data, index) => (
          <li key={index} className="p-2 m-2 border-b-2 rounded flex ">
            {/* Assuming 'snippet.topLevelComment.snippet' contains the actual comment text */}
           <div className="pr-3">
           <img className="rounded-3xl" src={data.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
           </div>
            <div>
            <p className="font-bold">
              {data.snippet.topLevelComment.snippet.authorDisplayName}
            </p>
            <p>{data.snippet.topLevelComment.snippet.textOriginal}</p>
            </div>
          </li>
        ))}
     </ul>
      
    </div>
  )
}

export default CommentContainer
