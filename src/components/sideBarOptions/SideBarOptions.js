import './sideBarOptions.css'
export default function SideBarOptions({playPlaylist, id, text , Icon}){
    if (Icon){
        return(
            <div  className="sideBarOpitions">
                <p id={id}  className="sideBar-links">
                    <Icon/> {text} 
                </p>
            </div>
        )
    }
    else{
        return(
            <div onClick={(e)=>{
                playPlaylist(e.target.id)
            }}   className="sideBarOpitions">
                <p id={id} className="sideBar-links">
                    {text} 
                </p>
            </div>
            )
    }
   
}