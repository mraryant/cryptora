import "../styles/PR.css";
import { motion } from "framer-motion";
// import Marquee from "react-fast-marquee";

// import pr1 from "../assets/pr/bloomberg.png"

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
        hidden: { opacity: 0, y: 20 , scale:1.5 },
        visible: { opacity: 1, y: 0, scale:1 },
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



            {/* <Marquee direction="right" speed={100} >
                <div className="image_wrapper">

                    <img src={pr1} alt="" />

                    <img src={pr1} alt="" />
                </div>
            </Marquee> */}


        </div >
    );
};

export default PR;