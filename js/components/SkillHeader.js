import React from 'react';

class SkillHeader extends React.Component {
  render(){
    if (this.props.soft){
      return(
        <p className="softSkillHeader">Qualities</p>
      )
    }
    return(
      <p className="skillHeader">Skills</p>
    )
  }
}

export default SkillHeader;
