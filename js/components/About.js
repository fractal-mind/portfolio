import React from 'react';

class About extends React.Component {
  render(){
    return(
      <div className="container aboutContainer">
        <div className="aboutCard z-depth-2">
          <img src="/img/headshot.jpg" alt="Will Moody" className="circle headshot"/>
          <p className="aboutHeader">
            Will Moody is a Web Developer
          </p>
          <p className="aboutText">
           who lives in Los Angeles. He is a lifelong lover of Technology and Design, and although his greatest strength is in Front-End Javascript Development, he loves to learn and continually strives to become an excellent Programmer in general.
          </p>
        </div>
      </div>
    )
  }
}

export default About;
