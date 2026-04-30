import React from 'react';
import { EmergencyBar } from './components/EmergencyBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EmergencySteps } from './components/EmergencySteps';
import { Services } from './components/Services';
import { StatsBanner } from './components/StatsBanner';
import { RealResults } from './components/RealResults';
import { Testimonials } from './components/Testimonials';
import { Specialists } from './components/Specialists';
import { FooterCTA } from './components/FooterCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col scroll-smooth">
      <EmergencyBar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <EmergencySteps />
        <Services />
        <StatsBanner />
        <RealResults />
        <Testimonials />
        <Specialists />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}
