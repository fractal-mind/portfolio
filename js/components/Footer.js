import React from 'react';

class Footer extends React.Component {
  render(){
    return(
      <div className="footer-copyright">
        <div className="container">
          <p className="footerText">© 2016 Will Moody</p>
          <a className="right footerText white-text" href="//github.com/fractal-mind/portfolio" target="_blank">View Source on Github</a>
        </div>
      </div>
    )
  }
}

export default Footer;
