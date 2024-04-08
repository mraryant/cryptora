

import "../../service/Crypto.css"

// hero segment 1
import smContractHero from "/NftSportDev/nftsportbg.png"
// segment 2
import token1 from '/NftSportDev/nftspotseg2.png'

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
import token2 from '/NftSportDev/nftspotseg4.png'

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

const NftSport = () => {
    const data1 = {
        // segment1
        smContractHero: smContractHero,  //img
        heading1: "NFT E-Sports Marketplace Development",
        para1:
            "Cryptora.tech offers NFT E-Sports Marketplace Development services, leveraging blockchain technology for seamless trading and management of digital E-Sports assets..",
        button1: "Expert Consultancy",
        button2: "Download Broucher",
    };

    const data2 = {
        // nftsec2
        token1: token1, //img
        small2: "ABOUT NFT E-Sports Marketplace",
        heading2: "Empowering the Future of E-Sports Collectibles: NFT Marketplace Innovation",
        paragraph2:
            "Welcome to cryptora.tech where NFTs meet E-Sports collectibles. Our platform offers seamless tokenization, trading, and engagement for athletes, fans, and investors worldwide.",
    };

    const imagesForSeg3 = [img1, img2, img3, img4, img5, img6, img7, img8, img9]; //img
    const data3 = [
        {
            small: "OUR SERVICES",
            heading: "A Glance Of Tokenizable Assets In NFT For E-Sports Services",
            paragraph:
                "Tokenizable assets in NFT for E-Sports include digital trading cards, trophies, autographs, awards, and E-Sports equipment, creating unique digital collectibles with cryptora.tech.",


            cardheading: " Digital Trading Cards",
            cardparagraph:
                "Trading cards drive significant traffic to NFT E-Sports platforms, attracting collectors and investors seeking unique player cards and E-Sports accessories. Tokenizing these cards enhances their value and market appeal.",
        },
        {
            cardheading: "Accessories",
            cardparagraph:
                "Player’s accessories like T-shirts, watches, shoes, caps, glasses, etc are widely popular in the marketplace. There is a huge demand for these unique collectibles in the real-time, users try to get in off-line auctions. Once the sports accessories are digitized they become unique and constantly increase the market value.",
        },
        {
            cardheading: ".Collectibles",
            cardparagraph:
                "In sports the collectible like trophies, autographs, awards and other sports equipment are turned into unique digital assets. Tokenizing the sports collectibles into NFTs will extensively grow the NFT market with huge profits.",
        },
    ]

    const data4 = {
        // nftsec4
        token2: token2, //img
        small4: "Solutions",
        heading4: "Create NFT Sport Marketplace",
        paragraph4:
            "Customized NFT Marketplace for E-Sports, tailored to user needs. Exemplary for E-Sports collectibles, seamless user experience, promotes NFT in E-Sports securely on a robust blockchain network. Unlock growth and profits with our fantasy E-Sports NFT script.",
    };

    const imagesForSeg5 = [emg1, emg2, emg3, emg4, emg5, emg6]; //img
    const data5 = [
        //nftsec5

        {
            small: "Features",
            heading: "Features Of NFT E-Sports Marketplace",
            paragraph:
                "NFT E-Sports Marketplace Development at cryptora.tech offers tokenization of E-Sports assets, instant liquidity, investment opportunities, wide audience reach, and enhanced value for E-Sports collectibles.",
            title: "Unified",
            content:
                "NFTs are indivisible digital assets representing unique items on blockchain",
        },
        {
            title: ".Non-exchangeable",
            content:
                "NFT tokens are unique and non-exchangeable with other digital tokens",
        },
        {
            title: "Repairable",
            content:
                "All NFT transactions are stored on blockchain, ensuring data recovery.",
        },


        {
            title: "Scarcity",
            content:
                "NFTs' scarcity drives demand, making them valuable and influential",
        },


        {
            title: ".Compatible",
            content:
                "NFTs can be listed and purchased across multiple marketplaces, expanding accessibility and opportunities for buyers and sellers.",
        },


        {
            title: "Verifiable",
            content:
                ".NFT ownership details are stored on a blockchain, eliminating mediators and ensuring strict validation",
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

export default NftSport