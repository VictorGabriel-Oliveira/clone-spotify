import { type } from "jquery"

export const initialState = {
    user:null,
    playlist:[],
    playling:false,
    item:null,
    token:null
}
export const reducer = (state, aciton)=>{
    console.log(aciton)
    
    switch(aciton.type){
        case "SET_USER" :
            
            return{
                ...state,
                user: aciton.user
               
            }

        case 'SET_TOKEN':{
            return {
                ...state,
                token:aciton.token
            }
        }

        case 'SET_PLAYLIST':{
            return {
                ...state,
                playlist: aciton.playlist
            }
        }

        default:
            return {
                state
            }
    }

    
    
}