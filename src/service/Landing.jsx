
import "../styles/Lnading.css"

import wa from "../assets/whatsapp.png"
import it from "../assets/ig.png"
import tg from "../assets/tg.png"

// import Logo from '../assets/cryptora.png'
// import cwimg2 from '../assets/cryptowallet/cwimg2.png'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

// tostify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Landing = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t0v8pce', 'template_g5zwo2h', form.current, 'CiV-Bx9xip5ib_tUA')
            .then((result) => {
                console.log(result.text);
                // Show success message
                toast.success('✅ We got it successfully!😀', {
                    position: 'top-right',
                    autoClose: 4000, // Duration for which the toast will be displayed
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                toast.error('❌ We are not connect! 😟', {
                    position: 'top-right',
                    autoClose: 4000, // Duration for which the toast will be displayed
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            });
    };
    return (
        <>
            {/* <nav style={{ backgroundColor: "black", margin:"20px 60px" }} className="">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="I am Just comming ^_^" style={{ width: "150px", height: "40px" }} />
                </a>
            </nav> */}



            <div className="maincontact">

                <div className="contact-left">
                    {/* <div className="contactbutton">
                        <p>Contact Us</p>
                    </div> */}
                    <p className='detail-head' style={{ fontSize: 50 }}>Launch Your Own Token With Our Expert Support</p>
                    <p className="mcpara" style={{ lineHeight: "25px", fontWeight: "500", fontSize: 20 }}>Embark on your token journey with our expert support. From conceptualization to execution, we guide you through the process, ensuring a successful token launch tailored to your needs. Launch confidently with our dedicated assistance.</p>
                    <div className="socialm">
                        <p className="socialhead">Follow us on Social Media</p>
                        <div className=" d-flex gap-5 mt-3 si">
                            <a href="https://bit.ly/3GnnFUJ">
                                <img src={wa} style={{ padding: "3px", backgroundColor: "white", borderRadius: 100, width: 30, height: 30 }} alt="I am Just comming ^_^" />
                            </a>
                            <a href="https://www.instagram.com/Cryptoratech/">
                                <img src={it} style={{ backgroundColor: "white", borderRadius: 50, width: 30, height: 30 }} alt="I am Just comming ^_^" />
                            </a>
                            <a href="https://t.me/Cryptoracommunity">
                                <img src={tg} style={{ backgroundColor: "white", borderRadius: 50, width: 30, height: 30 }} alt="I am Just comming ^_^" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-right">
                    <ToastContainer
                        style={{ background: 'black', color: 'white' }}
                        bodyStyle={{ fontSize: '16px', fontWeight: '800', color: "black" }}
                    />

                    <form method="post" id='contact-form' ref={form} onSubmit={sendEmail}>
                        <h1>Send Us a Message</h1>
                        <div id="inputs">

                            <input type="text" id="name" name="from_name" placeholder='Name' required />

                            <input type="email" id="email" name="from_email" placeholder='Email' required />

                            <input type="tel" id="phone" placeholder='Phone' name="from_phone" />

                            {/* <input type="text" id="budget" placeholder='Budget' name="budget" /> */}
                            <input type="text" id="budget" placeholder='Budget' name="from_budget" required />

                            <textarea id="message" name="message" rows="5" placeholder='Message' required></textarea>
                        </div>


                        <button type="submit">Submit</button>
                    </form>

                </div>

            </div>
        </>
    )
}

export default Landing