// import React from 'react'
import '../styles/Section4.css'
import NFTG from '../assets/nft1.jpg'

const Section4 = () => {
  return (
    <>
      <div className="s4main">

        <div className="s4left">
          <img src={NFTG} alt="I am Just comming ^_^" style={{ width: "60%", height: "80%" }} />



        </div>
        <div className="s4right">
          <p className='s4heading font-face-gm'>ABOUT <span className='dspan'>NFT</span> MARKETPLACE</p>
          <p className='s4para'>We build robust NFT marketplaces, integrating multiple security layers and rich features to enhance users’ trading experiences. We offer a full range of NFT marketplace development services, from front-end to back-end to smart contract development, all under one umbrella. </p>
          <div className="s4list">
            <ul>
              <li>NFT Marketplace</li>
              <li>NFT Smart Contract</li>
              <li>NFT Marketplace Support</li>

            </ul>
            <ul>
              <li>NFT Development</li>
              <li>Community Building</li>
              <li>Social Media Marketing</li>
            </ul>
          </div>
          <br />
          <div className="s4btns">
            <a style={{ textDecoration: "none", }} className='s4button' href="https://bit.ly/3GnnFUJ">Expert Consultantly</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a style={{ textDecoration: "none", }} className='s4button2' href="https://bit.ly/3LO4953">Download Broucher</a>

          </div>
        </div>

      </div>

    </>
  )
}

export default Section4