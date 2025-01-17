import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import home from "../../assets/home.png"
import cast from "../../assets/cast.png"
import subscription from "../../assets/subscription.png"
import explore from "../../assets/explore.png"
import gaming from "../../assets/game_icon.png"
import tech from "../../assets/tech.png"
import save from "../../assets/save.png"
import sports from "../../assets/sports.png"
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
import more from "../../assets/more.png"
import blogs from "../../assets/blogs.png"
import entertainment from "../../assets/entertainment.png"
import history from "../../assets/history.png"
import news from "../../assets/news.png"





const SideBar = () => {

  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen) 

  //early return pattern 
  if(!isMenuOpen) return null


  return (
    <div className="p-5 shadow-lg ">
        <Link to="/">
        <div className="flex py-1">
        <img className="pr-2" src={home}/>
        <h1 className="font-medium ">Home</h1>
        </div> 
        </Link>
        <div className="flex py-1">
        <img className="pr-2 w-8" src={cast}/>
        <h1 className="font-medium ">Cast</h1>
        </div> 
        <div className="flex py-1">
        <img className="pr-2 w-8" src={subscription}/>
        <h1 className="font-medium ">Subscribe</h1>
        </div>
        <div className="border-b-2 py-2"></div> 
        
        <h1 className="font-bold pt-3">Explore</h1>

        <div className="flex py-1">
        <img className="pr-2 w-8" src={explore}/>
        <h1 className="font-medium ">Trending</h1>
        </div>
        <div className="flex py-1">
        <img className="pr-2 w-8" src={gaming}/>
        <h1 className="font-medium ">Gaming</h1>
        </div>
        <div className="flex py-1">
        <img className="pr-2 w-8" src={tech}/>
        <h1 className="font-medium ">Tech</h1>
        </div>
        <div className="flex py-1">
        <img className="pr-2 w-8" src={save}/>
        <h1 className="font-medium">Music</h1>
        </div>
        <div className="flex py-1">
        <img className="pr-2 w-8" src={sports}/>
        <h1 className="font-medium ">Sports</h1>
        </div>
        <div className="border-b-2 py-2"></div> 


        <h1 className="font-bold pt-3">Subscription</h1>
        <div className="py-2">
          <div className="flex py-2">
            <img className="rounded-full w-8" src={jack}/>
            <p>PewDiePie</p>
          </div>
          <div  className="flex py-2">
            <img className="rounded-full w-8"  src={simon}/>
            <p>Mr beast</p>
          </div>
          <div  className="flex py-2">
            <img className="rounded-full w-8"  src={tom}/>
            <p>Justin</p>
          </div>
          <div  className="flex py-2">
            <img className="rounded-full w-8"  src={megan}/>
            <p> Craft</p>
          </div>
          <div  className="flex py-2">
            <img className="rounded-full w-8"  src={cameron}/>
            <p>NasDaily</p>
          </div>
        </div>
        <div className="border-b-2 py-2"></div>

        <div className="more">
        <div className="flex py-1">
        <img className="pr-2 w-8" src={more}/>
        <h1 className="font-medium ">More</h1>
        </div>
        <div className="flex py-1">
        <img className="pr-2 w-8" src={blogs}/>
        <h1 className="font-medium ">Blogs</h1>
        </div>
        <div className="flex py-1">
        <img className="pr-2 w-8" src={entertainment}/>
        <h1 className="font-medium ">Fun</h1>
        </div>
        <div className="flex py-1">
        <img className="pr-2 w-8" src={history}/>
        <h1 className="font-medium">History</h1>
        </div>
        <div className="flex py-1">
        <img className="pr-2 w-8" src={news}/>
        <h1 className="font-medium ">News</h1>
        </div>

        </div>
        

    </div>
  )
}

export default SideBar
