import SideBarOptions from '../sideBarOptions/SideBarOptions'
import './sideBar.css'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../context/DataLayer';
export default function SideBar(){

    const [{playlist}, dispatch] = useDataLayerValue()

    return(
        <div className="sidebar">
          
            <img className="sideBar-logo" 
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
            alt=""
            />

            <SideBarOptions text="Home" Icon={HomeIcon}/>
            <SideBarOptions text="Search" Icon={SearchIcon}/>
            <SideBarOptions text="Your Library" Icon={LibraryMusicIcon}/>

            <br/>
            <strong className="sideBar-title"> PLAYLIST</strong>
            <hr></hr>
          {
              playlist?.items?.map(item => {
                  return <SideBarOptions text={item.name} />
              })
          }

        </div>
    )
}