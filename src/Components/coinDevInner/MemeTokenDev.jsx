


import "../../service/Crypto.css"

// hero segment 1
import smContractHero from "/CoinDev-main/smartContractDev/smContract-hero.png"
// segment 2
import token1 from '/CoinDev-main/smartContractDev/smContract-seg2.jpg'

//segment3   servce section images 
import img1 from '/Crypto/cryptoc1.png'
import img2 from '/Crypto/cryptoc2.png'
import img3 from '/Crypto/cryptoc3.png'
import img4 from '/Crypto/cryptoc4.png'
import img5 from '/Crypto/cryptoc5.png'
import img6 from '/Crypto/cryptoc6.png'
import img7 from '/Crypto/cryptoc4.png'
import img8 from '/Crypto/cryptoc5.png'
import img9 from '/Crypto/cryptoc6.png'

// segment4
import token2 from '/CoinDev-main/smartContractDev/seg4.jpg'

//segment 5  features section images  
import emg1 from "/Crypto/crypto1.png"
import emg2 from "/Crypto/crypto2.png"
import emg3 from "/Crypto/crypto41.png"
import emg4 from "/Crypto/crypto4.png"
import emg5 from "/Crypto/crypto5.png"
import emg6 from "/Crypto/crypto6.png"
 

import Segment1 from "../innerSegments/Segment1"
import Segment2 from "../innerSegments/Segment2"
import Segment3 from "../innerSegments/Segment3"
import Segment4 from "../innerSegments/Segment4"
import Segment5 from "../innerSegments/Segment5"
import Footer from "../../component/Footer"

const MemeTokenDev = () => {
  const data1 = {
    // segment1
    smContractHero: smContractHero,  //img
    heading1: "Meme Coin Development Company",
        para1:
    "New meme coins are making headlines with huge trading volumes and market capitalizations. Now is the perfect time to create your own cryptocurrency. cryptora.tech specializes in developing thriving meme-based cryptocurrencies...",
    button1: "Expert Consultancy",
    button2: "Download Broucher",
  };


  const data2 = {
    // nftsec2
    token1: token1, //img
    small2: "about",
        heading2: "What Are Meme Coins ",
        paragraph2:
      "Meme coins are digital currencies with internet culture and humor in trading. They're open-source, decentralized, and not regulated by banks or governments, offering exciting portfolio diversification.",
  };


  const imagesForSeg3 = [img1, img2, img3, img4, img5, img6, img7, img8, img9]; //img
  const data3 = [
    {
      small: "OUR SERVICES",
      heading: " Power of Memes with our  Services",
      paragraph: "As a leading Meme Coin development company, we create Meme Coins on Ethereum, Binance Smart Chain, and Polygon. Launch on decentralized exchanges. Our expert developers provide sophisticated services for customized Meme Coins quickly.",




      cardheading: "Customised tokenomics",
      cardparagraph:
        "Tailored tokenomics to fit your project's needs. Our experts craft customized token economics for optimal functionality and value, enhancing your token's performance and appeal",
    },
    {
      cardheading: "White paper drafting",
      cardparagraph:
        "We specialize in crafting comprehensive white papers that outline your project's vision, features, tokenomics, roadmap, and benefits, presenting a compelling case to investors and stakeholders..",
    },
    {
      cardheading: ".Unique meme logo designs",
      cardparagraph:
        "Our creative team designs unique meme logos that capture the essence of your project, making it stand out in the competitive market and resonate with your target audience",
    },
    {
      cardheading: ".Smart website development",
      cardparagraph:
        "We develop smart websites with intuitive designs, advanced functionalities, and user-friendly interfaces to enhance your online presence and provide an exceptional user experience.",
    },

    {
      cardheading: ".Rug proof implementation",
      cardparagraph: "We ensure rug-proof implementation in your project, using advanced security measures and auditing processes to safeguard against scams and protect investors' funds"
    },
    {
      cardheading: "Liquidity lock with AMM.",
      cardparagraph: "We provide liquidity lock services with Automated Market Maker (AMM) integration, ensuring secure and transparent trading environments for decentralized exchanges and token holders."
    }
  ];


  const data4 = {
    // nftsec4
    token2: token2, //img
    small4: "",
    heading4: "Advantages Of Meme Coin",
    paragraph4:
      "Meme coin development at Cryptora.tech offers community engagement, low entry barriers, growth potential, creative expression, and market differentiation, attracting viral adoption and investment opportunities..",

  };            

    const imagesForSeg5 = [emg1, emg2, emg3, emg4, emg5, emg6]; //img
  const data5 = [
    //nftsec5


    {
      small: "",
      heading: " Advantages Of Meme Coin Development",
      paragraph:
        "Meme coin development at Cryptora.tech offers community engagement, low entry barriers, growth potential, creative expression, and market differentiation, attracting viral adoption and investment opportunities.",
      title: "Flexibility And Creativity",
      content:
        "Developing a meme coin allows users to express creativity and customize coin features to their preferences, offering tailored solutions and fostering innovation in design.",
    },
    {
      title: ".Decentralised",
      content:
        "Meme coins being decentralized grant users more control over their finances, free from government or bank interference, enhancing autonomy and financial independence.",
    },
    {
      title: "Easy Trade",
      content:
        "Meme coins enable seamless global transactions without traditional currency systems or conversion fees, facilitating easy exchange of goods and services worldwide for anyone using the coins.",
    },

  ];

  return (
    <>
      <Segment1 data={data1} />
      <Segment2 data={data2} />
      <Segment3 data={data3} images={imagesForSeg3} />
      <Segment4 data={data4} />
      <Segment5 data={data5} images={imagesForSeg5} />
      <Footer />
    </>
  )
}

export default MemeTokenDev