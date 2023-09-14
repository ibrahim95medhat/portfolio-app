import React from 'react'
import './About.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

import '../../Assets/Images/download.svg'
export default function About() {
  return (
    <>
     <div className="about w-100 ">
        <div className="container w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="about-content w-75">
            <h1 className='text-center'>ABOUT COMPONENT <i className="fa-solid fa-star"></i></h1>
            
            <div className="row">
                <div className="col-sm-6 col-12">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-sm-6 col-12">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
            </div>
            
        </div>
        </div> 
    </>
  )
}
