import React from 'react';

class GalleryCard extends React.Component {
  render(){
    return(
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={this.props.thumb} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{this.props.name}<i className="material-icons right">more_vert</i></span>
          <p>{this.props.info}</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
    </div>
    )
  }
}

export default GalleryCard;
