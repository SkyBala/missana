import { FC } from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
          <Services />
      
      
        <Stats />
          <Catalog />
        <Reviews />
        
      </main>
      <Footer />
    </div>
  );
};

export default App;
