import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import SideBar from '../SideBar/SideBar'
import './player.css'

import { useDataLayerValue } from '../../context/DataLayer'

import SpotifyWebPlayer from 'react-spotify-web-playback/lib';

export function Player({spotify}){
    const [{ token, playing }, dispatch] = useDataLayerValue()
    return (
       <div className="player">
           <div className="player-body">
               <SideBar spotify={spotify}/>
               <Body spotify={spotify}/>
           </div>
           <SpotifyWebPlayer styles={'display:none;'} token={token}  uris={`spotify:track:1Uk3ZPthdPPbDlatKZadkW`} play={playing}/>
           <Footer spotify={spotify} />

       </div>
    )
}