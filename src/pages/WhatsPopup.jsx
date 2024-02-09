
import whatsapp from '../assets/logo/wa-logo-chat.webp'
import whatsappsend from '../assets/logo/send-button_icon-icons.com_72565.png'
import '../styles/WhatsPopup.css'
// import Motion from "@emotion/react"
import { motion } from "framer-motion"

const WhatsPopup = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    
    return (
        <>
            <motion.div
                 
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                transition={{ duration: 0.5 }}
                id="wa-popup">
                <div id="wa-head">
                    <div  >
                         <img src={whatsapp} alt="I am Just comming ^_^" style={{  width: 35, height: 35 }} />
                    </div>
                </div>
                <div id="wa-body">
                    <div style={{ margin:"20px",padding:"10px",backgroundColor: "white" , width:"180px", borderRadius:"0px 15px 15px 15px " }} id="wa-msg">
                        <h6 style={{color:"black", fontSize:"13px"}} >How can I help you? :)</h6>
                        <p style={{ fontSize: "10px",color: "#959595" }}>12:54</p>
                    </div>
                    <form id='wa-form' action="">
                        <input id='wa-input' className="form-control" type="text" placeholder="Write your massage ..." aria-label="default input example"></input>
                        <a id='wa-button' href="https://bit.ly/3GnnFUJ" target='blank' > <img style={{ height: "25px", marginLeft: "5px", width: "20px" }} src={whatsappsend} alt="I am Just comming ^_^" /> </a>
                            {/* <button id='wa-button' type='submit'> </button> */}
                        </form>
                </div>
                     
                    
            </motion.div>

            

            
       
        </>
    )
}

export default WhatsPopup