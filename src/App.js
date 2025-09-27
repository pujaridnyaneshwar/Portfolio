// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import BlogsPage from './pages/BlogsPage';
import MyProject from './pages/MyProject';
import MyBlogs from './pages/MyBlogs';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <WhatsAppButton />

        <Routes>
          {/* ✅ Main single-page layout */}
          <Route
            path="/"
            element={
              <div className="app">
                <Header />
                <Navbar />

                <main>
                  <section id="home"><HomePage /></section>
                  <section id="about"><AboutPage /></section>
                  <section id="project"><ProjectPage /></section>
                  <section id="blog"><BlogsPage /></section>
                  <section id="contact"><ContactPage /></section>
                </main>
                <Footer />
              </div>
            }
          />

          {/* ✅ MyProject with Header, Navbar, Footer */}
          <Route
            path="/myproject"
            element={
              <div className="app">
                <Header />
                <Navbar />

                <main>
                  <MyProject />
                </main>

                <Footer />
              </div>
            }
          />
          {/* ✅ MyBlogs with Header, Navbar, Footer */}
          <Route
            path="/myblogs"
            element={
              <div className="app">
                <Header />
                <Navbar />

                <main>
                  <MyBlogs />
                </main>

                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
