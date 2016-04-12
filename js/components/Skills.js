import React from 'react';

import Skillcard from './Skillcard';
import SkillHeader from './SkillHeader'

class Skills extends React.Component {
  render(){

    return(
      <div className="skillContainer container">
      <SkillHeader soft={this.props.soft} />

        { this.props.list.map(skill => <Skillcard icon={skill.icon} name={skill.name} info={skill.info} soft={this.props.soft}/>) }

      </div>
    );
  }
}


export default Skills;
