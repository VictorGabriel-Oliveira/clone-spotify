import './sideBarOpitions.css'
export default function SideBarOpitions({text , Icon}){
    console.log(Icon)
    return(
        <div className="sideBarOpitions">
            <p className="sideBar-links"><Icon/> {text}</p>
        </div>
    )
}