
import '../styles/Footer.css'
import Arrow from '../assets/arre.gif'
import { Link } from 'react-router-dom'
import Logo from "../assets/cryptora.png"

import ws from "../assets/wa.png"
import x from "../assets/x.png"
import tg from "../assets/tg.png"
import ig from "../assets/ig.png"

const Footer = () => {
	return (
		<>
			<div className="fmain">
				<footer className="footer-02" >
					<div className="container" style={{ paddingTop: 73 }}>
						<div className="row justify-content-center">
							<div className="col-10 col-lg-6">
								<div className="subscribe mb-5">
									<form action="#" className="subscribe-form" >
										<div className="form-group d-flex" style={{ flexDirection: 'row', }}>
											{/* <input type="text" className="form-control rounded-left" placeholder="Enter email address" style={{ paddingLeft: 30 }} /> */}
											<Link to='/Contact-us ' className=' d-flex justify-content-center  align-items-center s4button' style={{ textDecoration: "none", color: 'black', fontWeight: 800, borderRadius: 50, width: "100%", fontSize: 12 }}>
												Contact Now <img src={Arrow} alt="I am Just comming ^_^" className='arrow' style={{ width: 25, height: 25 }} />
											</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 col-lg-5" >
								<div className="d-flex  gap-4 row">
									<div className="col-md-12 col-lg-8 mb-md-0 mb-4">
										<img style={{ marginRight: "15px" }} className="  footer-heading" src={Logo} alt="I am Just comming ^_^" />
										<p style={{ color: "rgb(204, 203, 203)" }} >We provide crypto and blockchain development company with experience in NFT marketplace development, token development, crypto wallet development.</p>

									</div>
									<div className="d-flex  gap-2 col-md-12 col-lg-8 mb-md-0 mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }}>


										<a target='blank' style={{ textAlign: 'left' }} ><p style={{ color: "rgb(204, 203, 203)" }}>Whatsapp & Call Number  (Worldwide 24*7)</p></a>
										<a target='blank'> +91 8770632170</a>
										<a target='blank'>info@digitalonebox.com</a>
									</div>
								</div>
							</div>
							<div className="col-md-8 col-lg-7">
								<div className="row">
									<div className="col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Quick Links</h2>
										<ul className="list-unstyled">

											<li><Link to="/nft-marketplace-development" style={{ textDecoration: 'none' }} className="py-1 d-block">NFT Marketplace Development</Link></li>
											<li><Link to="/token-development " style={{ textDecoration: 'none' }} className="py-1 d-block">Cryptocurrency Token Development</Link></li>
											<li><Link to="/decentralized-exchange-development " style={{ textDecoration: 'none' }} className="py-1 d-block">Decentralized Exchange</Link></li>
											<li><Link to="/ico-marketing" style={{ textDecoration: 'none' }} className="py-1 d-block">ICO Marketing</Link></li>
											{/* <li><a target='blank' href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Staking Platform DApp</a></li>
											<li><a target='blank' href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Multichain Crypto Wallet</a></li>
											<li><a target='blank' href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Blockchain Consulting</a></li>
											<li><a target='blank' href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Decentralized Applications</a></li> */}
										</ul>
									</div>
									<div className="col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">About</h2>
										<ul className="list-unstyled">
											{/* <li><a target='blank' href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Staff</a></li> */}
											{/* <li><a target='blank' href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Team</a></li> */}
											{/* <li><a target='blank' href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Careers</a></li> */}
											{/* <li><a target='blank' href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Blog</a></li> */}
											<li><Link to="/c-service" style={{ textDecoration: 'none' }} className="py-1 d-block">Services</Link></li>
											<li><Link to="/Aboutus" style={{ textDecoration: 'none' }} className="py-1 d-block">About Us</Link></li>
											<li><Link to="/Contact-us " style={{ textDecoration: 'none' }} className="py-1 d-block">Contact Us</Link></li>
											<li><Link to="/Landing" style={{ textDecoration: 'none' }} className="py-1 d-block">Landing</Link></li>
										</ul>
									</div>
									<div className="col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Privacy</h2>
										<ul className="list-unstyled">
											<li><Link to="/TermCondition" style={{ textDecoration: 'none' }} className="py-1 d-block">Terms and condition & Privacy Policy</Link></li>
											{/* <li><a target='blank' href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Privacy Policy</a></li> */}

										</ul>
									</div>
									<div className="col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Social</h2>
										<ul className="list-unstyled">
											<li><a target='blank' href="https://bit.ly/3GnnFUJ" style={{ textDecoration: 'none' }} className="py-1 d-block"> <img style={{ margin: "5px", height: "20px", width: "20px" }} src={ws} alt="I am Just comming ^_^" /> WhatsApp</a></li>
											<li><a target='blank' href="https://twitter.com/i/flow/login?redirect_after_login=%2Fcryptora_tech" style={{ textDecoration: 'none' }} className="py-1 d-block"> <img style={{ margin: "5px", backgroundColor: "white", height: "20px", width: "20px" }} src={x} alt="I am Just comming ^_^" /> Twitter-X</a></li>
											<li><a target='blank' href="https://t.me/Cryptoracommunity" style={{ textDecoration: 'none' }} className="py-1 d-block"> <img style={{ margin: "5px", height: "20px", width: "20px" }} src={ig} alt="I am Just comming ^_^" /> Instagram</a></li>
											<li><a target='blank' href="https://www.instagram.com/Cryptoratech/" style={{ textDecoration: 'none' }} className="py-1 d-block"> <img style={{ margin: "5px", height: "20px", width: "20px" }} src={tg} alt="I am Just comming ^_^" /> Telegram</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="row mt-5">
							<div className="col-md-6 col-lg-8">


							</div>

						</div>
					</div>
				</footer>
			</div>

		</>
	)
}

export default Footer