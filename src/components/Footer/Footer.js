import './footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import { VolumeDown  } from  '@material-ui/icons'
import { PlaylistPlay } from '@material-ui/icons';
import {Grid, Slider} from '@material-ui/core'
import { useDataLayerValue } from '../../context/DataLayer';
import { useEffect } from 'react';


export default function Footer ({spotify}){

    const [{token,item,playing} ,dispatch] = useDataLayerValue()

    useEffect(()=>{
        spotify.getMyCurrentPlaybackState().then(state =>{
            
            dispatch({
                type: 'SET_ITEM',
                item: state.item
            })
            dispatch({
                type:'SET_PLAYING',
                playing: state.is_playing
            })
        })

    }, [item])

    function handlePlayPause (){
        if (playing){
            spotify.pause()
            dispatch({
                type:"SET_PLAYING",
                playing : false
            })
        }else{
            spotify.play()
            dispatch({
                type:"SET_PLAYING",
                playing : true
            })
        }
    }

    function handleSkipNext (){
        spotify.skipToNext();
        spotify.getMyCurrentPlaybackState().then(res =>{
            dispatch({
                type:"SET_ITEM",
                item: res.item
            })
            dispatch({
                type:"SET_PLAYING",
                playing: true
            })
        })
    }

    function handleSkipPrevious (){
        spotify.skipToPrevious()
        spotify.getMyCurrentPlaybackState().then(res =>{
            dispatch({
                type:"SET_ITEM",
                item: res.item
            })
            dispatch({
                type: "SET_PLAYING",
                playing: true
            })
        })
    }

    function handleSetVolume(volume){
        if(volume){
            spotify.setVolume(volume).then(
                ()=>{
                    console.log(`----> volume setind for : ${volume}`)
                }
            )
        }else(console.log(volume))

    }

    return (
        <div className="footer" >
            <div className="footer-left">
                <img 
                    src={item?.album.images[0].url}
                    alt={item?.name}
                    className="album-logo"
                />

                {item ? (
                    <div className="song-info">
                        <h4>
                            {item?.name}
                        </h4>
                        <p>{item?.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) :(
                    <div className="song-info">
                        <h4>
                            No song is playing 
                        </h4>
                        <p>...</p>
                    </div>
                ) }
                
            </div>
            <div className="footer-center">
                <ShuffleIcon className="footer-green footer-icon"/>
                <SkipPreviousIcon onClick={ handleSkipPrevious} className="footer-icon"/>
                {
                    playing ? (
                        <PauseCircleOutlineIcon onClick={handlePlayPause} className="footer-icon" fontSize="large" />
                    ) : (
                        <PlayCircleOutlineIcon onClick={handlePlayPause} className="footer-icon" fontSize="large"  />
                    )
                }
               
                <SkipNextIcon onClick={handleSkipNext} className="footer-icon"/>
                <RepeatIcon className="footer-green footer-icon"/> 
            </div>
            <div className="footer-rigth">
                <Grid container spacing={2}>
                    <Grid item >
                        <PlaylistPlay/>

                    </Grid>
                    <Grid item>
                        <VolumeDown  />
                    </Grid>
                    <Grid item xs>
                        <Slider 
                            onClick={(e)=>{
                                handleSetVolume(e.target.children[2].value)
                            }}
                         />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}