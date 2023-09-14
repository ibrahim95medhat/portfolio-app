import React from 'react'
import avatar from '../../Assets/Images/avataaars.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"
export default function Home() {
  return (
    <>
    <div className="home w-100 ">
        <div className="container w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="home-content w-75">
              <div className="home-image w-25 m-auto"><img className='w-100' src={avatar} alt='pic'/></div>
            <h1 className='text-center'>START FRAMEWORK <i className="fa-solid fa-star"></i></h1>
            <h4 className='text-center text-white'>Garphic Artist-Web Designer-Illustrator</h4>
            </div>
        </div>
    </div>
    </>
  )
}
