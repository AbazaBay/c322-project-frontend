import './App.css';

import React from "react";

import Menu from "./pages/Menu";
import MakeOrder from "./pages/MakeOrder";


import { Route, Routes} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu/>} />
      <Route path="/MakeOrder" element ={<MakeOrder/>} />
    </Routes>
  );
}

export default App;

