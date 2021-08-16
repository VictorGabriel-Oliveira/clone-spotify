import './index.css'

import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../../context/DataLayer';

export default function Header ({spotify}){

    const [{user}, dispath] = useDataLayerValue() 
    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon/>
                <input  
                    type="text"
                    placeholder="Search for artist, song or outhers"
                />
            </div>

            <div className="header-rigth">
                <Avatar
                    alt={user?.display_name} 
                    src={user?.images[0]}
                />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}