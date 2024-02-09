
import "../styles/C-Service.css"
import Footer from "../component/Footer"

import { Helmet } from "react-helmet";
// import { useEffect, useState } from "react";

function Services() {

  const data = {

    // nftsec2
    "small2": "SERVICES",
    "heading2": "Our Services",
    "paragraph2": "We provide crypto and blockchain development company with experience in NFT marketplace development, token development, crypto wallet development.",

    //s3main
    "small3": "Our Services",
    "heading3": "What Can We Do For You",
    "paragraph3": "By using exclusive in-house ideas that have been tried and refined over time, we assist crypto and blockchain based company brands in achieving their goals and idea in business expansion through innovative & creative approaches.",

    //CARDS
    "cardheading1": "Token Development",
    "cardparagraph1": "The Token Development Services aid in the development of Ethereum tokens. ERC20 and the BEP20 are some of the Ethereum Tokens.",

    "cardheading2": "Crypto Exchange",
    "cardparagraph2": "DEXs, or decentralized exchanges, allow consumers to purchase and sell cryptocurrencies without the involvement of brokers.",

    "cardheading3": "NFT Marketplace",
    "cardparagraph3": "NFT marketplaces built by us are feature-rich, decentralized, and facilitate tokenization of all kinds of assets, artwork, gaming cards.",

    "cardheading4": "ICO Marketing",
    "cardparagraph4": "Cryptora is an Initial Coin Offering marketing company. Expands your market reach and reputation by providing best-in-class ICO Marketing Services and focused ICO campaigns.",

    "cardheading5": "DAPP Development",
    "cardparagraph5": "We design and develop peer to peer Decentralised Applications for a wide array of industries, including healthcare, supply chain and logistics, utility and startups.",

    "cardheading6": "Wallet Development",
    "cardparagraph6": "Users have complete control over their private keys and funds with a decentralized wallet supported by institutional-grade security and ease of usage.",


    "cardheading7": "Blockchain Consulting",
    "cardparagraph7": "Our blockchain consultants understand your project-specific needs and help you identify the right blockchain protocol that suits your business case.",


    "cardheading8": "Staking Platform",
    "cardparagraph8": "Staking Platforms are in high demand alongside the NFT marketplaces and are the basis for a variety of NFT-based services. They are rich in its features.",


    "cardheading9": "NFT Game Development",
    "cardparagraph9": "Cryptora is the premier NFT game development company that can assist you in launching your gaming platform based on bespoke blockchain and NFTs.",

  }

  return (
    <>
      {/* <TopNavbar /> */}
      <Helmet>
        <title> Services- cryptora</title>
      </Helmet>


      <div id='CSsec2' className="container">
        <div id="CSleft">
          <p className='CSsmall'>{data.small2}</p>
          <p className='CSheading'>{data.heading2}</p>
          <p className='CSparagraph'>{data.paragraph2}</p>
          <div className='CSbutton'>
            <button className='dexbutton'>
              Expert Consultantly
            </button>
            <button className='dexbutton'>
              Download Broucher
            </button>


          </div>
        </div>
        <div id="CSright">
          <div className='CSrright'>
            <img src="/src/assets/servic-hero-right.png" style={{ width: "100%", height: "100%" }} alt="I am Just comming ^_^" />


          </div>
        </div>
      </div>



      <div id="CS5main" className='container'>
        <p className='CS5small'>{data.small3}</p>
        <p className='CSheading'>{data.heading3}</p>
        <p className='CSparagraph'>
          {data.paragraph3}</p>
      </div>


      <div id='CSsec3'>
        <div className="CScard">
          <div className="CScontent">
            <img src='/src/assets/cryptowallet/cw1.png' style={{ width: 50, height: 50 }} />
            <p className="heading">{data.cardheading1}
            </p><p className="para">{data.cardparagraph1}</p>

          </div>
        </div>
        <div className="CScard">
          <div className="CScontent">
            <img src='/src/assets/cryptowallet/cw2.png' style={{ width: 50, height: 50 }} />
            <p className="heading">{data.cardheading2}
            </p><p className="para">
              {data.cardparagraph2}       </p>

          </div>
        </div>
        <div className="CScard">
          <div className="CScontent">
            <img src='/src/assets/cryptowallet/cw3.png' style={{ width: 50, height: 50 }} />
            <p className="heading">{data.cardheading3}
            </p><p className="para">
              {data.cardparagraph3}
            </p>

          </div>
        </div>
        <div className="CScard">
          <div className="CScontent">
            <img src='/src/assets/cryptowallet/cw4.png' style={{ width: 50, height: 50 }} />
            <p className="heading">{data.cardheading4}
            </p><p className="para">
              {data.cardparagraph4}
            </p>

          </div>
        </div>
        <div className="CScard">
          <div className="CScontent">
            <img src='/src/assets/cryptowallet/cw5.png' style={{ width: 50, height: 50 }} />
            <p className="heading">{data.cardheading5}
            </p><p className="para">
              {data.cardparagraph5}
            </p>

          </div>
        </div>
        <div className="CScard">
          <div className="CScontent">
            <img src='/src/assets/cryptowallet/cw6.png' style={{ width: 50, height: 50 }} />
            <p className="heading">{data.cardheading6}
            </p><p className="para">
              {data.cardparagraph6}
            </p>

          </div>
        </div>
        <div className="CScard">
          <div className="CScontent">
            <img src='/src/assets/cryptowallet/cw7.png' style={{ width: 50, height: 50 }} />
            <p className="heading">{data.cardheading7}
            </p><p className="para">
              {data.cardparagraph7}
            </p>

          </div>
        </div>
        <div className="CScard">
          <div className="CScontent">
            <img src='/src/assets/cryptowallet/cw8.png' style={{ width: 50, height: 50 }} />
            <p className="heading">{data.cardheading8}
            </p><p className="para">
              {data.cardparagraph8}
            </p>

          </div>
        </div>
        <div className="CScard">
          <div className="CScontent">
            <img src='/src/assets/cryptowallet/cw9.png' style={{ width: 50, height: 50 }} />
            <p className="heading">{data.cardheading9}
            </p><p className="para">
              {data.cardparagraph9}
            </p>

          </div>
        </div>



      </div>

      <Footer />
    </>
  )
}

export default Services