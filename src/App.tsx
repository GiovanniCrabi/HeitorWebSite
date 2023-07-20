
import "./index.css";
import { LandingPage } from "./pages/LandingPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import { Consultancy } from "./pages/Consultancy";
import { Contact } from "./pages/Contact";
import { Evolutions } from "./pages/Evolutions";

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
