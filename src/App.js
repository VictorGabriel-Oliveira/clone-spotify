import { useEffect, useState } from 'react';
import './App.css';
import { Login } from './components/Login/Login';
import { Player } from './components/Player/Player';
import { getTokenFromResponse } from './Spotify';

import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './context/DataLayer';

const spotify = new SpotifyWebApi()

function App() {
    const [token, setToken] = useState('')
    const [{  user },dispatch] = useDataLayerValue()

   
    useEffect(()=>{

        const hash = getTokenFromResponse()
        window.location.hash = ''
        const _token = hash.access_token

        if(_token){
            
            setToken(_token)

            dispatch({
                type:'SET_TOKEN',
                token:_token
            })
            spotify.setAccessToken(_token)
            spotify.getMe().then(user =>{
                
                dispatch ({ 
                    type: 'SET_USER',
                    user

                })
            })
        }

         

    },[])

    return (
        <div className="conteiner">
            {
                token ?  <Player spotify={spotify}/> : <Login/>
            }
        </div>
    )
}

export default App;
