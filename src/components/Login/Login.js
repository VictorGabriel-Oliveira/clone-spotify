import { login_url } from '../../Spotify'
import './login.css'

export function Login(){
    return (
        <div className="login">
            <img 
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <a href={login_url}>LOGIN WITH SPOTIFY</a>

        </div>
    )
}