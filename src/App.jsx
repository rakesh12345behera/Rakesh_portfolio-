import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-app min-vh-100 d-flex flex-column">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-grow-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Skills Section */}
        <Skills />

        {/* 5. Experience Section */}
        <Experience />

        {/* 6. Projects Section */}
        <Projects />

        {/* 7. Education Section */}
        <Education />

        {/* 8. Services Section */}
        <Services />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* 10. Footer & Floating Back-To-Top */}
      <Footer />
    </div>
  );
}

export default App;
