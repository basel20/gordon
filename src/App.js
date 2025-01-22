
import { Routes, Route,  BrowserRouter } from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home'
import About from './pages/about/About';
import Developments from './pages/developments/Developments';
import Contact from './pages/contact/Contact';
import React,{ useState , useEffect} from 'react';
import Logo from './images/logo.png'

function App() {

  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2000);
  })


  return (
    <div className="App">
      {isSplash ? (
        <div className='flex justify-center items-center h-screen bg-[#221e1f]'>
          <img src={Logo} alt='logo' height={200} width={200} /> 
        </div>
      ) : (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/developments" element={<Developments />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
     </BrowserRouter>
      )}
    </div>
  );
}

export default App;
