import { LandingPage } from './pages/LandingPage';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Consultancy } from './pages/Consultancy';
import { Contact } from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/sobre' element={ <About /> } />
        <Route path='/consultancy' element={ <Consultancy /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
