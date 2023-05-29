import React from 'react';
import { Routes, Route,Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 bg-danger text-center">Special Offer: Happy New Year 20% Discount - Grab Offer NOW "MagMax2022" <button className='btn btn-secondary'>Buy Now</button> </div>
          
            <div className="col-lg-2 offset-lg-1">
              <img src="https://themagnifico.net/demo/digital-storefront-pro/wp-content/uploads/sites/9/2021/07/cropped-logo.png" alt="" />
            </div>

            <div className="col-lg-7 offset-lg-1">
                  <nav className="navbar navbar-expand-lg text-center py-3">
                  <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/">Home</Link >
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/page">Page</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <button className='btn btn-danger'>Buy Now</button>
                      </ul>
                      <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                      </form>
                    </div>
                  </div>
                </nav>

            </div>
        </div>
      </div>
    </>
  )
}
