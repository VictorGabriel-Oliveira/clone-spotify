import { useDataLayerValue } from '../../context/DataLayer'
import './searchItem.css'
export default function SearchItem({spotify,id,image,name}){
    const [{}, dispatch] = useDataLayerValue()
    function searchArtists(id){
        spotify.play({
            uris: [`spotify:track:${id}`],
          }).then( spotify.getMyCurrentPlayingTrack().then((r) => {
              
            dispatch({
                type: "SET_ITEM",
                item: r.item,
            })

            dispatch({
                type: "SET_PLAYING",
                playing: true,
            })
          }))
    }
  
    return(

        <div  className="searchItem">
            <img src={image}/>
            <p key={id} onClick={()=>{
                searchArtists(id)
            }} className="seachItem-links"
            >
                
                {name} 
            </p>
        </div>
        
    )
}