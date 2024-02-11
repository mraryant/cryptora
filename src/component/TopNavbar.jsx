
import { useState } from 'react'
import Logo from '../assets/cryptora.png'
import Button1 from './Button1'
import '../styles/TopNavbar.css'
import '../styles/NavOption.css'
import { Link } from 'react-router-dom'
import PopupX2 from "../pages/PopupX2"
import "../component/TopNavbar.css"

const pdf1 = "https://drive.google.com/file/d/18V6DuL02Jlh2QPfmOfXy8RjMKXRnE_Tz/view?usp=drive_link"
const pdf2 = "https://drive.google.com/file/d/13bVhr0Q-UCawOPJuHos2i7AsfPWI1-9-/view?usp=drive_link"

const TopNavbar = () => {
  const [visible, setvisible] = useState('false');

  const [refreshKey, setRefreshKey] = useState(0);

  const handleVisibility = (state) => {
    if (state == 'true') {
      setvisible('false');
    }
    else {
      setvisible('true')
    }
  }


  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };


  return (
    <>

      <nav className="topclass bg-black   navbar navbar-expand-lg nav" key={refreshKey}>

        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={Logo} alt="I am Just comming ^_^" style={{ width: "90%", height: "90%" }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span ><img src="/apps.png" alt="I am Just comming ^_^" /></span>
          </button>
          <div className="collapse navbar-collapse navcollapse" id="navbarSupportedContent">
            <div className="nav1 navbar-nav me-auto mb-2 mb-lg-0">

              <div className="nftdropdown">
                <Link to="/token-development" style={{ textDecoration: "none" }}>
                  <buttonb >
                    {/* CRYPTOCURRENCY */}
                    Coin Development
                  </buttonb>
                </Link>
                <div className="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent" style={{ textTransform: 'uppercase' }}>

                      <Link onClick={handleRefresh} to="/token-development">Smart Contract Development</Link>
                      <Link onClick={handleRefresh} to="/token-development">Token/Coin development</Link>
                      <Link onClick={handleRefresh} to="/token-development">White Paper Design</Link>
                      <Link onClick={handleRefresh} to="/token-development">Tokenomics Design</Link>
                      <Link onClick={handleRefresh} to="/token-development">Custom Smart Contract</Link>
                      <Link onClick={handleRefresh} to="/token-development">Meme Token Development</Link>
                      <Link onClick={handleRefresh} to="/token-development">Stable Coin Development</Link>
                      <Link onClick={handleRefresh} to="/token-development">ICO/IEO/STO coin Development</Link>
                      <Link onClick={handleRefresh} to="/token-development">MLM Dex Contract Development</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nftdropdown">
                <Link to="/nft-marketplace-development" style={{ textDecoration: "none" }}>
                  <buttonb >
                    <span style={{ textAlign: 'center' }}>NFT Marketplace</span>

                  </buttonb>
                </Link>

                <div className="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent" style={{ textTransform: 'uppercase' }}>
                      <Link onClick={handleRefresh} to="/nft-marketplace-development">NFT Marketplace Development</Link>
                      <Link onClick={handleRefresh} to="/nft-marketplace-development">NFT Game Development</Link>
                      <Link onClick={handleRefresh} to="/nft-marketplace-development">NFT Sport Platform</Link>
                      <Link onClick={handleRefresh} to="/nft-marketplace-development">NFT Buy and sell Platform</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nftdropdown">
                <Link to="/decentralized-exchange-development " style={{ textDecoration: "none" }}>
                  <buttonb >
                    {/* DEX */}
                    Exchange
                  </buttonb>
                </Link>

                <div className="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent" style={{ textTransform: 'uppercase' }}>
                      <Link onClick={handleRefresh} to="/decentralized-exchange-development "><span className="navtext">Exchange Development</span></Link>
                      <Link onClick={handleRefresh} to="/decentralized-exchange-development ">spot Trade Development</Link>
                      <Link onClick={handleRefresh} to="/decentralized-exchange-development ">P2P Development</Link>
                      <Link onClick={handleRefresh} to="/decentralized-exchange-development ">Crypto Algo Trade</Link>
                      <Link onClick={handleRefresh} to="/decentralized-exchange-development ">Binance Clone</Link>
                      <Link onClick={handleRefresh} to="/decentralized-exchange-development ">Launchpad Development</Link>
                      <Link onClick={handleRefresh} to="/decentralized-exchange-development ">Wallet Development</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nftdropdown" >
                <Link to="/ico-marketing" style={{ textDecoration: "none" }}>
                  <buttonb >
                    ICO MAKETING
                  </buttonb>
                </Link>

                <div className="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent" style={{ textTransform: 'uppercase' }}>
                      <Link onClick={handleRefresh} to="/ico-marketing">Social Media Marketing</Link>
                      <Link onClick={handleRefresh} to="/ico-marketing">Influencer Marketing</Link>
                      <Link onClick={handleRefresh} to="/ico-marketing">Listing Services</Link>
                      <Link onClick={handleRefresh} to="/ico-marketing">Email Marketing</Link>
                      <Link onClick={handleRefresh} to="/ico-marketing">Airdrop Planning</Link>
                      <Link onClick={handleRefresh} to="/ico-marketing">Community Building</Link>
                      <Link onClick={handleRefresh} to="/ico-marketing">Auditing Services</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nftdropdown"  >

                <Link to="/staking-platform-development" style={{ textDecoration: "none" }}  >
                  <buttonb >
                    {/* STACKING PLATFORM */}
                    Blockchain Solution
                  </buttonb>
                </Link>
                <div className="nftdropdown-content"   >
                  <div className="navdiv" >
                    <div className="navcontent" style={{ textTransform: 'uppercase' }}>
                      <Link onClick={handleRefresh} to="/staking-platform-development">STACKING PLATFORM</Link>
                      <Link onClick={handleRefresh} to="/decentralized-exchange-development ">DECENTRALIZED EXCHANGE </Link>
                      <Link onClick={handleRefresh} to="/cryptowallet">WALLET DEVELOPMENT </Link>
                      <Link onClick={handleRefresh} to="/blockchain-consulting-service"> blockchain-consulting-service</Link>
                      <Link onClick={handleRefresh} to="/c-service">SERVICES</Link>
                      <a onClick={handleRefresh} href="#">MLM Software</a>

                    </div>
                  </div>
                </div>
              </div>



              <div className="nftdropdown">
                <Link to="/Aboutus" style={{ textDecoration: "none" }}>
                  <buttonb >
                    {/* Blockchain */}
                    Cryptora
                  </buttonb>
                </Link>

                <div className="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent" style={{ textTransform: 'uppercase' }}>


                      <Link onClick={handleRefresh} to="/Contact-us">Contact-Us</Link>

                      <Link onClick={handleRefresh} to="/Aboutus">About Us</Link>
                      <a href={pdf1} target='blank' >Pitch Desk PDF  <i className="fa-solid fa-download"></i> </a>
                      <a href={pdf2} target='blank' >Service Catalogue PDF  <i className="fa-solid fa-download"></i>  </a>
                      <Link onClick={handleRefresh} to="/PR">PR</Link>
                      {/* <Link onClick={handleRefresh} to={pdf2}>Service Catalogue</Link> */}
                    </div>
                  </div>
                </div>
              </div>



            </div>
            <div className="nav3"  >
              <div id="div" onClick={() => handleVisibility(visible)}  >
                <Button1 />
              </div>
              <div id="popup" style={{ display: visible === 'true' ? 'block' : 'none' }} >
                <PopupX2 />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default TopNavbar