import React from 'react';
import '../Css/Gallery.css';

function Gallery() {
  return (
    <div className='gallery'>
       <div className="container">
            <div className="row mb-3">
                <div className="col-12 text-center">
                    <div className="section-title mb-3">Gallery</div>
                </div>
            </div>

            <div className="justify-content-center mb-5">
                <div className="filter text-center button-group col-md-7">
                    <button className="btn btn-primary active" data-filter="*">All</button>
                    <button className="btn btn-primary" data-filter=".web">Events</button>
                    <button className="btn btn-primary" data-filter=".design">Party</button>
                    <button className="btn btn-primary" data-filter=".brand">Holidays</button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Gallery
