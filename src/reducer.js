

export const initialState = {
    user:null,
    playlist:[],
    playling:false,
    item:null,
    token:null,
    discover_weekly:null
}
export const reducer = (state, action)=>{
    console.log(action)
    
    switch(action.type){
        case "SET_USER" :
            
            return{
                ...state,
                user: action.user
               
            }

        case 'SET_TOKEN':{
            return {
                ...state,
                token:action.token
            }
        }

        case 'SET_PLAYLIST':{
            return {
                ...state,
                playlist: action.playlist
            }
        }

        case 'SET_DISCOVER_WEEKLY':{
            return {
                ... state,
                discover_weekly : action.discover_weekly
            }
        }

       

        default:
            return {
                state
            }
    }

    
    
}