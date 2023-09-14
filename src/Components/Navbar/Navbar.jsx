import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import './Navbar.css'
export default function Navbar() {

  useEffect(()=>{
let navLinks=Array.from(document.querySelectorAll(".nav-link"));
let navbarBrand=document.querySelector(".navbar-brand");
let locationUrl=window.location.href;
let arr=locationUrl.split("/");
console.log(arr[arr.length-1])
navLinks.forEach((e)=>{
  e.classList.remove("active")
})
navLinks.forEach((e)=>{
  if(e.innerHTML.toLowerCase()===arr[arr.length-1].toLowerCase()) { 
e.classList.add("active");
  }
})


navbarBrand.addEventListener("click",(e)=>{
  navLinks.forEach((e)=>{
    e.classList.remove("active")
  })
})
navLinks.forEach((e)=>{
e.addEventListener("click",(e)=>{
  navLinks.forEach((e)=>{
    e.classList.remove("active")
  })
e.target.classList.add("active")
})
})
  },[])
  return (
    <>
      <nav className="navbar navbar-expand-md back-ground">
  <div className="container">
    <Link className="navbar-brand text-white" to="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link  text-white" aria-current="page" to="about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="contact">CONTACT</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
