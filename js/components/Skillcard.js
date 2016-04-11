import React from 'react';

class Skillcard extends React.Component {
  render(){
    if (this.props.soft) {
      return (
        <div className="softSkillCard z-depth-3">{this.props.icon}
          <p className="softSkillName">{this.props.name}</p>
        </div>
      )
    }
    else {
      return(
      <div className="skillCard z-depth-3">{this.props.icon}
        <p className="skillName">{this.props.name}</p>
        <p className="skillInfo">{this.props.info}</p>
      </div>
    )
    }

  }
}

export default Skillcard;
