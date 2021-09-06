export const authEndPoint = 'https://accounts.spotify.com/authorize?' 

const redirect_uri = 'http://localhost:3000/'
const client_id = '64cd5757e2bb47faa7101a47f9a22ad9'
const client_secret= '462ed21011f543bca22091f880bc50db'

const scopes = [
   `user-read-private 
    user-read-email
    user-library-read
    playlist-read-private
    user-read-recently-played
    user-read-playback-state
    user-modify-playback-state
    user-top-read
    user-read-currently-playing
    streaming`
]

export const getTokenFromResponse = () =>{
    return window.location.hash.substring(1).split('&').reduce(( initial ,item)=>{
        let parts =item.split('=')
         initial[parts[0]] = decodeURIComponent(parts[1])

         return initial
    },{})
}

export const login_url = `${authEndPoint}client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join("%28")}&response_type=token&show_dialog=true`

