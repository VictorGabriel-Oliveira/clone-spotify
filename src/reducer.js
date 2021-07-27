export const initialState = {
    user:null,
    playlist:[],
    playling:false,
    item:null
}
export const reducer = (state, aciton)=>{
    console.log(aciton)
    switch(aciton.type){
        case "SET_USER" :
            return{
                ...state,
                user: aciton.user
            }
        default:
            return {
                state
            }
    }
}