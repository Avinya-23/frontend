import React from 'react'
import { Routes, Route } from "react-router-dom";
import Homepage from '../pages/Homepage';
import Addproducts from '../pages/Addproducts';

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/Addproducts" element={<Addproducts/>}/>


        </Routes>
        
    </>
  )
}

export default App