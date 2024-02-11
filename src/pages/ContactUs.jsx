// import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../styles/ContactUs.css'

import cuimg from "/asset.svg"
import conbg from "/src/assets/contact-bg.jpg"
import Footer from '../component/Footer';
// import { Helmet } from 'react-helmet';


const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t0v8pce', 'template_g5zwo2h', form.current, 'CiV-Bx9xip5ib_tUA')
      .then((result) => {
        console.log(result.text);
        console.log("massage send")
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>


      <img src={conbg} id='conbg' alt="I am Just comming ^_^" />
      <div className="contactmain container">
        <div className="contactsec1">
          <div className="contactbutton">
            <p>Contact Us</p>
          </div>
          <p className='contactpara'>Have questions or want to get in touch with us?</p>
          <p>Please feel free to contact us if you have any questions, feedback, or inquiries. Our dedicated team is here to assist you and ensure that your experience with us is positive and satisfactory. You can reach out to us via the provided contact form, email, or phone number. We value your input and are committed to addressing your needs promptly. </p>
          <p>Blockchain consulting services provide expert guidance on implementing and leveraging blockchain technology specialize in NFT, web3, software development, ledger technology and app development. Thank you for choosing us and we look forward to hearing from you soon!</p>
        </div>


        <div className="contact-details">
          <p className='detail-head' style={{ fontSize: 40 }}>Contact Details</p>
          <p className='detail-para'>Get all the details here</p>
          <div className='contact-card'>
            <div className="contact1">
              <img src={cuimg} alt="I am Just comming ^_^" />
              <p className='cuhead'>Call Us</p>
              <div className='contact-no'>
                <a className='contact-number' href="tel:8871192290">+91 88174 36778</a>
                <a className='contact-number' href="tel:8871192290">+91 72239 27732</a>
              </div>
            </div>
            <div className="contact1">
              <img src={cuimg} alt="I am Just comming ^_^" />
              <p className='cuhead'>Connect Us</p>
              <div className='contact-no' style={{ flexDirection: "column" }}>


                <a className='contact-email' href="mailto:Info@digitalonebox.com">Info@digitalonebox.com</a>
                <a className='contact-email' href="mailto:Support@cryptora.tech">Support@cryptora.tech</a>
              </div>
            </div>
            <div className="contact1">
              <img src={cuimg} alt="I am Just comming ^_^" />
              <p className='cuhead'>Address</p>
              <div className='contact-no'>


                <a className='contact-number3' href="">Nagpure Bhawan, Bhatera choky near forest naka balaghat - 481001</a>
                <a className='contact-number3' href="mailto:digitalonebox.com@gmail.com">digitalonebox.com@gmail.com</a>

              </div>
            </div>
          </div>
        </div>


        <div className="maincontact">
          <div className="contact-left">

            <p className='detail-head' style={{ fontSize: 40 }}>Contact Form</p>
            <p className="mcpara" style={{ fontSize: 25 }}>Fill out the form below, and one of our frendly team member will get back to you shortly.</p>
            <div className="socialm">
              <p className="socialhead">Follow us on Social Media</p>

            </div>
          </div>

          <div className="contact-right">

            <form ref={form} onSubmit={sendEmail} id='contact-form'>
              <h1>Send Us a Message</h1>
              <div id="inputs">

                <input type="text" id="name" name="from_name" placeholder='Name' required />

                <input type="email" id="email" name="from_email" placeholder='Email' required />

                <input type="tel" id="phone" placeholder='Phone' name="from_phone" required />

                <input type="text" id="budget" placeholder='Budget' name="from_budget" required />
                <textarea id="message" name="message" rows="5" placeholder='Message' required></textarea>
              </div>
              <button className=' btn btn-dark d-flex justify-content-center align-items-center  ' style={{ height: 50 }} type="submit">Submit</button>
            </form>

          </div>

        </div>



      </div>
      <Footer />
    </>
  )
}

export default ContactUs