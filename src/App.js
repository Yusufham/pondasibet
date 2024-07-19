import {BrowserRouter, Routes, Route, } from "react-router-dom";
import React, {useState} from 'react';
import ButtonGroup from './Components/ButtonGroup';
import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';
import AddUser from "./Components/AddUser";
import './App.css'
import Komentar from './Components/Komentar';

const buttons = [
  "Togel", "Promo"
]

const RenderComponents = ({index}) =>{
  switch (index) {
    case 0: return <Comp1 />
    break;
    case 1: return <Comp2 />
    break;
    default:
    break;
  }
} 
function App() {
  const [isSelected, setIsSelected] = useState(0)

  return (
    <div>

      <div className='navbar'>   
      </div>
      <div>
        <ButtonGroup buttons={buttons} isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<RenderComponents index={isSelected} />}/>
      <Route path="/add" element={<AddUser/>}/>
      <Route path="/add/komentar" element={<Komentar />}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  )
}
export default App;
