import { LandingPage } from './sections/LandingPage';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './sections/About';
import { Consultancy } from './sections/Consultancy';
import { Contact } from './sections/Contact';

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
