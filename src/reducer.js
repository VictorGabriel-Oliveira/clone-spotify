

export const initialState = {
    user:null,
    playlist:[],
    playing:false,
    item:null,
    token:null,
    discover_weekly:null,
    spotify:null
}

const set_states ={
    SET_USER(state,action){
        return{
            ...state,
            user:action.user
        }
    },
    SET_TOKEN(state,action){
        console.log( '----> state :',state)
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
    SET_DISCOVER_WEEKLY(state,action){
        return {
            ... state,
            discover_weekly : action.discover_weekly
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

    


}

export const reducer = (state, action)=>{
   
    return set_states[action.type](state,action)
   
}