import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Home from './pages/Home';
// import chat from './assets/chat.gif';
import Microservice from './service/Microservice';
import ContactUs from './pages/ContactUs';
import Aboutus from './pages/Aboutus';
import PopupX from './pages/PopupX';
import PopupX2 from './pages/PopupX2';
import Landing from './service/Landing';
import TopNavbar from './component/TopNavbar';
import Headroom from 'react-headroom';
import TermCondition from './pages/TermCondition';
import PR from './pages/PR';
// import Services from './service/Services';

// Lazy-loaded components
const Services = lazy(() => import('./service/Services'));
const Service = lazy(() => import('./pages/C-Service'));
const NFTDev = lazy(() => import('./service/NFTDev'));
const ICO = lazy(() => import('./service/ICO'));
const Blockchain = lazy(() => import('./service/Blockchain'));
const Crypto = lazy(() => import('./service/Crypto'));
const Decentralized = lazy(() => import('./service/Decentralized'));
const CryptoWallet = lazy(() => import('./service/CryptoWallet'));
const StackingPlatform = lazy(() => import('./service/StackingPlatform'));
import logo from "./assets/logo/favicon.png"
import { easeInOut, motion } from "framer-motion"
import PRprice from './pages/PRprice';
import SmartContractDev from './internalPages/coinDev/SmartContractDev';
import TokenomicsDev from './internalPages/coinDev/TokenomicsDev';
import NftGameDev from './internalPages/nftMarket/nftGameDev';
// Loading spinner component
const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <motion.img
      initial={{ scale: 1, }}
      transition={{ repeat: Infinity, ease: easeInOut, duration: 5, }}
      animate={{ scale: [1, 1.5, 1], }}
      style={{ height: "100px", width: "100px", position: "absolute" }} src={logo} alt="" />
    <div className="loader">
    </div>
  </div>
);
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes (replace with actual data fetching)
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 9000); // 3000 milliseconds (3 seconds)

    return () => clearTimeout(delay); // Cleanup the timeout when the component unmounts
  }, []);
  return (
    <>


      <Microservice />
      <BrowserRouter>
        <Headroom style={{ zIndex: 99 }}>
          <TopNavbar />
        </Headroom>
        <Suspense fallback={isLoading ? <Loader /> : null} >

          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="nft-marketplace-development" element={<NFTDev />} />
            <Route path="token-development" element={<Crypto />} />
            <Route path="ico-marketing" element={<ICO />} />
            <Route path="blockchain-consulting-service" element={<Blockchain />} />
            <Route path="decentralized-exchange-development" element={<Decentralized />} />
            <Route path="cryptowallet" element={<CryptoWallet />} />
            <Route path="staking-platform-development" element={<StackingPlatform />} />
            <Route path="Contact-us" element={<ContactUs />} />
            <Route path="c-service" element={<Service />} />
            <Route path="Aboutus" element={<Aboutus />} />
            <Route path="PopupX" element={<PopupX />} />
            <Route path="PopupX2" element={<PopupX2 />} />
            <Route path="Landing" element={<Landing />} />
            <Route path="TermCondition" element={<TermCondition />} />
            <Route path="PR" element={<PR />} />
            <Route path="PRprice" element={<PRprice />} />
            <Route path="SmartContractDev" element={<SmartContractDev />} />
            <Route path="TokenomicsDev" element={<TokenomicsDev />} />


            {/* nft marckateplace */}
            <Route path="Nft-Game-Development" element={<NftGameDev />} />



          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
