import React from 'react';

import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Greeting from './Greeting';
import Navbar from './Navbar';
import Navlink from './Navlink';
import Portfolio from './Portfolio';

class Layout extends React.Component {
  render(){
    return (
      <div>
        <header>
        <Navbar />
        </header>
        <main>
        <Greeting />
        <Navlink link="aboutme" />
        <About />
        <Portfolio />
        <Navlink link="contact" />
        <Contact />
        </main>
        <footer>
        <Footer />
        </footer>
      </div>
    )
  }
}

export default Layout;
