import {createContext, useContext, useReducer} from 'react'

export const DataLayerContex = createContext()

export const DataLeyar = ({ initialState,  reducer, children})=>{
    return(
        <DataLayerContex.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataLayerContex.Provider>
    )
    
}

export const useDataLayerValue = () => useContext(DataLayerContex)