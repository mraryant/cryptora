import "../styles/PR.css";
import { motion } from "framer-motion";
import rocket from "../assets/Videosa/rocker pr3.jpg"

import pr1 from "../assets/pr/182315.png"
import pr2 from "../assets/pr/abc news.png"
import pr3 from "../assets/pr/blomberg.png"
import pr4 from "../assets/pr/btc.com.png"
import pr5 from "../assets/pr/cointelegraph.svg"
import pr6 from "../assets/pr/crypto Daily.png"
import pr7 from "../assets/pr/daily-herald.png"
import pr8 from "../assets/pr/Entrepreneur.png"
import pr9 from "../assets/pr/forbes-logo-40229.png"
import pr10 from "../assets/pr/googlenews.png"
import pr11 from "../assets/pr/marketwatch.png"
import pr12 from "../assets/pr/UTODAY.png"
import pr13 from "../assets/pr/BTC-Hunts.png"
import pr14 from "../assets/pr/yahoo-1-400x140.png"

const PR = () => {
    const staggerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Adjust the stagger delay as needed
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20, scale: 1.5 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <div>
            <motion.div id="pr-main">

                <motion.div
                    id="pr-head"
                    initial="hidden"
                    transition={{ ease: "easeInOut" }}
                    whileInView="visible"
                    variants={staggerVariants}
                >
                    <motion.h1 variants={childVariants}>
                        Cost Effective Online PR Campaigns
                    </motion.h1>
                    <motion.p variants={childVariants}>
                        Cryptora is a top-tier press release distribution service, offering a complete solution for creating, optimizing, targeting, and measuring content impact. With a global presence and advanced technology, we serve tens of thousands of clients worldwide. Our platform ensures your messages reach your audience effectively, making Cryptora the go-to choice for premium press release distribution.
                    </motion.p>
                    <motion.button className="s4button" variants={childVariants}>
                        GET STARTED
                    </motion.button>
                </motion.div>
            </motion.div>

            <motion.div

                id="pr-image-main">
                <img src={rocket} alt="comming..." id="pr-rocket" />
            </motion.div>

            <div className=" mt-5 gap-3 d-flex flex-column justify-content-center align-items-center ">
                <h1 className=" fs-1 fw-bolder text-center ">Our Clients Are Featured In</h1>
                <p className="w-50 text-center d-none d-md-block">Over Customers from Organization, Enterprises, Startup to individual advertisers to improve their online visibility, brand credibility, awareness, and web presence.</p>
                <p className="w-90 text-center d-md-none">Over Customers from Organization, Enterprises, Startup to individual advertisers to improve their online visibility, brand credibility, awareness, and web presence.</p>

                <div id="pr-topmedia">
                    <div className="pr-brand"><img src={pr1} alt="brand" className="brand-img" /></div>
                    <div className="pr-brand"><img src={pr2} alt="brand" className="brand-img" /></div>
                    <div className="pr-brand"><img src={pr3} alt="brand" className="brand-img" /></div>
                    <div className="pr-brand"><img src={pr4} alt="brand" className="brand-img" /></div>
                    <div className="pr-brand"><img src={pr5} alt="brand" className="brand-img" /></div>
                    <div className="pr-brand"><img src={pr6} alt="brand" className="brand-img" /></div>
                    <div className="pr-brand"><img src={pr7} alt="brand" className="brand-img" /></div>
                    <div className="pr-brand"><img src={pr8} alt="brand" className="brand-img" /></div>
                    <div className="pr-brand"><img src={pr9} alt="brand" className="brand-img" /></div>
                    <div className="pr-brand"><img src={pr10} alt="brand" className="brand-img" /></div>
                    <div className="pr-brand"><img src={pr11} alt="brand" className="brand-img" /></div>
                    <div className="pr-brand"><img src={pr12} alt="brand" className="brand-img" /></div>
                    <div className="pr-brand"><img src={pr13} alt="brand" className="brand-img" /></div>
                    <div className="pr-brand"><img src={pr14} alt="brand" className="brand-img" /></div>
                </div>
            </div>



        </div >
    );
};

export default PR;