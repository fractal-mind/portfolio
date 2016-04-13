import React from 'react';

class Contact extends React.Component {
  render(){
    return(
      <div className="container contactContainer">
        <p className="contactGreeting">Thanks for Visiting!</p>
        <p className="contactSubgreeting">Let me know if I can make something for you!</p>
        <a href="mailto:will@stillwill.net" className="waves-effect waves-light btn orange accent-4" target="_top" id="emailBottomBtn">email</a>
        <a className="waves-effect waves-light btn orange accent-4" id="githubBottomBtn" href="//github.com/fractal-mind" target="_blank">github</a>
        <a className="waves-effect waves-light btn orange accent-4" id="twitterBottomBtn" href="//twitter.com/iamwillmoody" target="_blank">twitter</a>
        <a className="waves-effect waves-light btn orange accent-4" id="fccBottomBtn" href="//www.freecodecamp.com/fractal-mind" target="_blank">freecodecamp</a>
        <a className="waves-effect waves-light btn orange accent-4" id="liBottomBtn" href="//www.linkedin.com/in/will-moody-70423b29" target="_blank">linkedin</a>
      </div>
    )
  }
}

export default Contact;
