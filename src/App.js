import React from 'react';
import HomePage from "./Components/HomePage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Films from "./Components/Films";
import Species from "./Components/Species";
import Characters from "./Components/Characters";
import Header from "./Components/Header";
import Starships from "./Components/Starships";



const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Characters" element={<Characters/>} />
          <Route path="/Films" element={<Films/>} />
          <Route path="/Species" element={<Species/>} />
          <Route path="/Starships" element={<Starships/>} />

        </Routes>
      </div>

    </BrowserRouter>

  );
};

export default App;
