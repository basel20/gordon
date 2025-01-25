
import { Routes, Route,  BrowserRouter } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home'
import About from './pages/about/About';
import Developments from './pages/developments/Developments';
import Contact from './pages/contact/Contact';
import React,{ useState , useEffect} from 'react';
import Logo from './images/logo.png'
import Footer from './components/Footer';

function App() {




  return (
    <div className="App">
      
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/developments" element={<Developments />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
     </BrowserRouter>
      
    </div>
  );
}

export default App;
