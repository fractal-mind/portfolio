import React from 'react';

class Skillcard extends React.Component {
  render(){
    console.log(this.props.soft)
    if (this.props.soft) {
      console.log("Soft skills passed")
      return (

        <div className="softSkillCard z-depth-3">{this.props.icon}
          <p className="softSkillName">{this.props.name}</p>
        </div>
      )
    }
    else {
      console.log("Hard skills passed")
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
