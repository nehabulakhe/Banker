import React from 'react';
import '../Css/Home.css';
import logo from '../images/background.jpg';




function Home() {

    
  return (
    <div className='home'>
      
      
    {/* <img  className='home-image' src={logo} alt="img" /> */}
    
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
        <img src={logo} className="home-image d-block" alt="..."/>
          <div className="carousel-item active">
            {/* <img src={logo} className="d-block w-100" alt="..."/> */}
            <div className="carousel-caption d-md-block">
              <h1>BANKING SOLUTIONS</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!.</p>
            </div>
          </div>
          <div className="carousel-item">
            {/* <img src={logo} className="d-block w-100" alt="..."/> */}
            <div className="carousel-caption d-md-block">
              <h1>FINANCING SOLUTIONS</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!</p>
            </div>
          </div>
          <div className="carousel-item">
            {/* <img src={logo} className="d-block w-100" alt="..."/> */}
            <div className="carousel-caption d-md-block">
              <h1>SAVINGS ACCOUNT</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <span class="scroll-btn">
          <a href="#">
            <span class="mouse">
              <span>
              </span>
            </span>
          </a>
      </span>
      </div>
     
    </div>
  )
}

export default Home
