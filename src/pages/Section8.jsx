// import React from 'react'
import '../styles/Section8.css'
import Arrow from '../assets/narrow.svg'
import B1 from '../assets/blog1.png'
import B2 from '../assets/blog2.png'
// import Footer from '../component/Footer'
// import Tabs from '../component/Tabs'
const Section8 = () => {
  return (
    <>


      <div className="s9main">

        <header className="text-center pb-5 mt-5 mb-2 fw-bold text-white" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <p className="s2heading">Our Blogs</p>

        </header>
        <div className="s8cardsdiv">
          <div className="s8card" style={{ width: "28rem" }}>
            <img src={B1} className="s8img" alt="..." />
            <div className="s8card-body">
              <h5 className="s8card-title">What is a cryptocurrency?</h5>
              <p className="s8card-text">A cryptocurrency, also known as crypto, is a type of digital asset with multiple use cases. {"It's"} primarily a way to transfer value between people digitally, including monetary value, ownership rights, or even voting privileges. Crypto differs from other digital payment.</p>
              <a href="#" className="s8btn ">
                <div className="logo-container2">
                  <img src={Arrow} className='arimg' alt="I am Just comming ^_^" />
                  <div className="logo-container">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='cpath'>
                      <path id="circlePath" fill="none" strokeWidth="4" d="
          M 10, 50
          a 40,40 0 1,1 80,0
          a 40,40 0 1,1 -80,0
        " />
                      <text id="text" fontSize="14" fontWeight="bold" fill="white" >
                        <textPath id="textPath" style={{ color: 'white' }} href="#circlePath" >READ MORE READ MORE READ MORE</textPath>
                      </text>
                    </svg>
                  </div>

                </div>
              </a>
            </div>
          </div>
          <div className="s8card" style={{ width: "28rem" }}>
            <img src={B2} className="s8img" alt="..." />
            <div className="s8card-body">
              <h5 className="s8card-title">Blockchain Technology</h5>
              <p className="s8card-text">A cryptocurrency, also known as crypto, is a type of digital asset with multiple use cases. {"It's"} primarily a way to transfer value between people digitally, including monetary value, ownership rights, or even voting privileges. Crypto differs from other digital payment.</p>
              <a href="#" className="s8btn ">
                <div className="logo-container2">
                  <img src={Arrow} className='arimg' alt="I am Just comming ^_^" />
                  <div className="logo-container">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='cpath'>
                      <path id="circlePath" fill="none" strokeWidth="4" d="
          M 10, 50
          a 40,40 0 1,1 80,0
          a 40,40 0 1,1 -80,0
        " />
                      <text id="text" fontSize="14" fontWeight="bold" fill="white" >
                        <textPath id="textPath" style={{ color: 'white' }} href="#circlePath" >READ MORE READ MORE READ MORE</textPath>
                      </text>
                    </svg>
                  </div>

                </div>
              </a>
            </div>
          </div>
          <div className="s8card" style={{ width: "28rem" }}>
            <img src={B1} className="s8img" alt="..." />
            <div className="s8card-body">
              <h5 className="s8card-title">What is a cryptocurrency?</h5>
              <p className="s8card-text">A cryptocurrency, also known as crypto, is a type of digital asset with multiple use cases. {"It's"} primarily a way to transfer value between people digitally, including monetary value, ownership rights, or even voting privileges. Crypto differs from other digital payment.</p>
              <a href="#" className="s8btn ">
                <div className="logo-container2">
                  <img src={Arrow} className='arimg' alt="I am Just comming ^_^" />
                  <div className="logo-container">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='cpath'>
                      <path id="circlePath" fill="none" strokeWidth="4" d="
          M 10, 50
          a 40,40 0 1,1 80,0
          a 40,40 0 1,1 -80,0
        " />
                      <text id="text" fontSize="14" fontWeight="bold" fill="white" >
                        <textPath id="textPath" style={{ color: 'white' }} href="#circlePath" >READ MORE READ MORE READ MORE</textPath>
                      </text>
                    </svg>
                  </div>

                </div>
              </a>
            </div>
          </div>



        </div>
        {/* <div className="logo-container2">
<img src={Arrow} className='arimg' alt="I am Just comming ^_^" />
<div className="logo-container">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='cpath'>
    <path id="circlePath"  fill="none" stroke-width="4" d="
          M 10, 50
          a 40,40 0 1,1 80,0
          a 40,40 0 1,1 -80,0
        " />
    <text id="text" font-size="14" font-weight="bold" fill="white" >
      <textPath id="textPath" style={{color:'white'}} href="#circlePath" >READ MORE READ MORE READ MORE</textPath>
    </text>
  </svg>
</div>

</div> */}
      </div>


    </>
  )
}

export default Section8