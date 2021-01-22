import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { HeroData, ServiceData } from './Data/HeroData';
import Cards from './components/Cards';
import { CardsHeading } from './Data/CardsData';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import React, {useState} from 'react'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Hero {...HeroData} />
      <Cards {...CardsHeading} />
      <Hero {...ServiceData} />
      <Footer />
    </Router>
  );
}

export default App;
