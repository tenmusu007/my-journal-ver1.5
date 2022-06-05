import React from 'react';
import {Header} from "./components/Header.jsx"
import Card  from './components/Card.jsx';
import { data } from './data.js';
// import cards
import './scss/App.scss';
export function App(){
  return (
    <div>
      <Header />
      <Card 
      atsu = {data}/>
    </div>
  );
}


export default App
