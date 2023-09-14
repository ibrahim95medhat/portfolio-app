import React, { useEffect } from 'react'
import './Contact.css'
export default function Contact() {


useEffect(()=>{
Array.from(document.querySelectorAll(".form-control")).forEach((e)=>{
  e.addEventListener("input",(e)=>{
    if(e.target.value===''){
      console.log(e.target);
      return e.target.previousElementSibling.style.cssText=`top:0 ;color:#000;transition:all 0.5s`;
    }
    e.target.previousElementSibling.style.cssText=`top:-30px ;color:#1AC2C6;transition:all 0.5s   `;
  })
 
})
},[])

  return (
    <>
     <div className="contact">
      <div className="container h-100 w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="contact-content mb-4">
      <h1 className='text-center'>CONTACT COMPONENT <i className="fa-solid fa-star"></i></h1>
        </div>

        <div className="form w-50">
          <div className="input-cont mb-5 position-relative">
          <label className='position-absolute'>user Name</label>
          <input className='form-control' placeholder='user Name' ></input>
          </div>
          <div className="input-cont mb-5">
          <label className=''>user Age</label>
          <input className='form-control' placeholder='user Age'></input>
          </div>
          <div className="input-cont mb-5">
          <label className=''>user Email</label>
          <input className='form-control' placeholder='user Email'></input>
          </div>
          <div className="input-cont mb-5">
          <label className=''>user Password</label>
          <input className='form-control' placeholder='password' type='password'></input>
          </div>
          <button className='button btn btn-success'> Send Message</button>
        </div>
      </div>
     </div>
    </>
  )
}
