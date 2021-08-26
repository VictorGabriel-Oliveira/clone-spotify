import './index.css'

import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../../context/DataLayer';
import SearchItem from '../SearchItem/SearchItem';

export default function Header ({spotify}){

    const [{user, search}, dispatch] = useDataLayerValue() 
    function setSearch(search){
        if(search === ''){
            dispatch(
                { 
                    type:'SET_SEARCH',
                    search:null
                }
            )
        }
        spotify.search(search,['track']).then(
            
            res => {
                
            dispatch(
                    { 
                        type:'SET_SEARCH',
                        search:res.tracks.items
                    }
                )
            }
        )
    }
    return (
        <div className="header">
            <div className="header-left">
                <div className="input-conteiner">
                    <SearchIcon/>
                    <input  
                        onChange={(e)=>{
                            setSearch(e.target.value)
                        }
                        }
                        type="text"
                        placeholder="Search for artist, song or outhers"
                    />
                </div>
                <div className='search-items'>
                    {search ? search.map((item)=>{
                        
                        return   <SearchItem 
                            spotify={spotify}
                            image={item.album.images[0]?.url} 
                            id={item.id}  
                            name={item.name}/>
                    }): ''}
            </div>
            </div>

            <div className="header-rigth">
                <Avatar
                    alt={user?.display_name} 
                    src={user?.images[0].url}
                />
                <h4>{user?.display_name}</h4>
            </div>


           

        </div>
    )
}