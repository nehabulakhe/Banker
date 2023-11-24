import React from 'react';
import '../Css/Gallery.css';
import $ from 'jquery';
import g1 from '../images/g1.jpg';
import g2 from '../images/g2.jpg';
import g3 from '../images/g3.jpg';
import g4 from '../images/img1.jpg';
import g5 from '../images/img2.jpg';



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
          <div className="fancy-gallery"> 
            <div id="posts" className="row" style={{position:'relative',height:'582.999px'}}>
                <div className="item web col-md-6 col-lg-3" style={{position: 'absolute',left: '0px',top: '0px'}}>
                    <a href={g1} className="item-wrap" data-fancybox="images">
                      <span className="icon-search2">
                      </span>
                      <img src={g1} className="img-fluid" />
                    </a>
                </div>
                <div className="item web col-md-6 col-lg-3 " style={{position: 'absolute',left: '285px',top: '0px'}}>
                <a href={g2} className="item-wrap" data-fancybox="images">
                      <span className="icon-search2">
                      </span>
                      <img src={g2} className="img-fluid" />
                    </a>
                </div>
                <div className="item brand col-md-6 col-lg-3 " style={{position: 'absolute',left: '570px',top: '0px'}}>
                <a href={g3} className="item-wrap" data-fancybox="images">
                      <span className="icon-search2">
                      </span>
                      <img src={g3} className="img-fluid" />
                    </a>
                </div>
                <div className="item design col-md-6 col-lg-3" style={{position: 'absolute',left: '855px',top: '0px'}}>
                <a href={g4} className="item-wrap" data-fancybox="images">
                      <span className="icon-search2">
                      </span>
                      <img src={g4} className="img-fluid" />
                    </a>
                </div>

                <div className="row">
                <div className="item web col-md-6 col-lg-3" style={{position: 'absolute',left: '0px',top: '194.333px'}}>
                <a href={g5} className="item-wrap" data-fancybox="images">
                      <span className="icon-search2">
                      </span>
                      <img src={g5} className="img-fluid" />
                    </a>
                </div>
                <div className="item brand col-md-6 col-lg-3" style={{position: 'absolute',left: '285px',top: '194.333px'}}>
                <a href={g2} className="item-wrap" data-fancybox="images">
                      <span className="icon-search2">
                      </span>
                      <img src={g2} className="img-fluid" />
                    </a>
                </div>
                <div className="item web col-md-6 col-lg-3" style={{position: 'absolute',left: '570px',top: '194.333px'}}>
                <a href={g1} className="item-wrap" data-fancybox="images">
                      <span className="icon-search2">
                      </span>
                      <img src={g1} className="img-fluid" />
                    </a>
                </div>
                <div className="item design col-md-6 col-lg-3" style={{position: 'absolute',left: '855px',top: '194.333px'}}>
                <a href={g5} className="item-wrap" data-fancybox="images">
                      <span className="icon-search2">
                      </span>
                      <img src={g5} className="img-fluid" />
                    </a>
                </div>
                </div>

                <div className="row">
                <div className="item web col-md-6 col-lg-3" style={{position: 'absolute',left: '0px',top: '388.666px'}}>
                <a href={g4} className="item-wrap" data-fancybox="images">
                      <span className="icon-search2">
                      </span>
                      <img src={g4} className="img-fluid" />
                    </a>
                </div>
                <div className="item design col-md-6 col-lg-3" style={{position: 'absolute',left: '285px',top: '388.666px'}}>
                <a href={g1} className="item-wrap" data-fancybox="images">
                      <span className="icon-search2">
                      </span>
                      <img src={g1} className="img-fluid" />
                    </a>
                </div>
                <div className="item brand col-md-6 col-lg-3" style={{position: 'absolute',left: '570px',top: '388.666px'}}>
                <a href={g3} className="item-wrap" data-fancybox="images">
                      <span className="icon-search2">
                      </span>
                      <img src={g3} className="img-fluid" />
                    </a>
                </div>
                <div className="item design col-md-6 col-lg-3" style={{position: 'absolute',left: '855px',top: '388.666px'}}>
                <a href={g2} className="item-wrap" data-fancybox="images">
                      <span className="icon-search2">
                      </span>
                      <img src={g2} className="img-fluid" />
                    </a>
                </div>
            </div>
            </div>
       </div>
          
      </div> 
    </div>
  )
}

export default Gallery
