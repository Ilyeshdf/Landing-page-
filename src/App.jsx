import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Statistics from './components/Statistics';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Statistics />
      <CTA />
      <Footer />
    </div>
  )
}
