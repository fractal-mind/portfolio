import React from 'react';

import About from './About';
import Greeting from './Greeting';
import Navbar from './Navbar';
import Navlink from './Navlink';
import Skills from './Skills';

class Layout extends React.Component {
  render(){
    const skillList = [
      {
        key: 1,
        name: "Javascript ES6",
        icon: <img className="skillIcon" src="../../img/logos/js.jpg" />,
        info: "Language"
      },
      {
        key: 2,
        name: "HTML5",
        icon: <img className="skillIcon" src="../../img/logos/html5.png" />,
        info: "Language"
      },
      {
        key: 3,
        name: "CSS3",
        icon: <img className="skillIcon" src="../../img/logos/CSS3.png" />,
        info: "Language"
      },
      {
        key: 9,
        name: "Git",
        icon: <img className="skillIcon" src="../../img/logos/git.png" />,
        info: "Version Control System"
      },
      {
        key: 10,
        name: "Github",
        icon: <img className="skillIcon" src="../../img/logos/github.png" />,
        info: "Open-Source Community"
      },
      {
        key: 4,
        name: "React.js",
        icon: <img className="skillIcon" src="../../img/logos/react-js-logo.png" />,
        info: "Javascript Framework"
      },
      {
        key: 5,
        name: "Angular.js",
        icon: <img className="skillIcon" src="../../img/logos/angularjs.png" />,
        info: "Javascript Framework"
      },
      {
        key: 12,
        name: "Sass",
        icon: <img className="skillIcon" src="../../img/logos/sass.png" />,
        info: "CSS Extension Language"
      },
      {
        key: 8,
        name: "npm",
        icon: <img className="skillIcon" src="../../img/logos/npm.png" />,
        info: "Javascript Package Manager"
      },
      {
        key: 10,
        name: "Webpack",
        icon: <img className="skillIcon" src="../../img/logos/webpack.png" />,
        info: "Javascript Module Bundler"
      },
      {
        key: 13,
        name: "jQuery",
        icon: <img className="skillIcon" src="../../img/logos/jquery.gif" />,
        info: "Javascript Library"
      },
      {
        key: 6,
        name: "Bootstrap",
        icon: <img className="skillIcon" src="../../img/logos/bootstrap.png" />,
        info: "CSS Library"
      },
      {
        key: 7,
        name: "Materialize",
        icon: <img className="skillIcon" src="../../img/logos/Materialize.png" />,
        info: "CSS Library"
      },
      {
        key: 11,
        name: "FTP",
        icon: <img className="skillIcon" src="../../img/logos/ftp.png" />,
        info: "File Transfer Protocol"
      }
    ];


    return (
      <div>
        <Navbar />
        <Greeting />
        <Navlink link="aboutme" />
        <About />
        <Navlink link="skills" />
        <Skills list={skillList} />
      </div>
    )
  }
}

export default Layout;
