import React from 'react';
import { CustomCursor } from '../components/CustomCursor';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { SparkSection } from '../components/SparkSection';
import { ConnectSection } from '../components/ConnectSection';
import { ExploreGallery } from '../components/ExploreGallery';
import { CreativeDNA } from '../components/CreativeDNA';
import { MakeSection } from '../components/MakeSection';
import { CinematicEnding } from '../components/CinematicEnding';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2] text-[#171717] min-h-screen relative bg-grain overflow-x-hidden selection:bg-[#0047AB] selection:text-white">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SparkSection />
        <ConnectSection />
        <ExploreGallery />
        <CreativeDNA />
        <MakeSection />
        <CinematicEnding />
      </main>
      <Footer />
    </div>
  );
};
