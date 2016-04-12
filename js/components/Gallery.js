import React from 'react';

import GalleryCard from './GalleryCard';

class Gallery extends React.Component {
  render(){
    return(
      <div className="galleryContainer container">
      {this.props.list.map(site => <GalleryCard key={site.key} name={site.name} url={site.url} info={site.info} thumb={site.thumb}/>)}
     </div>
    )
  }
}

export default Gallery;
