import React from 'react';
import '../Css/HomeBelow.css'
import wallet from '../images/wallet.svg';
import shop from '../images/cart.svg';
import credit from '../images/credit-card.svg'
import img1 from '../images/img1.jpg';

function HomeBelow() {
  return (
    <div className='Home-below'>
      <div className="container ">
        
        <div className="row mb-5 mt-5">
            <div className="col-md-4 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
                <img className="img-fluid w-25 mb-4" src={wallet} alt=""  />
                <h3 className="card-title">Money Savings</h3>
                <p className='text'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
            <div className="col-md-4 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
                <img className="img-fluid w-25 mb-4" src={shop} alt="" />
                <h3 className="card-title">Online Shoppings</h3>
                <p className='text'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
            <div className="col-md-4 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
                <img className="img-fluid w-25 mb-4" src={credit} alt="" />
                <h3 className="card-title">Credit / Debit Cards</h3>
                <p className='text'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-5 center aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
              <figure className="circle-bg">
                <img src={img1} alt="" className="img-fluid" />
              </figure>
          </div>
          <div className="col-lg-5 ml-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-4">
              <h3 className="h3 mb-4 text-black">Amortization Computation
              </h3>
              <p className='text'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>

            <div className="mb-4">
              <ul className="list-unstyled ul-check success">
                  <li className='text'> Officia quaerat eaque neque</li>
                  <li className='text'>Lorem ipsum dolor sit amet</li>
                  <li className='text'>Consectetur adipisicing elit</li>
              </ul>
            </div>

            <div className="mb-5">
              <form action="">
                <div className="form-group d-flex align-items-center">
                  <input type="text" className="form-control mx-2" placeholder='Enter your email' />
                  <input type="submit" className="btn btn-primary" value="Submit Email" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBelow
