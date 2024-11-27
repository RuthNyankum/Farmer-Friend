import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Product from './pages/product';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'events', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <Navbar activeSection={activeSection} />
          <div id="home" className="section">
            <Home />
          </div>
          <div id="about" className="section">
            <About />
          </div>
          <div id="products" className="section">
            <Product />
          </div>
          <div id="contact" className="section">
            <Contact />
          </div>
          <Footer />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
