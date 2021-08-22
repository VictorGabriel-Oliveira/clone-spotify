import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import SideBar from '../SideBar/SideBar'
import './player.css'

export function Player({spotify}){
    
    return (
       <div className="player">
           <div className="player-body">
               <SideBar/>
               <Body spotify={spotify}/>
           </div>
           <Footer spotify={spotify}/>

       </div>
    )
}