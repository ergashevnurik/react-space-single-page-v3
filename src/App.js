import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { HeroData, ServiceData } from './Data/HeroData';
import Cards from './components/Cards';
import { CardsHeading } from './Data/CardsData';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero {...HeroData} />
      <Cards {...CardsHeading} />
      <Hero {...ServiceData} />
      <Footer />
    </Router>
  );
}

export default App;
