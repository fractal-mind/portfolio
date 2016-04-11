import React from 'react';

class Greeting extends React.Component {
  render(){
    return (
      <div className="container headContainer">
        <div className="greetDiv">
          <p className="greeting">
            Hello, there!
          </p>
          <p className="subgreeting">
            My name is Will, and I can build you an awesome website.
          </p>
          <a className="waves-effect waves-light btn orange accent-4" id="githubBtn" href="//github.com/fractal-mind" target="_blank">github</a>
          <a className="waves-effect waves-light btn orange accent-4" id="twitterBtn" href="//twitter.com/iamwillmoody" target="_blank">twitter</a>
          <a className="waves-effect waves-light btn orange accent-4" id="fccBtn" href="//www.freecodecamp.com/fractal-mind" target="_blank">freecodecamp</a>
          <a className="waves-effect waves-light btn orange accent-4" id="liBtn" href="//www.linkedin.com/in/will-moody-70423b29" target="_blank">linkedin</a>
        </div>
      </div>
    )
  }
}

export default Greeting;
