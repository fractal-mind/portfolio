import React from 'react';

import Gallery from './Gallery';
import Navlink from './Navlink';
import Skills from './Skills';

class Portfolio extends React.Component {
  render(){
    const skillList = [
      {
        key: 1,
        name: "Javascript",
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
        key: 4,
        name: "Git",
        icon: <img className="skillIcon" src="../../img/logos/git.png" />,
        info: "Version Control"
      },
      {
        key: 5,
        name: "Github",
        icon: <img className="skillIcon" src="../../img/logos/github.png" />,
        info: "Open-Source Community"
      },
      {
        key: 6,
        name: "React.js",
        icon: <img className="skillIcon" src="../../img/logos/react-js-logo.png" />,
        info: "Javascript Framework"
      },
      {
        key: 7,
        name: "Angular.js",
        icon: <img className="skillIcon" src="../../img/logos/angularjs.png" />,
        info: "Javascript Framework"
      },
      {
        key: 8,
        name: "Sass",
        icon: <img className="skillIcon" src="../../img/logos/sass.png" />,
        info: "CSS Extension Language"
      },
      {
        key: 9,
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
        key: 11,
        name: "jQuery",
        icon: <img className="skillIcon" src="../../img/logos/jquery.gif" />,
        info: "Javascript Library"
      },
      {
        key: 12,
        name: "Bootstrap",
        icon: <img className="skillIcon" src="../../img/logos/bootstrap.png" />,
        info: "CSS Library"
      },
      {
        key: 13,
        name: "Materialize",
        icon: <img className="skillIcon" src="../../img/logos/Materialize.png" />,
        info: "CSS Library"
      },
      {
        key: 14,
        name: "FTP",
        icon: <img className="skillIcon" src="../../img/logos/ftp.png" />,
        info: "File Transfer Protocol"
      }
    ];

    const softSkillList = [
      {
        key: 1,
        name: "Design Sense"
      },
      {
        key: 2,
        name: "Communicator"
      },
      {
        key: 3,
        name: "Team Player"
      },
      {
        key: 4,
        name: "Loves to Learn"
      },
      {
        key: 5,
        name: "Creative Thinker"
      },
      {
        key: 6,
        name: "Friendly"
      },
      {
        key: 7,
        name: "Enthusiastic"
      },
      {
        key: 8,
        name: "Public Speaker"
      },
      {
        key: 9,
        name: "Cool-Headed"
      },
      {
        key: 10,
        name: "Honest"
      },
      {
        key: 11,
        name: "Empathetic"
      },
      {
        key: 12,
        name: "Courteous"
      },
      {
        key: 13,
        name: "Eloquent"
      },
      {
        key: 14,
        name: "Punctual"
      },

    ];

    const galleryList = [
      {
        key: 14,
        name: "Game of Life",
        url: "//stillwill.net/conway/index.html",
        info: "An implementation of the classic Conway's Game of Life using React.js and Sass.",
        thumb: "../../img/thumbs/conway.png"
      },
      {
        key: 13,
        name: "Recipe Box.",
        url: "//stillwill.net/recipe-box/index.html",
        info: "Store all your recipes in this helpful app built using React.js and Sass, which utilizes localStorage to save your recipes between sessions.",
        thumb: "../../img/thumbs/recipe.png"
      },
      {
        key: 1,
        name: "Leaderboard",
        url: "//codepen.io/fractalmind/full/dMXOOE",
        info: "A sortable list of the highest-scoring campers on FreeCodeCamp.",
        thumb: "../../img/thumbs/leaderboard.png"
      },
      {
        key: 2,
        name: "Reactive Markdown",
        url: "//codepen.io/fractalmind/full/yeWryN",
        info: "A Github Markdown previewer! This was the first page I built using the React.js framework.",
        thumb: "../../img/thumbs/markdown.png"
      },
      {
        key: 3,
        name: "Tic Tac Toe",
        url: "//codepen.io/fractalmind/full/wMjNJe",
        info: "A nigh-unwinnable Tic Tac Toe game built with Angular.js.",
        thumb: "../../img/thumbs/ttt.png"
      },
      {
        key: 4,
        name: "Simon",
        url: "//codepen.io/fractalmind/full/VeddQY",
        info: "A simple memory game built using jQuery.",
        thumb: "../../img/thumbs/simon.png"
      },
      {
        key: 5,
        name: "Simple Wikipedia",
        url: "//codepen.io/fractalmind/full/avqVxB",
        info: "A very minimal Wikipedia Search app built with Angular.js.",
        thumb: "../../img/thumbs/wikipedia.png"
      },
      {
        key: 6,
        name: "Twitch Tracker",
        url: "//codepen.io/fractalmind/full/VvaxLN",
        info: "A searchable Twitch Tracker of twelve specific streams, built with Angular.js.",
        thumb: "../../img/thumbs/twitch.png"
      },
      {
        key: 7,
        name: "The Weather Today",
        url: "//codepen.io/fractalmind/full/pjvLqx",
        info: "Uses Geolocation to automatically display the weather and an appropriate icon, and displays varying wallpapers depending on the time of day.",
        thumb: "../../img/thumbs/weather.png"
      },
      {
        key: 8,
        name: "Pomodoro Timer",
        url: "//codepen.io/fractalmind/full/wKKvgG",
        info: "Operates a timer for two distinct, modifiable durations, for efficient studying.",
        thumb: "../../img/thumbs/pomodoro.png"
      },
      {
        key: 9,
        name: "Camper News Cards",
        url: "//codepen.io/fractalmind/full/rOpggg",
        info: "Used to poll an API for a list of news stories and display them with thumbnails. API has since been shut down, so it no longer functions.",
        thumb: "../../img/thumbs/newscards.png"
      },
      {
        key: 10,
        name: "Minimal Calculator",
        url: "//codepen.io/fractalmind/full/dYRJRM",
        info: "Minimal, Flat Calculator built with Angular.js! Adds, subtracts, multiplies ,divides, and clears.",
        thumb: "../../img/thumbs/calculator.png"
      },
      {
        key: 11,
        name: "Quote Generator",
        url: "//codepen.io/fractalmind/full/JYPqLz",
        info: "On page load and upon clicking a button, displays a random Futurama quote from a small selection.",
        thumb: "../../img/thumbs/quotes.png"
      },
      {
        key: 12,
        name: "Old Portfolio Site",
        url: "//codepen.io/fractalmind/full/xwKxwG",
        info: "My very first FreeCodeCamp project! The assignment was to build a simple portfolio site.",
        thumb: "../../img/thumbs/oldportfolio.png"
      }
    ]

    return(
      <div>
      <Navlink link="skills" />
      <Skills list={skillList} soft={false} />
      <Skills list={softSkillList} soft={true} />
      <Navlink link="gallery" />
      <Gallery list={galleryList} />
      </div>

    )
  }
}

export default Portfolio;
