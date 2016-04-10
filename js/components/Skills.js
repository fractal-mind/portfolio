import React from 'react';

import Skillcard from './Skillcard';

class Skills extends React.Component {
  render(){
    const makeList = this.props.list.map(function(skill, i){
      return(
      <Skillcard key={i} icon={skill.icon} name={skill.name} info={skill.info} soft={skill.soft}/>
      );
    })
    return(
      <div className="skillContainer container">
      <p className="skillHeader">Skills</p>

        {makeList}

      </div>
    );
  }
}


export default Skills;
