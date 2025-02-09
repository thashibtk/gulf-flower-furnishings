import React from 'react';

const Gallery = () => {
  return (
    <div className="container my-5">
      <h2>Gallery</h2>
      <div className="row">
        <div className="col-3">
          <img src="path-to-image1.jpg" alt="Furniture" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src="path-to-image2.jpg" alt="Curtains" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src="path-to-image3.jpg" alt="Carpets" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src="path-to-image4.jpg" alt="Wallpapers" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
