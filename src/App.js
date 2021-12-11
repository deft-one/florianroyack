// import { useState } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Specialties from './components/specialties/Specialties';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;