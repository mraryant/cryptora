import "../../service/Crypto.css";

// hero segment 1
import smContractHero from "/NftGameDev/nftgamebg2.png";
// segment 2
import token1 from "/NftGameDev/nftseg2.png";

//segment3   servce section images
import img1 from "/Crypto/cryptoc1.png";
import img2 from "/Crypto/cryptoc2.png";
import img3 from "/Crypto/cryptoc3.png";
import img4 from "/Crypto/cryptoc4.png";
import img5 from "/Crypto/cryptoc5.png";
import img6 from "/Crypto/cryptoc6.png";
import img7 from "/Crypto/cryptoc4.png";
import img8 from "/Crypto/cryptoc5.png";
import img9 from "/Crypto/cryptoc6.png";

// segment4
import token2 from "/NftGameDev/nftseg4.png";

//segment 5  features section images
import emg1 from "/Crypto/crypto1.png";
import emg2 from "/Crypto/crypto2.png";
import emg3 from "/Crypto/crypto41.png";
import emg4 from "/Crypto/crypto4.png";
import emg5 from "/Crypto/crypto5.png";
import emg6 from "/Crypto/crypto6.png";

import Segment1 from "../innerSegments/Segment1";
import Segment2 from "../innerSegments/Segment2";
import Segment3 from "../innerSegments/Segment3";
import Segment4 from "../innerSegments/Segment4";
import Segment5 from "../innerSegments/Segment5";
import Footer from "../../component/Footer";

const NftGamming = () => {
  const data1 = {
    // segment1
    smContractHero: smContractHero, //img
    heading1: "NFT Game Development  ",
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

  const imagesForSeg3 = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
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
    {
      cardheading: "Web3 Game Development",
      cardparagraph:
        "At Cryptora.tech, we lead Web3 Game Development, merging blockchain technology with immersive gameplay to empower players with true asset ownership. Elevate your gaming with us.",
    },
    {
      cardheading: "NFT Metaverse Game Development",
      cardparagraph:
        "At Cryptora.tech, we pioneer NFT Metaverse Game Development, merging blockchain, NFTs, and immersive gameplay to redefine gaming landscapes, captivating audiences with groundbreaking experiences.",
    },
    {
      cardheading: "Support & Maintenance ",
      cardparagraph:
        "At Cryptora.tech, our Support & Maintenance services ensure sustained performance and security of your blockchain solutions, with proactive monitoring, swift issue resolution, and continuous improvement.",
    },
  ];

  const data4 = {
    // nftsec4
    token2: token2,
    small4: "Solutions",
    heading4: "Unlocking the Future: NFT Game Development Solutions",
    paragraph4:
      "Our NFT game development service pioneers the integration of Non- Fungible Tokens (NFTs) to craft immersive gaming experiences.With meticulous design and cutting - edge development, we empower game developers to seamlessly incorporate NFTs, enabling players to own and trade unique in -game assets.Join us as we redefine digital ownership and decentralized economies within gaming communities.",
  };

  const imagesForSeg5 = [emg1, emg2, emg3, emg4, emg5, emg6];
  const data5 = [
    //nftsec5

    {
      small: "Features",
      heading: "Features of NFT Game Development",
      paragraph:
        "NFT Game Development at cryptora.tech includes immersive gameplay, rare in-game assets, blockchain integration, and groundbreaking digital experiences.",

      title: "True Ownership",
      content:
        "NFTs grant true ownership of in-game assets, empowering players with control and transferability beyond game confines.",
    },

    {
      title: "Scarcity and Rarity",
      content:
        "leverage NFTs with unique attributes, limited editions, and rare characteristics to create scarcity, driving demand and value for in-game collectibles.",
    },

    {
      title: "Interoperability",
      content:
        "NFTs offer interoperability across games/platforms, allowing players to utilize owned assets in multiple games, enriching gaming experiences and enhancing virtual possessions' utility.",
    },

    {
      title: "Play-to-Earn Opportunities",
      content:
        "NFTs introduce Play-to-Earn (P2E) game mechanics, enabling players to earn valuable NFTs or cryptocurrency through gameplay, tasks, and milestones",
    },

    {
      title: "Community & Social Engagement",
      content:
        "NFT games build vibrant communities, fostering social interactions. Players trade, collaborate, compete, showcase achievements, cultivating a sense of belonging and engagement.",
    },

    {
      title: "Monetization Opportunities",
      content:
        "NFT games provide developers with monetization opportunities, including initial NFT sales, transaction fees, royalties, partnerships, and collaborations, fostering sustainable revenue streams.",
    },
  ];

  return (
    <>
      <Segment1 data={data1} />
      <Segment2 data={data2} />
      <div className="d-flex align-items-center flex-column gap-5" >

        <div className=" container d-flex flex-column justify-content-center text-center" >
          <h1 className=" " style={{ fontSize: 30, fontWeight: 800 }} >NFT Games VS Traditional Games </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur odio consequuntur porro natus odit?</p>
        </div>

        <div className=" px-3    ">
          <div className="  " style={{ maxWidth: "1000px" }}>
            <table className="table table-dark shadow-lg  " style={{ border: "2px solid #A243A1", borderRadius: "10px", overflow: "hidden" }}>
              <thead>
                <tr className="   "  >
                  <th className=" py-4 " >Aspect</th>
                  <th className=" py-4 " >NFT Games</th>
                  <th className=" py-4 ">Traditional Games</th>
                </tr>
              </thead>
              <tbody className="p-5" >
                <tr  >
                  <td className="py-3 w-25 "   >Ownership</td>
                  <td className="py-3">In-game assets are NFTs, owned by players</td>
                  <td className="py-3">In-game assets owned by the game company</td>
                </tr>
                <tr>
                  <td className="py-3">Interoperability</td>
                  <td className="py-3">Cross-game asset usage is possible</td>
                  <td className="py-3">Limited interoperability</td>
                </tr>
                <tr>
                  <td className="py-3">Economy</td>
                  <td className="py-3">Player-driven virtual economy</td>
                  <td className="py-3">Centralized game economy</td>
                </tr>
                <tr>
                  <td className="py-3">Scarcity</td>
                  <td className="py-3">Limited edition NFTs for scarcity</td>
                  <td className="py-3">Limited digital scarcity</td>
                </tr>
                <tr>
                  <td className="py-3">Monetization</td>
                  <td className="py-3">Play-to-earn models, NFT sales</td>
                  <td className="py-3">Traditional sales and subscriptions</td>
                </tr>
                <tr>
                  <td className="py-3">Decentralization</td>
                  <td className="py-3">Decentralized on blockchain technology</td>
                  <td className="py-3">Centralized servers and systems</td>
                </tr>
                <tr>
                  <td className="py-3">Community Impact</td>
                  <td className="py-3">Player influence on the {"game's"} direction</td>
                  <td className="py-3">Limited impact on development</td>
                </tr>
                <tr>
                  <td className="py-3">Provenance</td>
                  <td className="py-3">Transparent asset history on blockchain</td>
                  <td className="py-3">Proprietary game data structures</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <Segment3 data={data3} images={imagesForSeg3} />
      <Segment4 data={data4} />

      <Segment5 data={data5} images={imagesForSeg5} />
      <Footer />
    </>
  );
};

export default NftGamming;
