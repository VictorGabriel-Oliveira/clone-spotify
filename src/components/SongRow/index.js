import './index.css'

export default function SongRow({key , track, playSong}){
    return(
        <div  key ={key} className="songRow" onClick={()=>{playSong(track.id)}}>
            <img className="songRow__album" src={track.album.images[0].url} />
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p > 
                    { track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {}
                </p>
            </div>
        </div>
    )
}