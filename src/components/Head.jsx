import { useDispatch } from "react-redux"
import {YT_LOGO,USERICON_LOGO,HAMBURGER_LOGO, YOUTUBE_SUGGESTION_API, SEARCH_ICON, YOUTUBE_VIDEO_API} from "../utils/constants"
import { toggleMenu } from "../utils/appSlice"
import { useEffect, useState } from "react"


const Head = () => {

  const [searchText, setsearchtext] = useState("")
  const[suggestions, setsuggestions] = useState([])
  const [showsuggestions, setshowsuggestions]= useState(false)
  const dispatch = useDispatch()
  //console.log(suggestions)
  //debouncing
  useEffect(()=>{
    //make an api call on every key stroke
    //but if the diff btw 2 key stroke is more than 200ms
    //decline the api call
    const timer = setTimeout(()=>getsearchsuggestions(),200)
    return ()=>{
      clearTimeout(timer)
    }
  },[searchText])


  const getsearchsuggestions= async()=>{
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchText)
    const json = await data.json()
    //console.log(json)
    setsuggestions(json[1])
  }

   

  const togglemenuhandler =()=>{
      dispatch(toggleMenu())
  }


  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        <img onClick={()=>togglemenuhandler()} className="h-10 p-2 m-2 cursor-pointer" alt="menu" src={HAMBURGER_LOGO}/>
        <img className="h-10 p-2 m-2" alt="ytlogo" src={YT_LOGO}/>
      </div>
      <div className=" col-span-10  py-3 ">
        <div className="">
        <input className="  px-2  w-1/2 border border-gray-400  rounded-l-full" placeholder="search" type="text" value={searchText} onChange={(e)=> setsearchtext(e.target.value)} onFocus={()=>setshowsuggestions(true)} onBlur={()=>setshowsuggestions(false)}  />
        <button  className=" px-2   border border-gray-400 bg-gray-300 text-white rounded-r-full" >Search</button>
        
        </div>
        {
           showsuggestions && <div className="absolute bg-white  py-2 px-1 w-[40rem]  rounded-sm text-left shadow-lg">
          <ul>
            {
              suggestions.map((sug)=> <li  key={sug} className="cursor-pointer hover:bg-gray-200">{sug}</li> )
            }
            
          </ul>

        </div>
        }
      </div>
      <div className="col-span-1 flex">
        <img className="h-10  m-2" alt="usericon" src={USERICON_LOGO}/>
        <h1 className="py-4">User</h1>
      </div>
    </div>


  )
}

export default Head


//
// 