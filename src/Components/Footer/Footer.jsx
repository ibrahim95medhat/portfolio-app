import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"
export default function Footer() {
  return (
    <>
    <div className='footer overflow-hidden'>
        <div className="row text-white p-3">
            <div className="col-12 col-sm-4">
                <h3 className='fw-bolder text-center'>LOCATION</h3>
                <p className='text-center'>2215 John Daniel Drive</p>
                <p className='text-center'>Clark, MO 65243</p>
            </div>
            <div className="col-12 col-sm-4">
                <h3 className='text-center'>AROUND THE WEB</h3>
                <div className='footer-icons d-flex justify-content-center'><div className="icons"><i className="ms-3 fa-brands fa-facebook"></i><i className="ms-3 fa-brands fa-twitter"></i><i className="ms-3 fa-brands fa-linkedin-in"></i><i className="ms-3 fa-solid fa-globe"></i></div></div>
            </div>
            <div className="col-12 col-sm-4">
                <h3 className='fw-bolder text-center'>ABOUT FREELANCER</h3>
                <p className='text-center'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
        <div className="bg-dark p-3">
            <h4 className='text-center text-white'>Copyright © Your Website 2021</h4>
        </div>
    </div>
    </>
  )
}
