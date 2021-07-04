import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ProjectPage from './pages/ProjectPage.js';
import ContactPage from './pages/ContactPage.js';
import NavBar from './components/NavBar';
import SmoothScrolling from './components/SmoothScrolling';
import Footer from './components/Footer.js';
import FadeInWhenVisible from './utils/InviewHelper.js';
import { footerVariants } from './utils/constant.js';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <SmoothScrolling>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/project">
              <ProjectPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="*">
              <HomePage />
            </Route>
          </Switch>
          <FadeInWhenVisible variants={footerVariants}>
            <Footer />
          </FadeInWhenVisible>
        </SmoothScrolling>
      </Router>
    </>
  );
}

export default App;
