export const initialState = {
    user:null,
    playlist:[],
    playing:false,
    item:null,
    token:null,
    current_playlist:null,
    spotify:null,
    search:null,
    
}

const set_states ={
    SET_USER(state,action){
        return{
            ...state,
            user:action.user
        }
    },
    SET_TOKEN(state,action){
        return{
            ...state,
            token:action.token
        }
    },
    SET_PLAYLIST(state,action){
        return {
            ...state,
            playlist: action.playlist
        }
    },
    SET_CURRENT_PLAYLIST(state,action){
        
        return {
            ... state,
            current_playlist: action.current_playlist
        }
    },
    SET_ITEM(state,action){
        return{
            ...state,
            item: action.item
        }

    },
    SET_PLAYING(state,action){
        return {
            ...state,
            playing: action.playing
        }
        
    },
    SET_SPOTIFY(state,action){
        return {
            ...state,
            spotify: action.spotify
        }
    },
    SET_SEARCH(state,action){
        
        return{
            ...state,
            search:action.search
        }
    },

}



export const reducer = (state, action)=>{
    const actions = set_states[action.type]
    return  actions(state,action)
   
}