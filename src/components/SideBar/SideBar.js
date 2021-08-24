import SideBarOptions from '../sideBarOptions/SideBarOptions'
import './sideBar.css'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../context/DataLayer';

export default function SideBar({spotify}){

    const [{playlist}, dispatch] = useDataLayerValue()

    function playPlaylist(id){
        spotify.play({
            context_uri: `spotify:playlist:${id}`
        }).then( 
            spotify.getPlaylist(id).then(( current_playlist)=>{
                dispatch({
                    type:'SET_CURRENT_PLAYLIST',
                    current_playlist
                })
            })
        ).then(spotify.getMyCurrentPlayingTrack().then( res =>{
                dispatch({
                    type: "SET_ITEM",
                    item: res.item
                })
                dispatch({
                    type:"SET_PLAYING",
                    playing:true
                })
                
            })
        )
    }

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
              playlist?.items?.map((item )=> {
                  return <SideBarOptions playPlaylist={playPlaylist} id={item.id} text={item.name} />
              })
          }

        </div>
    )
}