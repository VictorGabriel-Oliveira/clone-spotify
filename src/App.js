import { useEffect, useState } from 'react';
import './App.css';
import { Login } from './components/Login/Login';
import { Player } from './components/Player/Player';
import { getTokenFromResponse } from './Spotify';

function App() {
    const [token, setToken] = useState('')
    useEffect(()=>{

        const hash = getTokenFromResponse()
        window.location.hash = ''
        const _token = hash.access_token

        if(_token){
            setToken(_token)
        }

    },[])

    return (
        <div className="conteiner">
            {
                token ?  <Player/> : <Login/>
            }
        </div>
    )
}

export default App;
