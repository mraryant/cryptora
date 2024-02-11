
// import TopNavbar from '../component/TopNavbar'
import './ICO.css'
import Footer from '../component/Footer'
const Waves = 'https://res.cloudinary.com/dyqkppjr1/video/upload/v1707473795/Cryptora%20Videos/NFT%20dev.mp4'
const video2 = 'https://res.cloudinary.com/dyqkppjr1/video/upload/v1707633178/Cryptora%20Videos/nft%20video%202.mp4dd'
import { Helmet } from 'react-helmet'
const NFTDev = () => {
  const data = {
    // nftsec1
    "heading1": "NFT MARKETPLACE DEVELOPMENT",
    "para1": "Launch your NFT Marketplace Platform with our Whitelabel NFT Marketplace Solution and drive users to convert their unique assets into NFTs.",
    "button1": "Expert Consultancy",
    "button2": "Download Broucher",

    // nftsec2
    "small2": "ABOUT NFT MARKETPLACE",
    "heading2": "VIRTUAL ASSETS WITH NFT MARKETPLACE",
    "paragraph2": "We build robust NFT marketplaces, integrating multiple security layers and rich features to enhance users’ trading experiences. We offer a full range of NFT marketplace development services, from front-end to back-end to smart contract development, all under one umbrella. Our experts develop marketplace Websites and Mobile Apps that compete with the best across the globe.Launch your NFT Marketplace Platform with our Whitelabel NFT Marketplace Solution and drive users to convert their unique assets into NFTs.",

    //  nftsec3
    "small3": "OUR SERVICES",
    "heading3": "NFT MARKETPLACE DEVELOPMENT",
    "paragraph3": "We provide marketplace development services using cutting-edge technology to produce a more secure, scalable and user-friendly product.",

    "cardheading1": "NFT Marketplace",
    "cardparagraph1": "With in-depth knowledge of ERC721 and ERC20 standards, smart contracts, our team designs and builds a user-centric NFT marketplace platform where users can create and trade NFTs.",
    "cardheading2": "NFT Smart Contract",
    "cardparagraph2": "We offer NFT smart contract development and audit services to ensure the error-free functioning of the smart contracts, ensuring seamless automation in NFT transactions.",
    "cardheading3": "NFT Marketplace Support",
    "cardparagraph3": "We continuously monitor, maintain and offer support for managing third-party upgrades, new OS releases and ensure nodes are always up and running.",
    "cardheading4": "NFT Development",
    "cardparagraph4": "Our NFT marketplace development company provides a token creation feature as a service to your NFT marketplace. It allows users on the platform to mint tokens for their assets.",
    "cardheading5": "Community Building",
    "cardparagraph5": "NFT token development is not an exception. Your primary community is the people who will support you,spread the word about you, invest in you,and but your NFTs.",
    "cardheading6": "Social Media Marketing",
    "cardparagraph6": "We help you cut through the noise using our cross-channel marketing programs. We strategize our marketing campaigns around your target audience to help you gain a competitive edge.",

    // nftsec4
    "small4": "MARKETING",
    "heading4": "NFT MARKETING COMPANY",
    "paragraph4": "We help you launch your own NFT marketplace and attract the growing community of NFT users. NFT marketplaces built by us are feature-rich, decentralized, and facilitate tokenization of all kinds of assets, including artwork, gaming cards, software licenses, digital collectibles, and real-world assets.",

    //s5main
    "small5": "FEATURES",
    "heading5": "NFT MARKETPLACE SOLUTIONS",
    "paragraph5": " Cryptora is a cryptocurrency and blockchain technology Pioneer.",


    //nftsec5
    "title1": "HOME PAGE WITH CAROUSEL BANNER",
    "content1": "Automatic/manual sliding banners for home page improves user attention and helps in increasing ROI.",

    "title2": "KEYWORD AND LOCATION-BASED SEARCH",
    "content2": "Search products based on product or category keywords and seller locations",

    "title3": "CUSTOMERS/VENDORS REGISTRATION",
    "content3": "User can register on the website as a Buyer or Vendor using individual registration forms.",

    "title4": "VENDOR DASHBOARD VIEW",
    "content4": "Vendors can see their store-related information overview under their exclusive seller dashboard.",

    "title5": "MANAGE VENDOR STORE",
    "content5": "Store page for each seller: i.e Vendors can manage information on their page from the vendor panel.",

    "title6": "SELLER PRODUCT MANAGEMENT",
    "content6": "Manage different product types from their panel (Simple, Downloadable, Virtual, Configurable etc.)",

    "title7": "SELLER ORDER MANAGEMENT",
    "content7": "Sellers can manage all the functions related to the order (Order info, status, etc.) from one page.",

    "title8": "RATINGS FOR VENDORS",
    "content8": "Vendor ratings and reviews will be visible on frontend in addition to product ratings.",

    "title9": "HISTORICAL INFORMATION ON TRANSACTIONST",
    "content9": "Vendors can view the transaction history of sales, orders, transactions, and commissions.",

    "title10": "GLOBAL/SEPARATE SELLER COMMISSION",
    "content10": "Commission payable to admin can be set on global level, vendor level, and category level.",

    "title11": "SELLER PAY-OUT",
    "content11": "Admin can set the commissions either based on Product Category or based on Seller.",

    "title12": "LAYERED MENU NAVIGATION",
    "content12": "Category and Sub-category menu navigation to display the products uploaded by seller/admin.",
  }

  return (
    <>
      <Helmet>
        <title> NFT Marketplace Development Company - Cryptora </title>

        <meta name='description' content=' Start your own NFT marketplace for selling digital assets. As an NFT marketplace development company, we are experts in developing solutions.' />

        <meta name="keywords" content="nft marketplace development, nft marketplace development company, nft marketplace development services, nft marketplace development solutions, nft marketplace platform development" />
        <link rel="canonical" href="https://cryptora.tech/nft-marketplace-development" />
        <meta property="og:title" content="NFT Marketplace Development Company - Cryptora" />
        <meta property="og:url" content="https://cryptora.tech/nft-marketplace-development" />
        <meta property="og:description" content="Start your own NFT marketplace for selling digital assets. As an NFT marketplace development company, we are experts in developing solutions." />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://www.blockchainx.tech/nft-marketplace-development/" />
        <meta name="twitter:title" content="NFT Marketplace Development Company - Cryptora" />
        <meta name="twitter:description" content="Start your own NFT marketplace for selling digital assets. As an NFT marketplace development company, we are experts in developing solutions." />


      </Helmet>

      <div id="nftbody">
        {/* <TopNavbar /> */}
        {/* nftsec1 */}
        <div className='icosec1main' >

          <video autoPlay playsInline loop muted className='icovideo'>
            <source src={Waves} type='video/mp4' />

          </video>
          <div className='overlay01'></div>
          <div id="icosec1" className=' container'>

            <div id="nftleft">

              <div>
                <div className="stack" style={{ " --stacks": 3 }} >
                  <span className='stack0'>NFT MARKETPLACE</span>
                  <span className='stack1' >NFT MARKETPLACE</span>
                  <span className='stack2' >NFT MARKETPLACE</span>
                </div>
              </div>
              <p className="nfthead">DEVELOPMENT</p>
              <p className='nftpara' style={{ color: "#d0cbcb", zIndex: 1 }} >{data.para1}</p>
              <br />
              <div className='nftbutton'>
                <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton' id='btn1'>
                  {data.button1}
                </a>
                <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton' id='btn1'>
                  {data.button2}
                </a>

              </div>
            </div>
            <div id="nftright">

            </div>
          </div>

        </div>

        {/* nftsec2 */}
        <div id='nftsec2' className="container">
          <div id="nftleft">
            <p className='nftsmall'>{data.small2}</p>
            <p className='nftheading'>{data.heading2}</p>
            <p className='nftparagraph'>{data.paragraph2}</p>
            <br />
            <div className='nftbutton'>
              <a href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                Talk to Expert
              </a>


            </div>
          </div>
          <div id="nftright2">
            <img src="./NFTDev/nftfront.png" style={{ width: "70%", height: "70%" }} alt="I am Just comming ^_^" />
          </div>
        </div>

        {/* nftsec3 */}
        <div id="s5main" className='container'>
          <p className='s5small'>{data.small3}</p>
          <p className='nftheading'>{data.heading3}</p>
          <p className='nftparagraph'>
            {data.paragraph3}</p>
        </div>
        <div id='nftsec3'>
          <div className="nftcard">
            <div className="nftcontent">
              <img src='/NFTDev/nftc1.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading1}
              </p><p className="para">{data.cardparagraph1}</p>

            </div>
          </div>
          <div className="nftcard">
            <div className="nftcontent">
              <img src='/NFTDev/nftc2.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading2}
              </p><p className="para">
                {data.cardparagraph2}       </p>

            </div>
          </div>
          <div className="nftcard">
            <div className="nftcontent">
              <img src='/NFTDev/nftc5.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading5}
              </p><p className="para">
                {data.cardparagraph5}
              </p>

            </div>
          </div>

          <div className="nftcard">
            <div className="nftcontent">
              <img src='/NFTDev/nftc4.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading4}
              </p><p className="para">
                {data.cardparagraph4}
              </p>

            </div>
          </div>
          <div className="nftcard">
            <div className="nftcontent">
              <img src='/NFTDev/nftc3.png' style={{ width: 40, height: 40 }} />
              <p className="heading">{data.cardheading3}
              </p><p className="para">
                {data.cardparagraph3}
              </p>

            </div>
          </div>
          <div className="nftcard">
            <div className="nftcontent">
              <img src='/NFTDev/nftc6.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading6}
              </p><p className="para">
                {data.cardparagraph6}
              </p>

            </div>
          </div>


        </div>

        {/* nftsec4 */}
        <div id='nftsec2' className="container">
          <div id="nftleft">
            <p className='nftsmall'>{data.small4} </p>
            <p className='nftheading'>{data.heading4}</p>
            <p className='nftparagraph'>{data.paragraph4}</p>
            <br />
            <div className='nftbutton'>
              <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                Talk to Expert
              </a>


            </div>
          </div>
          <div id="nftright2">
            <video className='nftvideo2' playsInline autoPlay loop muted src={video2} >

            </video>

          </div>
        </div>

        {/* nftsec5 */}
        <div id="s5main" className='container'>
          <p className='s5small'>{data.small5} </p>
          <p className='nftheading'>{data.heading5}</p>
          <p className='nftparagraph'>
            {data.paragraph5}
          </p>
        </div>


        <div id='nftsec5' className="container">
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/ne.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
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
                <p className="n5logo"><img src="/NFTDev/s52.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
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
                <p className="n5logo"><img src="/NFTDev/s53.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title3}</div>
                <div className="n5hover_content">
                  <p>{data.content3}</p>      </div>
              </div>
            </div>
          </section>

          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/NFTDev/s54.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title4}</div>
                <div className="n5hover_content">
                  <p>{data.content4}</p>      </div>
              </div>
            </div>
          </section>
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/NFTDev/s55.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title5} </div>
                <div className="n5hover_content">
                  <p>{data.content5}</p>      </div>
              </div>
            </div>
          </section>
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/NFTDev/s56.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title6}</div>
                <div className="n5hover_content">
                  <p>{data.content6}</p>      </div>
              </div>
            </div>
          </section>
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/NFTDev/s57.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title7}</div>
                <div className="n5hover_content">
                  <p>{data.content7}</p>      </div>
              </div>
            </div>
          </section>
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/NFTDev/s58.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title8}</div>
                <div className="n5hover_content">
                  <p>{data.content8}</p>      </div>
              </div>
            </div>
          </section>
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/NFTDev/s59.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title9}</div>
                <div className="n5hover_content">
                  <p>{data.content9}</p>      </div>
              </div>
            </div>
          </section>
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/NFTDev/s510.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title10}</div>
                <div className="n5hover_content">
                  <p>{data.content10}</p>      </div>
              </div>
            </div>
          </section>
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/NFTDev/s511.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title11}</div>
                <div className="n5hover_content">
                  <p>{data.content11}</p>      </div>
              </div>
            </div>
          </section>
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/NFTDev/s512.png" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title12}</div>
                <div className="n5hover_content">
                  <p>{data.content12}</p>      </div>
              </div>
            </div>
          </section>


        </div>
        <Footer />
      </div>
    </>
  )
}

export default NFTDev