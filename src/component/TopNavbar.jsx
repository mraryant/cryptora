
import { useState } from 'react'
import Logo from '../assets/cryptora.png'
import Button1 from './Button1'
import '../styles/TopNavbar.css'
import '../styles/NavOption.css'
import { Link } from 'react-router-dom'
import PopupX2 from "../pages/PopupX2"
import "../component/TopNavbar.css"

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
          <a className="navbar-brand" href="/"><img src={Logo} alt="" style={{ width: "90%", height: "90%" }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span ><img src="/apps.png" alt="" /></span>
          </button>
          <div className="collapse navbar-collapse navcollapse" id="navbarSupportedContent">
            <div className="nav1 navbar-nav me-auto mb-2 mb-lg-0">

              <div className="nftdropdown">
                <Link to="/crypto" style={{ textDecoration: "none" }}>
                  <buttonb >
                    {/* CRYPTOCURRENCY */}
                    Coin Development
                  </buttonb>
                </Link>
                <div className="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent" style={{textTransform:'uppercase'}}>
                      
                      <Link onClick={handleRefresh} to="/crypto">Smart Contract Development</Link>
                      <Link onClick={handleRefresh} to="/crypto">Token/Coin development</Link>
                      <Link onClick={handleRefresh} to="/crypto">White Paper Design</Link>
                      <Link onClick={handleRefresh} to="/crypto">Tokenomics Design</Link>
                      <Link onClick={handleRefresh} to="/crypto">Custom Smart Contract</Link>
                      <Link onClick={handleRefresh} to="/crypto">Meme Token Development</Link>
                      <Link onClick={handleRefresh} to="/crypto">Stable Coin Development</Link>
                      <Link onClick={handleRefresh} to="/crypto">ICO/IEO/STO coin Development</Link>
                      <Link onClick={handleRefresh} to="/crypto">MLM Dex Contract Development</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nftdropdown">
                <Link to="/nft" style={{ textDecoration: "none" }}>
                  <buttonb >
                    <span style={{ textAlign: 'center' }}>NFT Marketplace</span>

                  </buttonb>
                </Link>

                <div className="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent" style={{ textTransform: 'uppercase' }}>
                      <Link onClick={handleRefresh} to="/nft">NFT Marketplace Development</Link>
                      <Link onClick={handleRefresh} to="/nft">NFT Game Developmet</Link>
                      <Link onClick={handleRefresh} to="/nft">NFT Sport Platform</Link>
                      <Link onClick={handleRefresh} to="/nft">NFT Buy and sell Platform</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nftdropdown">
                <Link to="/decentralized" style={{ textDecoration: "none" }}>
                  <buttonb >
                    {/* DEX */}
                    Exchange
                  </buttonb>
                </Link>

                <div className="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent" style={{ textTransform: 'uppercase' }}>
                      <Link onClick={handleRefresh} to="/decentralized"><span className="navtext">Exchange Development</span></Link>
                      <Link onClick={handleRefresh} to="/decentralized">spot Trade Development</Link>
                      <Link onClick={handleRefresh} to="/decentralized">P2P Development</Link>
                      <Link onClick={handleRefresh} to="/decentralized">Crypto Algo Trade</Link>
                      <Link onClick={handleRefresh} to="/decentralized">Binance Clone</Link>
                      <Link onClick={handleRefresh} to="/decentralized">Launchpad Development</Link>
                      <Link onClick={handleRefresh} to="/decentralized">Wallet Development</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nftdropdown" >
                <Link to="/ico" style={{ textDecoration: "none" }}>
                  <buttonb >
                    ICO MAKETING
                  </buttonb>
                </Link>

                <div className="nftdropdown-content">
                  <div className="navdiv">
                    <div className="navcontent" style={{ textTransform: 'uppercase' }}>
                      <Link onClick={handleRefresh} to="/ico">Social Media Marketing</Link>
                      <Link onClick={handleRefresh} to="/ico">Influencer Marketing</Link>
                      <Link onClick={handleRefresh} to="/ico">Listing Services</Link>
                      <Link onClick={handleRefresh} to="/ico">Email Marketing</Link>
                      <Link onClick={handleRefresh} to="/ico">Airdrop Planning</Link>
                      <Link onClick={handleRefresh} to="/ico">Community Building</Link>
                      <Link onClick={handleRefresh} to="/ico">Auditing Services</Link>
                    </div>
                  </div>
                </div>
              </div>
               
              <div className="nftdropdown"  >

                <Link to="/stacking" style={{ textDecoration: "none" }}  >
                  <buttonb >
                    {/* STACKING PLATFORM */}
                    Blockchain Solution
                  </buttonb>
                </Link>
                <div className="nftdropdown-content"   >
                  <div className="navdiv" >
                    <div className="navcontent" style={{ textTransform: 'uppercase' }}>
                      <Link onClick={handleRefresh} to="/stacking">STACKING PLATFORM</Link>
                      <Link onClick={handleRefresh} to="/decentralized">DECENTRALIZED EXCHANGE </Link>
                      <Link onClick={handleRefresh} to="/cryptowallet">WALLET DEVELOPMENT </Link>
                      <Link onClick={handleRefresh} to="/blockchain">BLOCKCHAIN</Link>
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
                      <Link onClick={handleRefresh} to="/contact-us">Contact-Us</Link>
                      <Link onClick={handleRefresh} to="/Aboutus">About Us</Link>
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