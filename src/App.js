import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import Statistics from './components/Statistics/Statistics';
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Career from "./components/Career/Career";
import Footer from "./components/Footer/Footer";
import { TranslationProvider } from './contexts/TranslationContext';

import './App.scss';

function App() {
  return (
    <TranslationProvider>
      <div className="App">
        <Header />

        <main>
          <Hero />

          <Marquee content="killerResults" />

          <Statistics />

          <Marquee content="trafficWorldwide"  direction="right"/>

          <About/>

          <Contacts />

          <Marquee content="join" />

          <Career />
        </main>

        <Footer />

        <div className="pattern"></div>
      </div>
    </TranslationProvider>
  );
}

export default App;
