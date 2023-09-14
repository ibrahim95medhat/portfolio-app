import React, { useEffect, useState } from 'react'
import "./Portfolio.css"
import pic1 from '../../Assets/Images/poert1.png'
import pic2 from '../../Assets/Images/port2.png'
import pic3 from '../../Assets/Images/port3.png'
import '@fortawesome/fontawesome-free/css/all.min.css'
export default function Portfolio() {
useEffect(()=>{
  let overlayElement=document.querySelectorAll(".overlay");
  let layerElement=document.querySelector(".layer");
  let imageElement=document.querySelector(".layer-image-cont img");

  Array.from(overlayElement).forEach((e)=>{
  e.addEventListener("click",(e)=>{
   
    layerElement.classList.remove("d-none");
    document.body.style.overflow="hidden";
// let top=window.innerHeight/2;
// console.log(window.innerHeight)
    // document.querySelector(".layer-image-cont").style.top=`${top}px`;
    imageElement.setAttribute("src",e.currentTarget.nextElementSibling.getAttribute("src"))
    

    layerElement.addEventListener("click",(e)=>{
   if(e.target.classList.contains("layer")){
     e.currentTarget.classList.add("d-none");
     document.body.style.overflow="auto";
   }
})



})
})
},[])


// let overlayElementsArray=Array.from(document.querySelectorAll(".overlay"));
// let src='';
// let [imgSrc,setSrc]=useState(src)
// console.log(imgSrc)
// // let selectedImg=document.querySelector(".layer-image-cont img");
// // let selectedImgSrc;



// useEffect(()=>{
// Array.from(document.querySelectorAll(".overlay")).forEach((e)=>{
//   e.addEventListener("click",(e)=>{
//     console.log(e.currentTarget.nextElementSibling.getAttribute("src"))
    
//     setSrc(e.currentTarget.nextElementSibling.getAttribute("src"))
//   })
// })
//   console.log('component DidMount')
// },[])





// useEffect(()=>{
//   if(imgSrc!==''){
// document.querySelector(".layer-image-cont img").setAttribute("src",imgSrc);
// document.querySelector(".layer").classList.remove("d-none");
// document.querySelector("body").style.overflowY='hidden';
// document.querySelector(".layer").addEventListener("click",(e)=>{
//   console.log("in")
//   document.querySelector(".layer").classList.add("d-none");
// e.target.style.overflowY='auto';
// })
//     console.log('component DidUpdate')
//   }
// })

  
 
  return (
    
    <>
    <div className="portfolio">
      <div className="portfolio-content w-75 m-auto">
            <h1 className='text-center'>PORTFOLIO COMPONENT <i className="fa-solid fa-star"></i></h1>
            <div className="container my-5">
            <div className="row g-3">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="image-container w-100 overflow-hidden position-relative">
                <div className="overlay rounded-3 d-flex justify-content-center align-items-center position-absolute"><i className="fa-solid fa-plus fa-3x"></i></div>
                  <img className='w-100 rounded-3' src={pic1} alt="pic"></img>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="image-container w-100 overflow-hidden position-relative">
                <div className="overlay rounded-3 d-flex justify-content-center align-items-center position-absolute"><i className="fa-solid fa-plus fa-3x"></i></div>
                  <img className='w-100 rounded-3' src={pic2} alt="pic"></img>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="image-container w-100 overflow-hidden position-relative">
                <div className="overlay rounded-3 d-flex justify-content-center align-items-center position-absolute"><i className="fa-solid fa-plus fa-3x"></i></div>
                  <img className='w-100 rounded-3' src={pic3} alt="pic"></img>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="image-container w-100 overflow-hidden position-relative">
                <div className="overlay rounded-3 d-flex justify-content-center align-items-center position-absolute"><i className="fa-solid fa-plus fa-3x"></i></div>
                  <img className='w-100 rounded-3' src={pic1} alt="pic"></img>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="image-container w-100 overflow-hidden position-relative">
                <div className="overlay rounded-3 d-flex justify-content-center align-items-center position-absolute"><i className="fa-solid fa-plus fa-3x"></i></div>
                  <img className='w-100 rounded-3' src={pic2} alt="pic"></img>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="image-container w-100 overflow-hidden position-relative">
                <div className="overlay rounded-3 d-flex justify-content-center align-items-center position-absolute"><i className="fa-solid fa-plus fa-3x"></i></div>
                  <img className='w-100 rounded-3' src={pic3} alt="pic"></img>
                </div>
              </div>

            </div>
            </div>
            
            </div>
            
      </div>
      <div className="layer  position-fixed top-0 vh-100 vw-100  d-flex justify-content-center align-items-center d-none">
        <div className=" layer-image-cont w-50 ">
            <img src='' alt="pic" className='w-100'></img>
        </div>
      </div>
    </>
  
  )
}
