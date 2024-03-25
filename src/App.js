import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import HotCheetos from "./HotCheetos";
import Sprite from "./Sprite";
import Coke from "./Coke";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <VendingMachine /> } />
          <Route path="/hotcheetos" element={ <HotCheetos /> } />
          <Route path="/sprite" element={ <Sprite /> } />
          <Route path="/coke" element={ <Coke /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
