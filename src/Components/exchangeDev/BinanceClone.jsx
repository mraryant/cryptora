
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

const BinanceClone = () => {
    const data1 = {
        // segment1
        smContractHero: smContractHero,
        heading1: "Smart Contract Development  ",
        para1:
            "Experience gaming's future with cryptora.tech: premier NFT Game Development Company. Uniting blockchain tech, NFTs, rare in-game assets, and immersive gameplay for groundbreaking digital adventures.",
        button1: "Expert Consultancy",
        button2: "Download Broucher",
    };
    const data2 = {
        // nftsec2
        token1: token1,
        small2: "ABOUT NFTGame Development",
        heading2: "Exploring the Boundless World of NFT Game Development",
        paragraph2:
            "NFT Game Development merges blockchain and NFTs for immersive gaming experiences, rare in-game assets, and groundbreaking digital adventures, all crafted by cryptora.tech.",
    };

    const imagesForSeg3 = [img1, img2, img3, img4, img5, img6];
    const data3 = [
        {
            small: "OUR SERVICES",
            heading: "NFT Game Development Services",
            paragraph:
                "NFT Game Development Services: Transforming gaming experiences with unique NFT integration, powered by cryptora.tech.",

            cardheading: "Full-Cycle NFT Game Development",
            cardparagraph:
                "At Cryptora.tech, we offer full-cycle NFT game development services, seamlessly blending blockchain technology with innovative game design, from conceptualization to marketplace integration.",
        },
        {
            cardheading: "2D/3D Art & Design",
            cardparagraph:
                "At Cryptora.tech, we pioneer captivating 2D/3D art and design services, crafting visually stunning assets and environments to elevate your project's aesthetic appeal and user experience.",
        },
        {
            cardheading: "Concept Creation",
            cardparagraph:
                "At Cryptora.tech, we excel in conceptual creation, crafting immersive themes, storylines, and game mechanics to bring your vision to life with creativity and strategy.",
        },
        {
            cardheading: "Smart Contract Development",
            cardparagraph:
                "At Cryptora.tech, we provide cutting-edge Smart Contract Development services, leveraging decentralized technology to create robust, tailored contracts that optimize and streamline your blockchain operations securely.",
        },
        {
            cardheading: "Integration Services",
            cardparagraph:
                "At Cryptora.tech, we specialize in Integration Services, seamlessly connecting your business processes with blockchain technology to enhance efficiency and unlock decentralized solutions' potential.",
        },
        {
            cardheading: "Crypto Breeding",
            cardparagraph:
                "Cryptora.tech pioneers Crypto Breeding, a revolutionary concept in the blockchain ecosystem. Our platform enables the creation and breeding of unique digital assets, fostering a vibrant ecosystem of NFTs and decentralized collectibles.",
        },
    ];

    const data4 = {
        // nftsec4
        token2: token2,
        small4: "FEATURES",
        heading4: "FEATURES OF TOKEN DEVELOPMENT",
        paragraph4:
            "We help you launch your own NFT marketplace and attract the growing community of NFT users. NFT marketplaces built by us are feature-rich, decentralized, and facilitate tokenization of all kinds of assets, including artwork, gaming cards, software licenses, digital collectibles, and real-world assets.",
    };

    const imagesForSeg5 = [emg1, emg2, emg3, emg4, emg5, emg6];
    const data5 = [
        //nftsec5

        {
            small: "Features",
            heading: "Features of Smart Contract Development",
            paragraph:
                "Your Token will comply entirely with the concept of ERC20 and will be compatible worldwide with each ERC20 wallet. It has name, symbol, and decimals.",

            title: "Burnable",
            content:
                "You will be able to burn your Token. It means that by burning any of the tokens you may opt to reduce the circulating stock.",
        },

        {
            title: "Burnable",
            content:
                "You will be able to burn your Token. It means that by burning any of the tokens you may opt to reduce the circulating stock.",
        },

        {
            title: "Mintable",
            content:
                "Via minting, you will produce tokens. Only the owner of the token will mint. If you don't want to produce any more tokens, you can also disable minting.",
        },

        {
            title: "Pausable",
            content:
                "You can delay your token movement. It is useful to prohibit trading until all token transactions have been unfrozen.",
        },

        {
            title: "Access to ownership",
            content:
                "You get complete ownership over your token. The token owners also get to mint new tokens and manage them.",
        },

        {
            title: "Capped",
            content:
                "You cannot create more tokens than the token limit specified. This ensures that people don't create more than declared tokens.",
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

export default BinanceClone