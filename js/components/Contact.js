import React from 'react';

class Contact extends React.Component {
  render(){
    return(
      <div className="container contactContainer">
        <p className="contactGreeting">Thanks for Visiting!</p>
        <p className="contactSubgreeting">Please feel free to contact me by any of these methods: </p>
        <a href="mailto:williamcmoody+stillwill@gmail.com" className="waves-effect waves-light btn orange accent-4" target="_top" id="emailBottomBtn">email</a>
        <a className="waves-effect waves-light btn orange accent-4" id="githubBottomBtn" href="//github.com/willmoody" target="_blank">github</a>
        <a className="waves-effect waves-light btn orange accent-4" id="twitterBottomBtn" href="//twitter.com/iamwillmoody" target="_blank">twitter</a>
        <a className="waves-effect waves-light btn orange accent-4" id="fccBottomBtn" href="//www.freecodecamp.com/willmoody" target="_blank">freecodecamp</a>
        <a className="waves-effect waves-light btn orange accent-4" id="liBottomBtn" href="//www.linkedin.com/in/will-moody-70423b29" target="_blank">linkedin</a>
      </div>
    )
  }
}

export default Contact;
