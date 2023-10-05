import React from 'react';
import '../Css/MeetTeam.css'

import mt1 from '../images/mt1.jpg';
import mt2 from '../images/mt2.jpg';
import mt3 from '../images/mt3.jpg';
import mt4 from '../images/mt4.jpg';
import mt5 from '../images/mt5.jpg';
import mt6 from '../images/mt6.jpg';
import mt7 from '../images/mt7.jpg';
import mt8 from '../images/mt8.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import $ from 'jquery';
import mouseout from 'jquery';
import mouseenter from 'jquery';

function MeetTeam() {

     
    $(document).ready(function(){
        
        $(".team-member").mouseenter(function(){
            $(this).addClass("show");
          $(".team-member.show .social").css("transform", "translateX(0%)");
        });
        $(".team-member").mouseout(function(){ 
            $(".team-member").removeClass("show");
          $(".team-member .social").css("transform", "translateX(-101%)");
        });
        
      });

    

  return (
    <div className='MeetTeam'>
      <div className="container">
        <div className="row mb-5 justify-content-center">
            <div className="col-md-8 text-center">
                <h2 className="section-title mb-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="" >Meet Team</h2>
                <p className="lead aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" >
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </p>
            </div>
        </div>

        <div className="row"> 
            <div className="col-md-6 col-lg-3 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
                <div className="team-member">
                    <figure>
                        <ul className="social">
                            <li><a href="#"><span className="icon-facebook"><FacebookIcon></FacebookIcon></span></a></li>
                            <li><a href="#"><span className="icon-twitter"><TwitterIcon></TwitterIcon></span></a></li>
                            <li><a href="#"><span className="icon-linkedin"><LinkedInIcon></LinkedInIcon></span></a></li>
                            <li><a href="#"><span className="icon-instagram"><InstagramIcon></InstagramIcon></span></a></li>
                        </ul>
                        <img src={mt1} alt="" className="img-fluid" />
                    </figure>
                    <div className="p-3">
                        <h3>Kaiara Spencer</h3>
                        <span className='position'>Finance Manager</span>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="team-member">
                    <figure>
                        <ul className="social">
                            <li><a href="#"><span className="icon-facebook"><FacebookIcon></FacebookIcon></span></a></li>
                            <li><a href="#"><span className="icon-twitter"><TwitterIcon></TwitterIcon></span></a></li>
                            <li><a href="#"><span className="icon-linkedin"><LinkedInIcon></LinkedInIcon></span></a></li>
                            <li><a href="#"><span className="icon-instagram"><InstagramIcon></InstagramIcon></span></a></li>
                        </ul>
                        <img src={mt2} alt="" className="img-fluid" />
                    </figure>
                    <div className="p-3">
                        <h3>Dave Simpson</h3>
                        <span className='position'>Marketing Manager</span>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="team-member">
                    <figure>
                        <ul className="social">
                            <li><a href="#"><span className="icon-facebook"><FacebookIcon></FacebookIcon></span></a></li>
                            <li><a href="#"><span className="icon-twitter"><TwitterIcon></TwitterIcon></span></a></li>
                            <li><a href="#"><span className="icon-linkedin"><LinkedInIcon></LinkedInIcon></span></a></li>
                            <li><a href="#"><span className="icon-instagram"><InstagramIcon></InstagramIcon></span></a></li>
                        </ul>
                        <img src={mt3} alt="" className="img-fluid" />
                    </figure>
                    <div className="p-3">
                        <h3>Ben Thompson</h3>
                        <span className='position'>Accountant</span>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div className="team-member">
                    <figure>
                        <ul className="social">
                            <li><a href="#"><span className="icon-facebook"><FacebookIcon></FacebookIcon></span></a></li>
                            <li><a href="#"><span className="icon-twitter"><TwitterIcon></TwitterIcon></span></a></li>
                            <li><a href="#"><span className="icon-linkedin"><LinkedInIcon></LinkedInIcon></span></a></li>
                            <li><a href="#"><span className="icon-instagram"><InstagramIcon></InstagramIcon></span></a></li>
                        </ul>
                        <img src={mt4} alt="" className="img-fluid" />
                    </figure>
                    <div className="p-3">
                        <h3>Kyla Stewart</h3>
                        <span className='position'>Accountant</span>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
            <div className="team-member">
                    <figure>
                        <ul className="social">
                            <li><a href="#"><span className="icon-facebook"><FacebookIcon></FacebookIcon></span></a></li>
                            <li><a href="#"><span className="icon-twitter"><TwitterIcon></TwitterIcon></span></a></li>
                            <li><a href="#"><span className="icon-linkedin"><LinkedInIcon></LinkedInIcon></span></a></li>
                            <li><a href="#"><span className="icon-instagram"><InstagramIcon></InstagramIcon></span></a></li>
                        </ul>
                        <img src={mt5} alt="" className="img-fluid" />
                    </figure>
                    <div className="p-3">
                        <h3>Kaiara Spencer</h3>
                        <span className='position'>Accountant</span>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="team-member">
                    <figure>
                        <ul className="social">
                            <li><a href="#"><span className="icon-facebook"><FacebookIcon></FacebookIcon></span></a></li>
                            <li><a href="#"><span className="icon-twitter"><TwitterIcon></TwitterIcon></span></a></li>
                            <li><a href="#"><span className="icon-linkedin"><LinkedInIcon></LinkedInIcon></span></a></li>
                            <li><a href="#"><span className="icon-instagram"><InstagramIcon></InstagramIcon></span></a></li>
                        </ul>
                        <img src={mt6} alt="" className="img-fluid" />
                    </figure>
                    <div className="p-3">
                        <h3>Dave Simpson</h3>
                        <span className='position'>Bank Teller</span>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="team-member">
                    <figure>
                        <ul className="social">
                            <li><a href="#"><span className="icon-facebook"><FacebookIcon></FacebookIcon></span></a></li>
                            <li><a href="#"><span className="icon-twitter"><TwitterIcon></TwitterIcon></span></a></li>
                            <li><a href="#"><span className="icon-linkedin"><LinkedInIcon></LinkedInIcon></span></a></li>
                            <li><a href="#"><span className="icon-instagram"><InstagramIcon></InstagramIcon></span></a></li>
                        </ul>
                        <img src={mt7} alt="" className="img-fluid" />
                    </figure>
                    <div className="p-3">
                        <h3>Ben Thompson</h3>
                        <span className='position'>Bank Teller</span>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div className="team-member">
                    <figure>
                        <ul className="social">
                            <li><a href="#"><span className="icon-facebook"><FacebookIcon></FacebookIcon></span></a></li>
                            <li><a href="#"><span className="icon-twitter"><TwitterIcon></TwitterIcon></span></a></li>
                            <li><a href="#"><span className="icon-linkedin"><LinkedInIcon></LinkedInIcon></span></a></li>
                            <li><a href="#"><span className="icon-instagram"><InstagramIcon></InstagramIcon></span></a></li>
                        </ul>
                        <img src={mt8} alt="" className="img-fluid" />
                    </figure>
                    <div className="p-3">
                        <h3>Chris Stewart</h3>
                        <span className='position'>Bank Teller</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MeetTeam
