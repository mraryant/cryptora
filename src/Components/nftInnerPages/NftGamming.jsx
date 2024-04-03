
import "../../service/Crypto.css"

// hero segment 1
import smContractHero from "/NftGameDev/nftgamebg2.png"
// segment 2
import token1 from '/NftGameDev/nftseg2.png'

//segment3   servce section images 
import img1 from '/Crypto/cryptoc1.png'
import img2 from '/Crypto/cryptoc2.png'
import img3 from '/Crypto/cryptoc3.png'
import img4 from '/Crypto/cryptoc4.png'
import img5 from '/Crypto/cryptoc5.png'
import img6 from '/Crypto/cryptoc6.png'

// segment4
import token2 from '/NftGameDev/nftseg4.png'

import Segment1 from "../innerSegments/Segment1"
import Segment2 from "../innerSegments/Segment2"
import Segment3 from "../innerSegments/Segment3"
import Segment4 from "../innerSegments/Segment4"

const NftGamming = () => {
    const data1 = {
        // segment1 
        smContractHero: smContractHero,
        "heading1": "NFT Game Development  ",
        "para1": "Experience gaming's future with cryptora.tech: premier NFT Game Development Company. Uniting blockchain tech, NFTs, rare in-game assets, and immersive gameplay for groundbreaking digital adventures.",
        "button1": "Expert Consultancy",
        "button2": "Download Broucher",

    }
    const data2 = {
        // nftsec2
        token1: token1,
        "small2": "ABOUT NFTGame Development",
        "heading2": "Exploring the Boundless World of NFT Game Development",
        "paragraph2": "NFT Game Development merges blockchain and NFTs for immersive gaming experiences, rare in-game assets, and groundbreaking digital adventures, all crafted by cryptora.tech.",


    }

    const imagesForSeg3 = {
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        img5: img5,
        img6: img6,

    };
    const data3 = {

        //  nftsec3
        "small3": "OUR SERVICES",
        "heading3": "NFT Game Development Services",
        "paragraph3": "NFT Game Development Services: Transforming gaming experiences with unique NFT integration, powered by cryptora.tech.",

        "cardheading1": "Full-Cycle NFT Game Development",
        "cardparagraph1": "At Cryptora.tech, we offer full-cycle NFT game development services, seamlessly blending blockchain technology with innovative game design, from conceptualization to marketplace integration.",

        "cardheading2": "2D/3D Art & Design",
        "cardparagraph2": "At Cryptora.tech, we pioneer captivating 2D/3D art and design services, crafting visually stunning assets and environments to elevate your project's aesthetic appeal and user experience.",

        "cardheading3": "Concept Creation",
        "cardparagraph3": "At Cryptora.tech, we excel in conceptual creation, crafting immersive themes, storylines, and game mechanics to bring your vision to life with creativity and strategy.",

        "cardheading4": "Smart Contract Development",
        "cardparagraph4": "At Cryptora.tech, we provide cutting-edge Smart Contract Development services, leveraging decentralized technology to create robust, tailored contracts that optimize and streamline your blockchain operations securely.",

        "cardheading5": "Polygon Token",
        "cardparagraph5": "Polygon token development company offers best-in-class token development service to create crypto tokens on Polygon blockchain network.",

        "cardheading6": "NFT Development",
        "cardparagraph6": "NFT Smart contract development are built around usability. Our NFT token developers ensure NFT tokens are properly created with secure functionality.",

    }

    const data4 = {
        // nftsec4
        token2: token2,
        "small4": "FEATURES",
        "heading4": "FEATURES OF TOKEN DEVELOPMENT",
        "paragraph4": "We help you launch your own NFT marketplace and attract the growing community of NFT users. NFT marketplaces built by us are feature-rich, decentralized, and facilitate tokenization of all kinds of assets, including artwork, gaming cards, software licenses, digital collectibles, and real-world assets.",

    }




    return (
        <>
            <Segment1 data={data1} />
            <Segment2 data={data2} />
            <Segment3 data={data3} images={imagesForSeg3} />
            <Segment4 data={data4} />

        </>
    )
}

export default NftGamming