import Segment1 from "../segments/segment1"
import "../../service/Crypto.css"

// segment 2
import token1 from '../../assets/token1.png'
import token2 from '../../assets/token2.svg'


// servce section images 
import img1 from '/Crypto/cryptoc1.png'
import img2 from '/Crypto/cryptoc2.png'
import img3 from '/Crypto/cryptoc3.png'
import img4 from '/Crypto/cryptoc4.png'
import img5 from '/Crypto/cryptoc5.png'
import img6 from '/Crypto/cryptoc6.png'

// features section images 
import emg1 from "/Crypto/crypto1.png"
import emg2 from "/Crypto/crypto2.png"
import emg3 from "/Crypto/crypto41.png"
import emg4 from "/Crypto/crypto4.png"
import emg5 from "/Crypto/crypto5.png"
import emg6 from "/Crypto/crypto6.png"
import Footer from "../../component/Footer"
import Segment2 from "../segments/Segment2"
import Segment3 from "../segments/Segment3"
import Segment4 from "../segments/Segment4"
import Segment5 from "../segments/Segment5"

const SmartContractDev = () => {

    const imagesForSeg3 = {
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        img5: img5,
        img6: img6,

    };
    const imagesForSeg5 = {
        emg1: emg1,
        emg2: emg2,
        emg3: emg3,
        emg4: emg4,
        emg5: emg5,
        emg6: emg6,

    };

    const data1 = {
        // segment1 
        "heading1": "Smart contract development",
        "para1": "Begin your Smart Contract Development journey! Master Ethereum, Solidity, and Truffle to create secure, decentralized applications. Learn data structures, payment handling, and testing techniques. Build the future now!",
        "button1": "Expert Consultancy",
        "button2": "Download Broucher",

    }
    const data2 = {
        // nftsec2
        token1: token1,
        "small2": "TOP FEATURES",
        "heading2": "What We Provide For Your Successful Business",
        "paragraph2": "Cryptora's real-world expertise allows us to provide our clients with comprehensive token production tools across industry hosts. Here are the features of Smart contract development.",


    }
    const data3 = {



        //  nftsec3
        "small3": "OUR SERVICES",
        "heading3": "Smart contract development",
        "paragraph3": "Cryptora, the premier Token Development Company, creates Tokens on the Ethereum, Tron, and Ripple frameworks for players looking for Tokens for efficient digital asset management",

        "cardheading1": "Ethereum Token",
        "cardparagraph1": "The Smart contract development aid in the development of Ethereum tokens. ERC20 , ERC777, ERC721, ERC827, ERC223, and the ERC1155 are some of the Ethereum Tokens.",

        "cardheading2": "Tron Token",
        "cardparagraph2": "The Tron Tokens can be created using the Token Development process. It creates DeFi tokens that execute quality of service across the Tron Blockchain network architecture.",

        "cardheading3": "BEP Token",
        "cardparagraph3": "The BEP20 Token Development process results in the design and creation of tokens. It uses BNB as their base currency and is compliant with the platforms that run on the Binance Smart Chain.",

        "cardheading4": "Solana Token",
        "cardparagraph4": "Solana Token Development Company, Developcoins pioneers in token creation services on Solana and other blockchain networks with custom smart contract.",

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
    const data5 = {
        //nftsec5
        "small5": "Features",
        "heading5": "Features of Smart Contract Development",
        "paragraph5": "Your Token will comply entirely with the concept of ERC20 and will be compatible worldwide with each ERC20 wallet. It has name, symbol, and decimals.",

        "title1": "Burnable",
        "content1": "You will be able to burn your Token. It means that by burning any of the tokens you may opt to reduce the circulating stock.",

        "title2": "Burnable",
        "content2": "You will be able to burn your Token. It means that by burning any of the tokens you may opt to reduce the circulating stock.",

        "title3": "Mintable",
        "content3": "Via minting, you will produce tokens. Only the owner of the token will mint. If you don't want to produce any more tokens, you can also disable minting.",

        "title4": "Pausable",
        "content4": "You can delay your token movement. It is useful to prohibit trading until all token transactions have been unfrozen.",

        "title5": "Access to ownership",
        "content5": "You get complete ownership over your token. The token owners also get to mint new tokens and manage them.",

        "title6": "Capped",
        "content6": "You cannot create more tokens than the token limit specified. This ensures that people don't create more than declared tokens.",

    }

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

export default SmartContractDev