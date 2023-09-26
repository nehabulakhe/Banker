import React from 'react';
import '../Css/Header.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="nav-title h2">
                Banker .
        </div>
            <div className="menu-bar">
                
                <div className="item">
                   Home
                </div>
                <div className="item">
                    About Us
                </div>
                <div className="item">
                    Blog
                </div>
                <div className="item">
                    Contact
                </div>
                <div className="item-social">
                <FacebookOutlinedIcon/> 
                <TwitterIcon style={{marginLeft:'13px'}} />
                <LinkedInIcon style={{marginLeft:'13px'}}/>
                </div>
                
            </div>
      </div>
    </div>
  )
}

export default Header
