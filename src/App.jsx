import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { easeInOut, motion } from "framer-motion"

import logo from "./assets/logo/favicon.png"
import Microservice from './service/Microservice';
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
const ContactUs = lazy(() => import('./pages/ContactUs'))  ;
import Home from './pages/Home';
const Aboutus = lazy(() => import('./pages/Aboutus'));
const PRprice = lazy(() => import('./pages/PRprice'));
const NftGamming = lazy(() => import('./Components/nftInnerPages/NftGamming'));
const NftSport = lazy(() => import('./Components/nftInnerPages/NftSport'));
const SmartContractDev = lazy(() => import('./Components/coinDevInner/SmartContractDev'));
const NftBuyAndSell = lazy(() => import('./Components/nftInnerPages/NftBuyAndSell'));
const TokenomicsDesign = lazy(() => import('./Components/coinDevInner/TokenomicsDesign'));
const WhitePaperDesign = lazy(() => import('./Components/coinDevInner/WhitePaperDesign'));
const MemeTokenDev = lazy(() => import('./Components/coinDevInner/MemeTokenDev'));
const StableCoinDev = lazy(() => import('./Components/coinDevInner/StableCoinDev'));
const IcoIeoStoCoinDev = lazy(() => import('./Components/coinDevInner/IcoIeoStoCoinDev'));
const MlmDexContractDev = lazy(() => import('./Components/coinDevInner/MlmDexContractDev'));






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

            <Route path="token-development" element={<Crypto />} />
            <Route path="Smart-Contract-development" element={<SmartContractDev/>} />
            <Route path="Tokenomics-Design" element={<TokenomicsDesign/> } />
            <Route path="White-Paper-Design" element={<WhitePaperDesign/> } />
            <Route path="Meme-Token-Development" element={<MemeTokenDev/> } />
            <Route path="Stable-Coin-Development" element={<StableCoinDev/> } />
            <Route path="ICO-IEO-STO-coin-Development" element={<IcoIeoStoCoinDev/> } />
            <Route path="MLM-DEX-Contract-Development" element={<MlmDexContractDev/> } />


            <Route path="nft-marketplace-development" element={<NFTDev />} />
            <Route path="Nft-Game-Development" element={<NftGamming />} />
            <Route path="Nft-Sport-Development" element={<NftSport />} />
            <Route path="Nft-Buy-And-Sell-Platform" element={<NftBuyAndSell />} />


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


            {/* nft marckateplace */}

          </Routes>
        </Suspense>

      </BrowserRouter>
    </>
  );
};

export default App;
