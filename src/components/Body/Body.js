import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons'
import { useDataLayerValue } from '../../context/DataLayer'
import Header from '../Header'
import SongRow from '../SongRow'
import './body.css'

export default function Body({spotify}){
    const [{ current_playlist }, dispatch] = useDataLayerValue()

    const playSong = (id) => {
        spotify.play({
            uris: [`spotify:track:${id}`],
          }).then( spotify.getMyCurrentPlayingTrack().then((r) => {
              
            dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
          }))
    };

    function playPlaylist () {
        
        spotify.play({
            context_uri: `spotify:playlist:37i9dQZEVXcKTZ5dccEq7F`
        }).then( spotify.getMyCurrentPlayingTrack().then( res =>{
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

    return (
        <div className="body">
            <Header spotify={spotify}/>
            
            <div className="body-info">
                <img src={current_playlist?.images[0].url} alt=""/>
                <div className="body-infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{current_playlist?.name}</h2>
                    <p className=""> {current_playlist?.description} </p>
                </div>
            </div>

            <div className="body-songs">
                <div className="body-Icons">
                    <PlayCircleFilled  
                        className="body-shuffle"
                        onClick={playPlaylist}
                    />
                    <Favorite/>
                    <MoreHoriz/>
                </div>

                {
                    current_playlist?.tracks.items.map((item)=>[
                        <SongRow track={item.track} playSong={playSong} />
                    ])
                }
            </div>
        </div>
    )
}