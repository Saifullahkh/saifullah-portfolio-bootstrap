import React, {useEffect} from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Project () {

  // useEffect(() => {
  //   AOS.init();
  // }, [])

  return (
    <div className="container my-4" id='project'>
      <div className="row d-flex flex-wrap">
        <h1 className="text-center my-3 fw-bold" >My Project</h1>
        <div className="col-md-4 gap-3">
          <div class="card  bg-dark">
            <img src="https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.webp?b=1&s=170667a&w=0&k=20&c=6sHVKSnVnrolHMqfK5_Q0Bpn30_XEzcNw-S8KsI6Nm0=" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Resturant website</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
        <div class="card bg-dark">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Ecommerce Website</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3" >
        <div class="card bg-dark">
            <img src="./images\img2.avif" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">CRUD Web Application</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3" >
        <div class="card bg-dark">
            <img src="./images\img3.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Weather App</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3" >
         <div class="card bg-dark">
            <img src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">University Website</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3" >
          <div class="card bg-dark">
            <img src="https://plus.unsplash.com/premium_photo-1673984588721-9be1d3c9d592?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlLmNvfGVufDB8fDB8fHww" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Coffe.co Web Application</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
