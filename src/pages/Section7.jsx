// import React from 'react'
import '../styles/Section7.css'
import testi1 from "../assets/Videosa/wired-flat-268-avatar-man (1).gif"
import testi2 from "../assets/Videosa/wired-flat-268-avatar-man.gif"
import { easeInOut, motion } from "framer-motion"
// import { duration } from '@mui/material'    

const Section7 = () => {
    const testimStagger = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1,
                staggerChildren: 0.2, // Adjust the stagger delay as needed
                duration: 1,
                ease: easeInOut,

            },
        }
    }

    const childVariants = {
        hidden: { opacity: 0, y: -20, scale: 1.5 },
        visible: { opacity: 1, y: 0, scale: 1 }
    }

    return (
        <>

            <div className="s8main">
                <div className="testimonials-clean">
                    <div className="container">

                        <header className="text-center  text-white" style={{ display: 'flex', gap: "20px", justifyContent: 'center', flexDirection: 'column', paddingTop: 50 }}>
                            <p className="s2heading">Testimonials</p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                <p className="font-italic mb-1 testimonialpara" >Our customers love us! Read what they have to say below. They are just some of those who have trusted our services. Project delivered, happy customer with Cryptora Tech.</p>

                            </div>
                        </header>

                        <motion.div className="row people"
                            initial="hidden"
                            whileInView="visible"
                            transition="transition"
                            variants={testimStagger}
                        >
                            <motion.div variants={childVariants} className="col-md-6 col-lg-4 item">
                                <div className="box">
                                    <p className="description">Cryptora {"Tech's"} blockchain development services exceeded my expectations, showcasing professionalism, expertise, and commitment from consultation to implementation.</p>
                                </div>
                                <div className="author"><img className="rounded-circle" src={testi1} />
                                    <h5 className="name">JOAN STHUART ROUSSEL</h5>
                                    <p className="title"> ⭐⭐⭐⭐⭐ (5/5)</p>
                                </div>
                            </motion.div>

                            <motion.div variants={childVariants} className="col-md-6 col-lg-4 item">
                                <div className="box">
                                    <p className="description">
                                        Cryptora Tech excels with cutting-edge blockchain solutions, offering trend insights and innovative features, setting them apart in development excellence.</p>
                                </div>
                                <div className="author"><img className="rounded-circle" src={testi2} />
                                    <h5 className="name">Henry Leo</h5>
                                    <p className="title"> ⭐⭐⭐⭐⭐ (5/5)</p>
                                </div>
                            </motion.div>

                            <motion.div variants={childVariants} className="col-md-6 col-lg-4 item">
                                <div className="box">
                                    <p className="description">
                                        Cryptora {"Tech's"} team displayed outstanding technical prowess, delivering a secure, scalable blockchain solution that met all requirements, meeting deadlines without compromising quality.</p>
                                </div>
                                <div className="author"><img className="rounded-circle" src={testi1} />
                                    <h5 className="name">Weak Howard</h5>
                                    <p className="title"> ⭐⭐⭐⭐⭐ (5/5)</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* blog */}



            </div>
        </>
    )
}

export default Section7