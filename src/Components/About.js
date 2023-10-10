import React from 'react'
import '../Css/About.css'
import img2 from '../images/img2.jpg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Specify animation duration
      once: true, // Specify if animations should only occur once
    });
  }, []);
  return (
    <div id="about-section" className="site-section cta-big-image" >
      <div className="container">
         <div className="row-mb-5 justify-content-center mb-5">
            <div className="col-md-8 text-center align-center">
                <h2 className="section-title mb-3 aos-init" data-aos="fade-up" data-aos-delay="">About us </h2>
                    <p className="lead aos-init" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-6 mb-5 aos-init" data-aos="fade-up" data-aos-delay="">
                <figure className="circle-bg">
                    <img src={img2} alt="" className="img-fluid" />
                </figure>
            </div>
            <div className="col-lg-5 aos-init" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-black mb-4">We Solve Your Financial Problem</h3>
                <p className='text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p className='text'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default About
