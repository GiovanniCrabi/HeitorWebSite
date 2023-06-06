import React from "react";

import { LandingPage } from "./pages/LandingPage";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Consultancy } from "./pages/Consultancy";
import { Contact } from "./pages/Contact";
import { Evolutions } from "./pages/Evolutions";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/consultoria" element={<Consultancy />} />
        <Route path="/evolucoes" element={<Evolutions />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
