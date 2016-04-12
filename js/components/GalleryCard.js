import React from 'react';

class GalleryCard extends React.Component {
  render(){
    return(
      <div className="card z-depth-2">
        <div className="card-image waves-effect waves-block waves-light">
          <a href={this.props.url} target="_blank"><img className="galleryThumb" src={this.props.thumb} /></a>
        </div>
        <div className="card-content">
          <span className="card-title grey-text text-darken-4">{this.props.name}</span>
          <p>{this.props.info}</p>
        </div>
    </div>
    )
  }
}

export default GalleryCard;
