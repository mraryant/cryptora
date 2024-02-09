import Footer from "../component/Footer"
 
import "../styles/Aboutus.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "@itseasy21/react-elastic-carousel";
import { Link } from "react-router-dom";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },

];

const Aboutus = () => {
    const data = {
        "small2": "About",
        "heading2": "Cryptora Tech",
        "paragraph2": "We provide specialized corporate and cryptographic solutions for startups and businesses that optimize workflows while providing optimum security.",

        "small3": "Crypto and Blockchain Development Company",
        "heading3": "We Make Crypto Brands Stand out.",
        "paragraph3": "We provide specialized corporate and cryptographic solutions for startups and businesses that optimize workflows while providing optimum security.",

        "smallx1": "about",
        "paragraphx1": "We at Cryptora Tech are a premier blockchain company with a team of trustworthy programmers, qualified blockchain strategists, professional consultants, and experienced creative specialists. We provide excellent service by combining a pleasing and user-friendly design with top-notch programming. We offer specific corporate and blockchain solutions for startups and organizations that streamline workflows while ensuring maximum security.",

        "smallx2": "HOW CAN WE HELP?",
        "paragraphx2": "By using exclusive in-house ideas that have been tried and refined over time, we assist blockchain brands in achieving their goals and aid in business expansion through innovative & creative approaches.",
    }
    return (
        <>
             
            <div id="ABT-hero">

                <div id='ABTsec2' className="container">
                    <div id="ABTleft">
                        <p className='ABTsmall'>{data.small2}</p>
                        <p className='ABTheading'>{data.heading2}</p>
                        <p className='ABTparagraph'>{data.paragraph2}</p>
                        <div className='ABTbutton'>
                            <Link   to='/contact-us' style={{ textDecoration: "none" }} className='dexbutton'>
                                Contact
                            </Link>



                        </div>
                    </div>
                    {/* <div id="ABTright">
                    <div className='ABTrright'>
                        <img src="/src/assets/servic-hero-right.png" style={{ width: "100%", height: "100%" }} alt="I am Just comming ^_^" />


                    </div>
                </div> */}
                </div>
            </div>

            <div id="ABT-vid">
                <div id='ABTsec3' className="container">
                    <div id="ABTright3">
                        <div className='ABTright3'>
                            <picture>
                                {/* Source for browsers that support the "srcset" attribute */}
                                <source srcSet="/src/assets/1652176147CRYPTORA CAMPAIGN POSTS (300 × 300px).gif" type="image/gif" />

                                {/* Fallback source for browsers that do not support "srcset" */}
                                <img id="ABTgif" src="/src/assets/1652176147CRYPTORA CAMPAIGN POSTS (300 × 300px).gif" alt="I am Just comming ^_^" />
                            </picture>
                        </div>
                    </div>
                    <div id="ABTleft3">
                        <p className='ABTsmall3'>{data.small3}</p>
                        <p className='ABTheading3'>{data.heading3}</p>

                        <p className='ABTsmall3'>{data.smallx1}</p>
                        <p className='ABTparagraph4'>{data.paragraphx1}</p>

                        <p className='ABTsmall3'>{data.smallx2}</p>
                        <p className='ABTparagraph4'>{data.paragraphx2}</p>

                        <div className='ABTbutton'>
                            <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                                Expert Consultantly
                            </a>
                            <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                                Download Broucher
                            </a>


                        </div>
                    </div>

                </div>

            </div>

            <div id="carousel">
                <Carousel  
                    breakPoints={breakPoints}
                >

                    <div id="cor-card">
                         
                        <h1>Yatika Tyagi</h1>
                        <h3>Essenz Founder</h3>
                        <p>Many thanks to our Blockchain Partner @Cryptora Tech for helping us to get our own a own token and achieve our hard cap. It was a pleasure working with you guys.</p>
                    </div>
                    <div id="cor-card">
                         
                        <h1>Asvin Choudhary</h1>
                        <h3>Flutter Developer</h3>
                        <p> We were delighted that working with them felt exactly like we had expected after getting to know them a little bit. </p>
                    </div>
                    
                    <div id="cor-card">
                         
                        <h1>Amrita Mishra</h1>
                        <h3>CMO, Alphabit Capital</h3>
                        <p>We had a great partnership with Cryptora Tech to getting a own NFT marketplace.Thanks for your hard work and enthusiasm. It was our pleasure to work with such professionals.</p>
                    </div>
                     

                </Carousel>
            </div>
            <Footer />
        </>
    )
}

export default Aboutus