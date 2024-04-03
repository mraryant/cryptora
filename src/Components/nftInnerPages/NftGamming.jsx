
import "../../service/Crypto.css"

// hero segment 1
import smContractHero from "/NftGameDev/nftgamebg2.png"
// segment 2
import token1 from '/NftGameDev/nftseg2.png'

import Segment1 from "../innerSegments/Segment1"
import Segment2 from "../innerSegments/Segment2"

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
    return (
        <>
            <Segment1 data={data1} />
            <Segment2 data={data2} />
        </>
    )
}

export default NftGamming