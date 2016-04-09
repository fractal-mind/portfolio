import React from 'react';

class Navlink extends React.Component {
  render(){
    return(
      <a name={this.props.link}></a>
    )
  }
}

export default Navlink;
