import React from 'react'
// import Partical from './Components/Partical'
import Product from './Product'
import Partical from './Components/Partical'

export default function Home() {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                    <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://themagnifico.net/demo/digital-storefront-pro/wp-content/themes/digital-storefront-pro/assets/images/slides/slide.png" className="d-block w-100" alt="..." />
                        <div className=" col-lg-5 carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://themagnifico.net/demo/digital-storefront-pro/wp-content/themes/digital-storefront-pro/assets/images/slides/slide.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://themagnifico.net/demo/digital-storefront-pro/wp-content/themes/digital-storefront-pro/assets/images/slides/slide.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
            </div>
            <div className="col-lg-5">
                <img src="https://themagnifico.net/demo/digital-storefront-pro/wp-content/themes/digital-storefront-pro/assets/images/about/about_left.png" alt=""  width='100%' height='70%'/>
            </div>
            <div className="col-lg-6 p-5">
                <h5 className='text-danger'>About Us</h5>
                <h3>We are the leading Luxury Products In over World</h3>
                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumed ut perspiciatis unde omnis iste natus error sit voluptatem accusaium doloremque laudantium.</p>
            </div>
        </div>
    </div>
    <Product/>
    <Partical/>
    </>
  )
}
