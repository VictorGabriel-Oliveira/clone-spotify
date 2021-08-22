import './sideBarOptions.css'
export default function SideBarOptions({text , Icon}){
    if (Icon){
        return(
            <div className="sideBarOpitions">
                <p className="sideBar-links">
                    <Icon/> {text} 
                </p>
            </div>
        )
    }
    else{
        return(
            <div  className="sideBarOpitions">
                <p className="sideBar-links">
                    {text} 
                </p>
            </div>
            )
    }
   
}