import React from 'react'

export default function Footer() {
  return (
   <>
   <div className="container-fluid bg-dark text-light">
    <div className="row">
        <div className="col-lg-2 offset-lg-1"> <h3>Customer Services</h3>
        <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>A-Z store Service</li>
            <li>Restaurants</li>
            <li>Personal Shopping</li>
            <li>Gift</li>
            <li>Gift Package</li>
        </ul>
        </div>
        <div className="col-lg-2 offset-lg-1"><h3>About Us</h3>
            <ul>
                <li>Careers</li>
                <li>Our Heritage</li>
                <li>PRoject Earth</li>
                <li>Our Corporate ploicies and Statement</li>
                <li>Press area</li>
            </ul>
        </div>
        <div className="col-lg-2 offset-lg-1"><h3>Shopping Online</h3>
            <ul>
                <li>Click and Collect</li>
                <li>StoreFront</li>
                <li>Tracking your order</li>
                <li>Returns and Refunds</li>
            </ul>
        </div>
        <div className="col-lg-2 offset-lg-1"><h3>Need Help?</h3>
        <button className='btn btn-danger'>Buy now</button>
        </div>

        <div className="col-lg-12 text-center text-danger">Wordpress Theme 2020 Design & Developed by Themagnifico</div>
    </div>
   </div>
   </>
  )
}
