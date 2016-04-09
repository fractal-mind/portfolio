import React from 'react';

import About from './About';
import Greeting from './Greeting';
import Navbar from './Navbar';
import Navlink from './Navlink';

class Layout extends React.Component {
  render(){
    return (
      <div>
        <Navbar />
        <Greeting />
        <Navlink link="aboutme" />
        <About />
      </div>
    )
  }
}

export default Layout;
