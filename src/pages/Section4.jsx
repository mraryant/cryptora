// import React from 'react'
import '../styles/Section4.css'
import NFTG from '../assets/nft1.jpg'
import { easeInOut, motion } from "framer-motion";

const Section4 = () => {

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {

        staggerChildren: 0.2, // Adjust the stagger delay as needed
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
            <motion.ul
              initial="hidden"
              transition={{ ease: "easeInOut" }}
              whileInView="visible"
              variants={staggerVariants}
            >
              <motion.li variants={childVariants}>NFT Marketplace</motion.li>
              <motion.li variants={childVariants}>NFT Smart Contract</motion.li>
              <motion.li variants={childVariants}>NFT Marketplace Support</motion.li>

            </motion.ul>
            <motion.ul
              initial="hidden"
              transition={easeInOut}
              whileInView="visible"
              variants={staggerVariants}
            >
              <motion.li variants={childVariants} >NFT Development</motion.li>
              <motion.li variants={childVariants}>Community Building</motion.li>
              <motion.li variants={childVariants}>Social Media Marketing</motion.li>
            </motion.ul>
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