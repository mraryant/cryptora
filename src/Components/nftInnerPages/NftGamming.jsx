
import "../../service/Crypto.css"
// hero segment 1
import smContractHero from "/NftGameDev/nftgamebg2.png"

import Segment1 from "../innerSegments/Segment1"

const NftGamming = () => {
    const data1 = {
        // segment1 
        smContractHero: smContractHero,
        "heading1": "NFT Game Development  ",
        "para1": "Experience gaming's future with cryptora.tech: premier NFT Game Development Company. Uniting blockchain tech, NFTs, rare in-game assets, and immersive gameplay for groundbreaking digital adventures.",
        "button1": "Expert Consultancy",
        "button2": "Download Broucher",

    }
    return (
        <>
            <Segment1 data={data1} />
        </>
    )
}

export default NftGamming