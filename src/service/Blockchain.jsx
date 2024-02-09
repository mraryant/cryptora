import './Service.css'
import './Blockchain.css'
import Footer from '../component/Footer'
const bchain = "https://res.cloudinary.com/dyqkppjr1/video/upload/v1707474986/Cryptora%20Videos/blockchain%20services.mp4"
import { Helmet } from 'react-helmet'

const Blockchain = () => {
  const data = {
    // nftsec1
    "heading1": "BLOCKCHAIN CONSULTING SERVICES",
    "para1": "We design and develop peer-to-peer Decentralised Applications for a wide array of industries, including healthcare, supply chain and logistics, utility, and startups.",
    "button1": "Expert Consultancy",
    "button2": "Download Broucher",

    // nftsec2
    "small2": "ABOUT",
    "heading2": "MULTICHAIN WALLET DEVELOPMENT",
    "paragraph2": "Defi wallet ensures direct peer to peer transactions regulated by smart contracts between different parties without the intervention of any third parties. Hence, users can completely control their funds using exclusive private keys. It is immune to hacking attacks and data breaches. DeFi wallets can come in the form of web, hardware, desktop, and mobile wallets. The popular examples of Defi wallets are MetaMask, MyEtherwallet, BitGo, and Electrum. Defi wallets ensure the utmost safety of users’ funds and data through measures like two-factor authentication, multi-signature technology, and cold wallets.",

    //  nftsec3
    "small3": "SERVICES",
    "heading3": "OUR BLOCKCHAIN CONSULTING SERVICES",
    "paragraph3": "We have helped 125+ startups and enterprises achieve success with our training workshops, prototype design, and blockchain proof of concepts.",

    "cardheading1": "Workshop And Training",
    "cardparagraph1": "Our team conducts blockchain workshops and live webinars to help you better understand blockchain technology, its potential use cases & utilization for your projects.",

    "cardheading2": "Blockchain Consultancy",
    "cardparagraph2": "We examine your existing solution, identify the need for a blockchain solution specific to your business use case and analyze how blockchain will add value to your business.",

    "cardheading3": "Quick PoC",
    "cardparagraph3": "Our team creates a Proof of Concept (PoC) to demonstrate the practical potential of your blockchain project in 4 weeks. The PoC helps clients understand how their blockchain ecosystem will work.",

    //  extrasec
    "extrasmall3": "PROCESS",
    "extraheading3": "BLOCKCHAIN CONSULTING PROCESS",
    "extraparagraph3": "Our experts are committed to providing custom blockchain solutions for safely transferring cryptocurrency on a digital ledger.",

    "extracardheading1": "Ideation",
    "extracardparagraph1": "We discuss the feasibility of your blockchain project with our blockchain developers and define the business goals and workflow for your system.",

    "extracardheading2": "Assessment",
    "extracardparagraph2": "We analyze your existing solution and discover if it can be migrated to the blockchain. Our team assesses entire business procedures.",

    "extracardheading3": "Integration",
    "extracardparagraph3": "Our Blockchain Consultants help clients identify if the blockchain technology can be integrated into their business operations and environment.",

    "extracardheading4": "Development",
    "extracardparagraph4": "Once you are ready to start blockchain technology development, we help you build the blockchain product, from UI/UX.",

    "extracardheading5": "Component Definition",
    "extracardparagraph5": "Our blockchain consulting team identifies the right blockchain platform based on your business requirements and the type of blockchain.",

    "extracardheading6": "PoC",
    "extracardparagraph6": "We create a framework and prototype to identify the use cases for the business with minimum viable features.",


    // nftsec4
    "small4": "Our Work ",
    "heading4": "Logistic Web Platform Development",
    "paragraph4": "Cryptora has successfully built a web-based application on blockchain for TraceRx. TraceRx is a Platform for Tracing the Shipment of Drugs. It allows the UNO to trace the distribution of free drugs and identify inefficiency and losses.",

    //s5main
    "small5": "AREA",
    "heading5": "BLOCKCHAIN CONSULTING",
    "paragraph5": "INDUSTRIES THAT APPROACHED US FOR BLOCKCHAIN CONSULTING",


    //nftsec5
    "title1": "Healthcare",
    "content1": "Offering controlled data disclosure to every involved member of the network in Blockchain-enabled patient health record management solution.",

    "title2": "Government",
    "content2": "Smart contracts allow every member involved in the blockchain platform to measure the impact of social impact at every step of the process.",

    "title3": "Media",
    "content3": "Smart Contracts in the Media industry ensures content’s ownership and fair evaluation, along with the elimination of intermediaries.",

    "title4": "Lending",
    "content4": "Integrating Blockchain to the current P2P lending system can reduce delays, eliminate the need for middlemen, and bring transparency.",

    "title5": "Identity Management",
    "content5": "By enabling control over the identity and personal information, blockchain identity management allows people to create a self-sovereign identity.",

    "title6": "Supplychain",
    "content6": "We have deployed Blockchain on the supply chain, which offers an updated and validated shared ledger with each network participant.",

  }
  return (
    <>
      <Helmet>
        <title> Blockchain Consulting Services & Solutions - Cryptora </title>

        <meta name='description' content=' Blockchain consulting services provide expert guidance on implementing and leveraging blockchain technology specialize in NFT, web3, software development, ledger technology and app development.' />

        <meta name="keywords" content="crypto token development company, token development, token development services" />
        <link rel="canonical" href="https://cryptora.tech/blockchain-consulting-service" />
        <meta property="og:title" content="Blockchain Consulting Services & Solutions - Cryptora" />
        <meta property="og:url" content="https://cryptora.tech/blockchain-consulting-service" />
        <meta property="og:description" content="Blockchain consulting services provide expert guidance on implementing and leveraging blockchain technology specialize in NFT, web3, software development, ledger technology and app development " />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://cryptora.tech/blockchain-consulting-service" />
        <meta name="twitter:title" content="Blockchain Consulting Services & Solutions - Cryptora" />
        <meta name="twitter:description" content="Blockchain consulting services provide expert guidance on implementing and leveraging blockchain technology specialize in NFT, web3, software development, ledger technology and app development. " />

      </Helmet>
      <div id="blockchainbody">
        {/* <TopNavbar /> */}

        <div className='blockchainsec1main' >
          <video autoPlay loop controls playsInline muted className='blockchainvideo'>
            <source src={bchain} type='video/mp4' />

          </video>
          <div className='overlay01'></div>
          <div id="blockchainsec1" className=' container text-focus-in2'>

            <div id="blockchainleft">
              <p className='blockchainhead'>{data.heading1}</p>
              <p className='blockchainpara'>{data.para1}</p>
              <br />
              <div className='blockchainbutton'>
                <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                  {data.button1}
                </a>
                <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                  {data.button2}
                </a>

              </div>
            </div>
            <div id="blockchainright">
              <div>


              </div>
            </div>
          </div>

        </div>


        <div id='blockchainsec2' className="container">
          <div id="blockchainleft">
            <p className='blockchainsmall'>{data.small2}</p>
            <p className='blockchainheading'>{data.heading2}</p>
            <p className='blockchainparagraph'>{data.paragraph2}</p>
            <br />
            <div className='blockchainbutton'>
              <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                Talk to Expert
              </a>


            </div>
          </div>
          <div id="blockchainright">
            <div>
              <img src="/Blockchain/block.png" style={{ width: "100%", height: "100%" }} alt="I am Just comming ^_^" />


            </div>
          </div>
        </div>


        <div id="s5main" className='container'>
          <p className='s5small'>{data.small3}</p>
          <p className='blockchainheading'>{data.heading3}</p>
          <p className='blockchainparagraph'>
            {data.paragraph3}</p>
        </div>
        <div id='blockchainsec3'>
          <div className="blockchaincard">
            <div className="blockchaincontent">
              <img src='/Blockchain/bc1.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading1}
              </p><p className="para">{data.cardparagraph1}</p>

            </div>
          </div>
          <div className="blockchaincard">
            <div className="blockchaincontent">
              <img src='/Blockchain/bc2.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading2}
              </p><p className="para">
                {data.cardparagraph2}       </p>

            </div>
          </div>
          <div className="blockchaincard">
            <div className="blockchaincontent">
              <img src='/Blockchain/bc3.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading3}
              </p><p className="para">
                {data.cardparagraph3}
              </p>

            </div>
          </div>



        </div>

        <div id="s5main" className='container'>
          <p className='s5small'>{data.extrasmall3}</p>
          <p className='blockchainheading'>{data.extraheading3}</p>
          <p className='blockchainparagraph'>
            {data.extraparagraph3}</p>
        </div>
        <div id='blockchainsec3'>
          <div className="blockchaincard">
            <div className="blockchaincontent">
              <img src='/Blockchain/bc11.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.extracardheading1}
              </p><p className="para">{data.extracardparagraph1}</p>

            </div>
          </div>
          <div className="blockchaincard">
            <div className="blockchaincontent">
              <img src='/Blockchain/bc12.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.extracardheading2}
              </p><p className="para">
                {data.extracardparagraph2}       </p>

            </div>
          </div>
          <div className="blockchaincard">
            <div className="blockchaincontent">
              <img src='/Blockchain/bc13.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.extracardheading3}
              </p><p className="para">
                {data.extracardparagraph3}
              </p>

            </div>
          </div>
          <div className="blockchaincard">
            <div className="blockchaincontent">
              <img src='/Blockchain/bc14.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.extracardheading4}
              </p><p className="para">
                {data.extracardparagraph4}
              </p>

            </div>
          </div>
          <div className="blockchaincard">
            <div className="blockchaincontent">
              <img src='/Blockchain/bc15.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.extracardheading5}
              </p><p className="para">
                {data.extracardparagraph5}
              </p>

            </div>
          </div>
          <div className="blockchaincard">
            <div className="blockchaincontent">
              <img src='/Blockchain/bc16.jpg' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.extracardheading6}
              </p><p className="para">
                {data.extracardparagraph6}
              </p>

            </div>
          </div>


        </div>


        <div id='blockchainsec2' className="container">
          <div id="blockchainleft">
            <p className='blockchainsmall'>{data.small4} </p>
            <p className='blockchainheading'>{data.heading4}</p>
            <p className='blockchainparagraph'>{data.paragraph4}</p>
            <div className='blockchainbutton'>
              <button className='dexbutton'>
                Talk to Expert
              </button>


            </div>
          </div>
          <div id="blockchainright">
            <div>
              <img src="/Blockchain/block2.png" style={{ width: "100%", height: "100%" }} alt="I am Just comming ^_^" />

            </div>
          </div>
        </div>

        <div id="s5main" className='container'>
          <p className='s5small'>{data.small5} </p>
          <p className='blockchainheading'>{data.heading5}</p>
          <p className='blockchainparagraph'>
            {data.paragraph5}
          </p>
        </div>
        <div id='blockchainsec5' className="container">
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/Blockchain/bc21.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
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
                <p className="n5logo"><img src="/Blockchain/bc22.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
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
                <p className="n5logo"><img src="/Blockchain/bc23.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title3}</div>
                <div className="n5hover_content">
                  <p>{data.content3}</p>      </div>
              </div>
            </div>
          </section>
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/Blockchain/bc24.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title4}</div>
                <div className="n5hover_content">
                  <p>{data.content4}</p>      </div>
              </div>
            </div>
          </section>

          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/Blockchain/bc25.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title5}</div>
                <div className="n5hover_content">
                  <p>{data.content5}</p>      </div>
              </div>
            </div>
          </section>

          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/Blockchain/bc26.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title6}</div>
                <div className="n5hover_content">
                  <p>{data.content6}</p>      </div>
              </div>
            </div>
          </section>



        </div>
        <Footer />
      </div>
    </>
  )
}

export default Blockchain