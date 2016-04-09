import React from 'react';

class Skillcard extends React.Component {
  render(){
    return(
      <div className="skillCard z-depth-3">{this.props.icon}
        <p className="skillName">{this.props.name}</p>
        <p className="skillInfo">{this.props.info}</p>

      </div>
    )
  }
}

export default Skillcard;
