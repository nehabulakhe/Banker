import React from 'react';
import '../Css/Header.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import $ from 'jquery';

function Header() {

  $(document).on("scroll",function(){
        
   
      $(".navbar").css({"background": "#fff",
        "border-bottom": "1px solid transparent",
        "-webkit-box-shadow": "4px 0 20px -5px rgba(0, 0, 0, 0.1)",
        'box-shadow': "4px 0 20px -5px rgba(0, 0, 0, 0.1)"
      });
    
      $(".navbar .item").css({"color": "black"});
      $(".navbar .navbar-brand").css({"color":"#fd7e14"});
      $(".nav-item .nav-link").css("color","black");
      $('#navbarSupportedContent').css("backgroundColor","white");
    
  });

  return (
    <div className='navbar'>
     
  <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Banker. </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Blog</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          About Us
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
      </ul>
    </div>
    <div className="item">
                    <FacebookOutlinedIcon/> 
                    <TwitterIcon style={{marginLeft:'13px'}} />
                    <LinkedInIcon style={{marginLeft:'13px'}}/>
    </div>
  </div>
  </nav>
       
        {/* <div className="row">
            <div className="col-md-4">
                <div className="nav-title h2">
                        Banker .
                </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="menu-bar">
                  <div className="row">
                  <div className="col-md-3">
                    <div className="item">
                      Home
                    </div>
                  </div>
                  </div>
                  <div className="col-md-3">
                    <div className="item">
                        About Us
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="item">
                        Blog
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="item">
                        Contact
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="item">
                    <FacebookOutlinedIcon/> 
                    <TwitterIcon style={{marginLeft:'13px'}} />
                    <LinkedInIcon style={{marginLeft:'13px'}}/>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div> */}
    </div>
    
  )
}

export default Header
