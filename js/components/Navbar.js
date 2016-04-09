import React from 'react';

class Navbar extends React.Component {
  render(){
    return(
      <div className="navbar-fixed">
        <nav className="indigo darken-1">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo"></a>
            <ul id="nav-mobile" className="right">
              <li><a href="#aboutme"><i className="material-icons">person</i></a></li>
              <li><a href="#"><i className="material-icons">lightbulb_outline</i></a></li>
              <li><a href="#"><i className="material-icons">perm_media</i></a></li>
              <li><a href="#"><i className="material-icons">email</i></a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
