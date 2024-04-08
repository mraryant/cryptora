import "../styles/Section1.css";
import "../styles/Button2.css";
import "../styles/Social.css";

import { motion } from "framer-motion";

import bb1 from "/homepageBubbles/wepik-export-20240404105349k13D 1.png"
import bb2 from "/homepageBubbles/wepik-export-20240404080034O0Pp 1.png"
import bb3 from "/homepageBubbles/wepik-export-202404040801057NlL 1.png"
import bb4 from "/homepageBubbles/wepik-export-20240404080254ayqj 1.png"
import bb5 from "/homepageBubbles/wepik-export-20240404105035c6t3 1.png"
import bb6 from "/homepageBubbles/wepik-export-20240404105257oTd9 1.png"
import bb7 from "/homepageBubbles/wepik-export-20240404075853Bvwf 1.png"

const Waves =
  "https://res.cloudinary.com/dyqkppjr1/video/upload/v1707462030/Cryptora%20Videos/homwpage%20sec2%20video.mp4";
import Arrow from "/down.gif";
// import { motion } from "framer-motion"

function Section1() {
  return (
    <>
      <div className="main">
        {/* <div className=" position-absolute z-1 " > */}
        <motion.img className="position-absolute z-1  " style={{ top: "27%", left: "30%", width: "30px" }}
          initial={{ y: 0 }}
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.1
          }}
          src={bb1} alt="" />
        <motion.img className="position-absolute z-1  " style={{ top: "13%", left: "80%", width: "60px" }}
          initial={{ y: 0 }}
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.1
          }}
          src={bb2} alt="" />
        <motion.img className="position-absolute z-1  " style={{ top: "10%", left: "10%", width: "60px" }}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
          src={bb3} alt="" />
        <motion.img className="position-absolute z-1  " style={{ top: "70%", left: "35%", width: "40px" }}
          initial={{ y: 0 }}
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.1
          }}
          src={bb4} alt="" />
        <motion.img className="position-absolute z-1  " style={{ top: "43%", left: "65%", width: "40px" }}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
          src={bb5} alt="" />
        <motion.img className="position-absolute z-1  " style={{ top: "90%", left: "20%", width: "40px" }}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
          src={bb6} alt="" />
        <motion.img className="position-absolute z-1  " style={{ top: "80%", left: "95%", width: "30px" }}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
          src={bb7} alt="" />
        {/* </div> */}
        <video autoPlay loop muted playsInline className="video v1">
          <source src={Waves} type="video/mp4" />
        </video>
        <div className="overlay01"></div>
        <div className="trial1">
          <div className="left z-2">
            <h1 className="heading text-focus-in text-shadow1">
              CRYPTO AND BLOCKCHAIN <br />
              DEVELOPMENT
            </h1>
            <p className="para text-shadow1">
              Are you looking for ICO Marketing ? We provide crypto and
              blockchain development company with experience in NFT marketplace
              development, token development, crypto wallet development.
            </p>
            <br />
            <div className="know">
              <button className="s4button" id="btn1">
                Cryptora Service
              </button>
              <button className="s4button" id="btn1">
                Cryptora Product
              </button>
            </div>
          </div>
        </div>
        <div
          className="know2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="logo-container2 know2">
            <img src={Arrow} className="arimg2" alt="Arrow" />
            <div className="logo-container">
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="cpath"
              >
                <a href="#section2">
                  <path
                    id="circlePath"
                    fill="none"
                    strokeWidth="4"
                    d="
          M 10, 50  
          a 40,40 0 1,1 80,0  
          a 40,40 0 1,1 -80,0  
        "
                  />
                </a>
                <text id="text" fontSize="12" fontWeight="bold" fill="white">
                  <textPath
                    id="textPath"
                    style={{ color: "white" }}
                    href="#circlePath"
                  >
                    SCROLL DOWN SCROLL DOWN SCROLL DOWN{" "}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="trial2"></div>
    </>
  );
}

export default Section1;
