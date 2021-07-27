import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataLeyar } from './context/DataLayer';
import { initialState , reducer } from './reducer';


ReactDOM.render(
  <React.StrictMode>
    
    <DataLeyar initialState={initialState} reducer={reducer}>
       <App />
    </DataLeyar> 
   
  </React.StrictMode>,
  document.getElementById('root')
);


