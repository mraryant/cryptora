
import './Service.css'
import './Decentralized.css'
import Footer from '../component/Footer'
const Waves = 'https://res.cloudinary.com/dyqkppjr1/video/upload/v1707474083/Cryptora%20Videos/exchange.mp4'
import deimg1 from '/Decentralized/deimg1.png'
import deimg2 from '/Decentralized/deimg2.png'
import { Helmet } from 'react-helmet'

const Decentralized = () => {

  const data = {
    // nftsec1
    "heading1": "DECENTRALIZED EXCHANGE DEVELOPMENT",
    "para1": "We have an experienced team of Blockchain engineers who can create a flexible and scalable DEcurrency trading platform that focuses on security and connectivity.",
    "button1": "Expert Consultancy",
    "button2": "Download Broucher",

    // nftsec2
    "small2": "SERVICES",
    "heading2": "DECENTRALIZED FINANCE EXCHANGE",
    "paragraph2": "DEXs, or decentralized exchanges, allow consumers to purchase and sell DEcurrencies without the involvement of brokers. Users link their DEcurrency wallet to a DEX, choose their preferred DE trading pair, enter the amount, and click the swap button. DeFI DEXS uses Smart Contracts and is connected with DEcurrency wallets to automatically match buyers and sellers and give users fast and secure transactions.",

    //  nftsec3
    "small3": "OUR FEATURES",
    "heading3": "DEX DEVELOPMENT",
    "paragraph3": "Our experts are committed to providing custom blockchain solutions for safely transferring DEcurrency on a digital ledger.",

    "cardheading1": "Admin Panel Dashboard",
    "cardparagraph1": "It regularly keeps a close check on the business activities. It will contribute to better regulation.",

    "cardheading2": "Best User Interface",
    "cardparagraph2": "All users will benefit from an interactive and feature-rich interface that enables for error-free and glitch-free use of the DEX platform.",

    "cardheading3": "Transactions Record",
    "cardparagraph3": "The database will keep track of every deposit. This will ensure that the DEX protocol is held to a high standard of accountability.",

    "cardheading4": "Secure Transaction",
    "cardparagraph4": "The trading script provides a variety of options that can't be hacked by programmers and aren't vulnerable to cyber-attacks.",

    "cardheading5": "Payment Gateways",
    "cardparagraph5": "Through seamless communication and persistent trade, a buyer and seller can stay in touch at all times.",

    "cardheading6": "Two-Factor Authentication",
    "cardparagraph6": "Two-factor authentication ensures the highest level of security. It can also be linked into the wallets of users to allow for safe trade.",

    // nftsec4
    "small4": "DEFI EXCHANGE",
    "heading4": "WORLD-CLASS SOLUTIONS TO CREATE DEFI EXCHANGE",
    "paragraph4": "Cryptrora's technological skills, extensive blockchain understanding, and depth of experience uniquely qualify us to be your go-to DeFi exchange building firm. Our well-thought-out roadmap, purpose-built architectures, end-to-end delivery, and robust network of partners enable you to get your decentralized exchange up to and to dash, giving you a competitive edge.",

    //s5main
    "small5": "TECHNICAL SERVICE",
    "heading5": "WHAT WE OFFER?",
    "paragraph5": "Our multi-functional team of blockchain developers and subject matter experts collaborate to build a world-class decentralized exchange that meets your business needs.      ",


    //nftsec5
    "title1": "Peer-to-Peer Trading with Smart contract",
    "content1": "Using a smart contract to perform a deal without an intermediary will make peer-to-peer trading easier. Make your decentralized exchange more transparent and faster.",

    "title2": "Liquidity with Automated Market Maker",
    "content2": "The automated market maker ensures liquidity on your decentralized exchange by automatically executing deals utilizing liquidity pools and replacing buyers and sellers.",

    "title3": "Institutional-grade security with Market-Leading Features",
    "content3": "Secure your DEX with bank-grade security and industry-leading security features. Provide a secure trading environment for your users.",

  }
  return (
    <>
      <Helmet>

        <title> Cryptocurrency Exchange App Design & Development - Cryptora </title>

        <meta name='description' content=' Launch your cryptocurrency exchange application. Cryptora is a leading provider of decentralized exchange app design and development services.' />
        <meta name="keywords" content="exchange software development, cryptocurrency exchange software open source, crypto exchange development, Cryptocurrency exchange software development" />
        <link rel="canonical" href="https://cryptora.tech/decentralized-exchange-development" />
        <meta property="og:title" content="Cryptocurrency Exchange App Design & Development - Cryptora" />
        <meta property="og:url" content="https://cryptora.tech/decentralized-exchange-development" />
        <meta property="og:description" content="Launch your cryptocurrency exchange application. Cryptora is a leading provider of decentralized exchange app design and development services." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://cryptora.tech/decentralized-exchange-development" />
        <meta name="twitter:title" content="Cryptocurrency Exchange App Design & Development - Cryptora" />
        <meta name="twitter:description" content="Launch your cryptocurrency exchange application. Cryptora is a leading provider of decentralized exchange app design and development services." />


      </Helmet>

      <div id="DEbody">
        {/* <TopNavbar /> */}

        <div className='DEsec1main' >
          <video autoPlay playsInline muted className='DEvideo'>
            <source src={Waves} type='video/mp4' />

          </video>
          <div className='overlay01'></div>
          <div id="DEsec1" className=' container text-focus-in'>

            <div id="DEleft">
              <p className='DEhead'>{data.heading1}</p>
              <p className='DEpara'>{data.para1}</p>
              <br />
              <div className='DEbutton'>
                <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton' id='btn1'>
                  {data.button1}
                </a>
                <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton' id='btn1'>
                  {data.button2}
                </a>

              </div>
            </div>
            <div id="DErig2ht">

            </div>
          </div>
        </div>


        <div id='DEsec2' className="container">
          <div id="DEleft">
            <p className='DEsmall'>{data.small2}</p>
            <p className='DEheading'>{data.heading2}</p>
            <p className='DEparagraph'>{data.paragraph2}</p>
            <br />
            <div className='DEbutton'>
              <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                Talk to Expert
              </a>


            </div>
          </div>
          <div id="DEright">
            <div>
              <img src={deimg1} style={{ width: "100%", height: "100%" }} alt="I am Just comming ^_^" />


            </div>
          </div>
        </div>
        <div id="s5main" className='container'>
          <p className='s5small'>{data.small3}</p>
          <p className='DEheading'>{data.heading3}</p>
          <p className='DEparagraph'>
            {data.paragraph3}</p>
        </div>
        <div id='DEsec3'>
          <div className="DEcard">
            <div className="DEcontent">
              <img src='/Decentralized/de1.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading1}
              </p><p className="para">{data.cardparagraph1}</p>

            </div>
          </div>
          <div className="DEcard">
            <div className="DEcontent">
              <img src='/Decentralized/de2.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading2}
              </p><p className="para">
                {data.cardparagraph2}       </p>

            </div>
          </div>
          <div className="DEcard">
            <div className="DEcontent">
              <img src='/Decentralized/de3.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading3}
              </p><p className="para">
                {data.cardparagraph3}
              </p>

            </div>
          </div>
          <div className="DEcard">
            <div className="DEcontent">
              <img src='/Decentralized/de5.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading4}
              </p><p className="para">
                {data.cardparagraph4}
              </p>

            </div>
          </div>
          <div className="DEcard">
            <div className="DEcontent">
              <img src='/Decentralized/de6.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading5}
              </p><p className="para">
                {data.cardparagraph5}
              </p>

            </div>
          </div>
          <div className="DEcard">
            <div className="DEcontent">
              <img src='/Decentralized/de4.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading6}
              </p><p className="para">
                {data.cardparagraph6}
              </p>

            </div>
          </div>


        </div>
        <div id='DEsec2' className="container">
          <div id="DEleft">
            <p className='DEsmall'>{data.small4} </p>
            <p className='DEheading'>{data.heading4}</p>
            <p className='DEparagraph'>{data.paragraph4}</p>
            <br />
            <div className='DEbutton'>
              <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                Talk to Expert
              </a>


            </div>
          </div>
          <div id="DEright">
            <div>
              <img src={deimg2} style={{ width: "100%", height: "100%" }} alt="I am Just comming ^_^" />

            </div>
          </div>
        </div>

        <div id="s5main" className='container'>
          <p className='s5small'>{data.small5} </p>
          <p className='DEheading'>{data.heading5}</p>
          <p className='DEparagraph'>
            {data.paragraph5}
          </p>
        </div>
        <div id='DEsec5' className="container">
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/Decentralized/de11.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title1}</div>
                <div className="n5hover_content">
                  <p> {data.content1}</p>
                </div>
              </div>
            </div>
          </section>
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/Decentralized/de22.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title2}</div>
                <div className="n5hover_content">
                  <p>{data.content2}</p>
                </div>
              </div>
            </div>
          </section>
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/Decentralized/de33.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title3}</div>
                <div className="n5hover_content">
                  <p>{data.content3}</p>      </div>
              </div>
            </div>
          </section>





        </div>
        <Footer />
      </div>
    </>
  )
}

export default Decentralized