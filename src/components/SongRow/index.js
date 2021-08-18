import './index.css'

export default function SongRow({track, playSong}){
    return(
        <div className="songRow" onClick={()=>{playSong(track.id)}}>
            <img className="songRow__album" src={track.album.images[0].url} />
            <div cassName="songRow__info">
                <h1>{track.name}</h1>
                <p > 
                    { track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {}
                </p>
            </div>
        </div>
    )
}