import React from 'react';
import '../Css/Header.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {
  return (
    <div className='navbar'>
     
  <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Banker. </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-2">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Blog</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          About Us
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Contact</a>
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
