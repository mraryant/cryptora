// import React from 'react'
import '../styles/Section5.css'
const TD = 'https://res.cloudinary.com/dyqkppjr1/video/upload/v1707828117/Cryptora%20Videos/home-token-dev.mp4'
const NFTD = 'https://res.cloudinary.com/dyqkppjr1/video/upload/v1707626990/Cryptora%20Videos/home%20nft%20marketplace.mp4'
// import ICO from '../assets/ICO.png'
const ICO = 'https://res.cloudinary.com/dyqkppjr1/video/upload/v1707622112/Cryptora%20Videos/home%20ICO.mp4'
const WALLET = 'https://res.cloudinary.com/dyqkppjr1/video/upload/v1707626987/Cryptora%20Videos/home%20wallet.mp4'
// import Arrow from '../assets/narrow.svg'
const META = 'https://res.cloudinary.com/dyqkppjr1/video/upload/v1707828117/Cryptora%20Videos/home-metaverse.mp4'
import Point from '../assets/bullet.svg'
import { motion } from "framer-motion";
const Section5 = () => {

  const staggerVariants = {
    hidden: { opacity: 0, },
    visible: {

      opacity: 1,
      scale: 1,
      transition: {

        staggerChildren: 0.2, // Adjust the stagger delay as needed
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20, scale: 1.5, },
    visible: { opacity: 1, y: 0, scale: 1, },
  };

  return (
    <>
      {/* <div className="showcase">
  <img src={NFTG} alt="I am Just comming ^_^" />
  <h1 className='etitle' style={{fontFamily:'RalewayBold', fontWeight:'bold'}}>GREATEST</h1>
</div> */}

      <div className="s5main">

        <div className="s5left">
          <motion.div className="s5data"
            initial="hidden"
            transition={{ ease: "easeInOut" }}
            whileInView="visible"
            variants={staggerVariants}
          >
            <motion.p className='s5heading' variants={childVariants} ><span style={{ color: '#f88410', stroke: 'white', WebkitTextStroke: "1.5px white" }}>TOKEN</span> DEVELOPMENT</motion.p>

            <motion.p className='s5para' variants={childVariants}>{"Cryptora's"} real-world expertise allows us to provide our clients with comprehensive token production tools across industry hosts. Here are the features of Token Development Services.</motion.p>
            <motion.p className='s5para' variants={childVariants}><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Etherem Token</motion.p>
            <motion.p className='s5para' variants={childVariants}><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Tron Token</motion.p>
            <motion.p className='s5para' variants={childVariants}><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Solana Token</motion.p>
            <motion.p className='s5para' variants={childVariants}><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  BEP Token</motion.p>
            <motion.p className='s5para' variants={childVariants}><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Polygon Token</motion.p>
            <motion.p className='s5para' variants={childVariants}><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  NFT Token</motion.p>
            <a style={{ textDecoration: "none", width: 300, textAlign: "center" }} className='s4button' href="https://bit.ly/3GnnFUJ">Expert Consultantly</a>

          </motion.div>
          {/* <a href="#" className="btn-shine" target="_blank">TOKEN DEVELOPMENT</a> */}
          {/* <div class="title">
 <p> TOKEN DEVELOPMENT</p>

</div> */}
        </div>
        <div className="s5right">
          <div style={{ width: "80%", height: "80%", position: "relative" }}>

          <div className="radialgradient"  ></div>
          <div className="  rg2"  ></div>
            <video autoPlay muted loop src={TD} style={{ transform: "scaleX(-1)", width: "99%", height: "99%" }} alt="I am Just comming ^_^" />

          </div>
        </div>

      </div>
      <div className="s6main">

        <div className="s5left">
          <motion.div className="s5data"
            initial="hidden"
            transition={{ ease: "easeInOut" }}
            whileInView="visible"
            variants={staggerVariants}
          >
            <motion.p variants={childVariants} className='s5heading'><span style={{ color: '#f88410', stroke: 'white', WebkitTextStroke: "1.5px white", strokeWidth: 1 }}>NFT</span> MARKETPLACE</motion.p>
            <motion.p variants={childVariants} className='s5para'>{"Cryptora's"} real-world expertise allows us to provide our clients with comprehensive token production tools across industry hosts. Here are the features of Token Development Services.</motion.p>
            <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  NFT Smart Contract</motion.p>
            <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  NFT Marketplace Support</motion.p>
            <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  NFT Development</motion.p>
            <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Community Building</motion.p>
            <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} /> Social Media Marketing</motion.p>
            <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  NFT Token</motion.p>
            <a style={{ textDecoration: "none", width: 300, textAlign: "center" }} className='s4button' href="https://bit.ly/3GnnFUJ">Expert Consultantly</a>
          </motion.div>
        </div>
        <div className="s5right">

          <div style={{ width: "80%", height: "80%", position: "relative" }}>

            <div className="radialgradient"  ></div>
            <div className="  rg2"  ></div>
            <video autoPlay muted loop src={NFTD} style={{ width: "99%", height: "99%" }} alt="I am Just comming ^_^" />

          </div>

        </div>

      </div>
      <div className="s5main">

        <div className="s5left">
          <div className="s5data">
            <p className='s5heading'><span style={{ color: '#f88410', stroke: 'white', WebkitTextStroke: "1.5px white" }}>ICO</span> MARKETING</p>
            <p className='s5para'>Cryptora is an Initial Coin Offering marketing company. Expands your market reach and reputation by providing best-in-class ICO Marketing Services and focused ICO campaigns.</p>
            <div className='contentdiv'>
              <motion.div
                initial="hidden"
                transition={{ ease: "easeInOut" }}
                whileInView="visible"
                variants={staggerVariants}
              >
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  ICO Development</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Market Research</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  ICO Listing</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Social Media Marketing</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Press Release</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Email Marketing</motion.p>
              </motion.div>
              <motion.div
                initial="hidden"
                transition={{ ease: "easeInOut" }}
                whileInView="visible"
                variants={staggerVariants}
              >
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Influencer Marketing</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  SEO</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Content Development</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Community Management</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Airdrop, Bounty, Referral</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Pay Per Click</motion.p>
              </motion.div>
            </div>
            <a style={{ textDecoration: "none", width: 300, textAlign: "center" }} className='s4button' href="https://bit.ly/3GnnFUJ">Expert Consultantly</a>


          </div>
        </div>
        <div className="s5right">
          {/* <img src={ICO} style={{ width: "100%", height: "100%" }} alt="I am Just comming ^_^" /> */}

          <div style={{ width: "80%", height: "80%", position: "relative" }}>

            <div className="radialgradient"  ></div>
            <div className="  rg2"  ></div>
            <video style={{ width: "100%", height: "100%" }} autoPlay loop muted src={ICO}></video>
          </div>
        </div>

      </div>
      <div className="s6main">

        <div className="s5left">
          <motion.div className="s5data"
            initial="hidden"
            transition={{ ease: "easeInOut" }}
            whileInView="visible"
            variants={staggerVariants}
          >
            <motion.p variants={childVariants} className='s5heading'><span style={{ color: '#f88410', stroke: 'white', WebkitTextStroke: "1.5px white" }}>METAVERSE</span>  DEVELOPMENT</motion.p>
            <motion.p variants={childVariants} className='s5para'>{"Cryptora's"} real-world expertise allows us to provide our clients with comprehensive token production tools across industry hosts. Here are the features of Token Development Services.</motion.p>
            <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Etherem Token</motion.p>
            <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Tron Token</motion.p>
            <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Solana Token</motion.p>
            <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  BEP Token</motion.p>
            <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Polygon Token</motion.p>
            <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  NFT Token</motion.p>
            <a style={{ textDecoration: "none", width: 300, textAlign: "center" }} className='s4button' href="https://bit.ly/3GnnFUJ">Expert Consultantly</a>
          </motion.div>
        </div>
        <div className="s5right">

          {/* <img src={META} style={{ width: "100%", height: "100%" }} alt="I am Just comming ^_^" /> */}
          <div style={{ width: "80%", height: "80%", position: "relative" }}>

            <div className="radialgradient"  ></div>
            <div className="  rg2"  ></div>
            <video style={{ width: "100%", height: "100%" }} autoPlay loop muted src={META}></video>
          </div>

        </div>

      </div>
      <div className="s5main">

        <div className="s5left">
          <div className="s5data">
            <p className='s5heading'><span style={{ color: '#ff7d38', stroke: 'white', WebkitTextStroke: "1.5px white" }}>WALLET</span> DEVELOPMENT</p>
            <p className='s5para'>Cryptora cryptocurrency wallet development services make it simple to link wallets with various trading platforms. We are always aiming for more significant goals and delivering remarkable achievements.</p>
            <div className='contentdiv'>
              <motion.div
                initial="hidden"
                transition={{ ease: "easeInOut" }}
                whileInView="visible"
                variants={staggerVariants}
              >
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  DeFi Wallet</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Wallet For PC</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Hardware Wallet</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Coin-Specific Wallet</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  TRON Wallet</motion.p>

                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Wallet For PC</motion.p>


              </motion.div>
              <motion.div
                initial="hidden"
                transition={{ ease: "easeInOut" }}
                whileInView="visible"
                variants={staggerVariants}
              >
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  DeFi Wallet</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Centralized Wallet</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Multi-Currency Wallet</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Mobile Wallet</motion.p>
                <motion.p variants={childVariants} className='s5para'><img src={Point} alt="I am Just comming ^_^" style={{ width: 15, height: 15, color: 'white', marginRight: 5, }} />  Web Wallet</motion.p>

              </motion.div>
            </div>
            <a style={{ textDecoration: "none", width: 300, textAlign: "center" }} className='s4button' href="https://bit.ly/3GnnFUJ">Expert Consultantly</a>

          </div>
        </div>
        <div className="s5right">

          <video autoPlay loop muted src={WALLET} style={{ width: "100%", height: "100%" }} alt="I am Just comming ^_^" />

        </div>

      </div>
    </>
  )
}

export default Section5