 
import './Service.css'
import './CryptoWallet.css'
import Footer from '../component/Footer'
import cw1 from '../assets/cryptowallet/cw1.png'
import cw2 from '../assets/cryptowallet/cw2.png'
import cw3 from '../assets/cryptowallet/cw3.png'
import cw4 from '../assets/cryptowallet/cw4.png'
import cw5 from '../assets/cryptowallet/cw5.png'
import cw6 from '../assets/cryptowallet/cw6.png'
import cw7 from '../assets/cryptowallet/cw7.png'
import cw8 from '../assets/cryptowallet/cw8.png'
import cw9 from '../assets/cryptowallet/cw9.png'
const cwback = 'https://res.cloudinary.com/dyqkppjr1/video/upload/v1707476690/Cryptora%20Videos/wallet.mp4'
import cwimg from '../assets/cryptowallet/cwimg.png'



const CryptoWallet = () => {

    const data = {
        // nftsec1
        "heading1": "MULTICHAIN WALLET DEVELOPMENT",
        "para1": "Cryptora cryptocurrency wallet development services make it simple to link wallets with various trading platforms. We are always aiming for more significant goals and delivering remarkable achievements.",
        "button1": "Expert Consultancy",
        "button2": "Download Broucher",

        // nftsec2
        "small2": "ABOUT",
        "heading2": "MULTICHAIN WALLET DEVELOPMENT",
        "paragraph2": "Defi wallet ensures direct peer to peer transactions regulated by smart contracts between different parties without the intervention of any third parties. Hence, users can completely control their funds using exclusive private keys. It is immune to hacking attacks and data breaches. DeFi wallets can come in the form of web, hardware, desktop, and mobile wallets. The popular examples of Defi wallets are MetaMask, MyEtherwallet, BitGo, and Electrum. Defi wallets ensure the utmost safety of users’ funds and data through measures like two-factor authentication, multi-signature technology, and cold wallets.",

        //  nftsec3
        "small3": "TYPES OF WALLETS",
        "heading3": "OUR DEVELOPED WALLET SUPPORT",
        "paragraph3": "Users have complete control over their private keys and funds with a decentralized wallet that offers institutional-grade security and ease of use.",

        "cardheading1": "DeFi Wallet",
        "cardparagraph1": "Users have complete control over their private keys and funds with a decentralized wallet supported by institutional-grade security and ease of usage.",

        "cardheading2": "Wallet For PC",
        "cardparagraph2": "It is a very successful cryptocurrency cold storage method. Mobile and online wallets are less secure.",

        "cardheading3": "Hardware Wallet",
        "cardparagraph3": "They are more secure than online wallets and easier to use than paper wallets. They are better with forks than others.",

        "cardheading4": "Coin-Specific Wallet",
        "cardparagraph4": "The trading script provides a variety of options that can't be hacked by programmers and aren't vulnerable to cyber-attacks.",

        "cardheading5": "Centralized Wallet",
        "cardparagraph5": "Through seamless communication and persistent trade, a buyer and seller can stay in touch at all times.",

        "cardheading6": "Multi-Currency Wallet",
        "cardparagraph6": "Two-factor authentication ensures the highest level of security. It can also be linked into the wallets of users to allow for safe trade.",

        
        "cardheading7": "Mobile Wallet",
        "cardparagraph7": "We guarantee that our wallets are compatible with Android and iOS platforms as mobile trading becomes more popular",

        
        "cardheading8": "Web Wallet",
        "cardparagraph8": "With an online wallet that supports numerous currencies, special security measures, and a self-explanatory interface.",

        
        "cardheading9": "TRON Wallet",
        "cardparagraph9": "We generate customized wallets for both tiny startups and established TRON organizations to handle TRX, TRON's native currency.",

        // nftsec4
        "small4": "DEFI EXCHANGE",
        "heading4": "WORLD-CLASS SOLUTIONS TO CREATE DEFI EXCHANGE",
        "paragraph4": "Cryptrora's technological skills, extensive blockchain understanding, and depth of experience uniquely qualify us to be your go-to DeFi exchange building firm. Our well-thought-out roadmap, purpose-built architectures, end-to-end delivery, and robust network of partners enable you to get your decentralized exchange up to and to dash, giving you a competitive edge.",

        //s5main
        "small5": "TECHNICAL SERVICE",
        "heading5": "WHAT WE OFFER?",
        "paragraph5": "Our multi-functional team of blockchain developers and subject matter experts collaborate to build a world-class decentralized exchange that meets your business needs.      ",


        //nftsec5
        "title1": "Peer-to-Peer Trading with Smart contract",
        "content1": "Using a smart contract to perform a deal without an intermediary will make peer-to-peer trading easier. Make your decentralized exchange more transparent and faster.",

        "title2": "Liquidity with Automated Market Maker",
        "content2": "The automated market maker ensures liquidity on your decentralized exchange by automatically executing deals utilizing liquidity pools and replacing buyers and sellers.",

        "title3": "Institutional-grade security with Market-Leading Features",
        "content3": "Secure your DEX with bank-grade security and industry-leading security features. Provide a secure trading environment for your users.",

    }
    return (
        <>
            <div id="cwbody">
                

                <div className='cwsec1main' >
                    <video autoPlay playsInline muted className='cwvideo'>
                        <source src={cwback} type='video/mp4' />

                    </video>
                    <div className='overlay01'></div>
                    <div id="cwsec1" className=' container text-focus-in'>

                        <div id="cwleft">
                            <p className='cwhead'>{data.heading1}</p>
                            <p className='cwpara'>{data.para1}</p>
                            <br />
                            <div className='cwbutton'>
                                <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                                    {data.button1}
                                </a>
                                <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                                    {data.button2}
                                </a>

                            </div>
                        </div>
                        <div id="cwright">
                            <div>

                          
                            </div>
                        </div>
                    </div>
                </div>


                <div id='cwsec2' className="container">
                    <div id="cwleft">
                        <p className='cwsmall'>{data.small2}</p>
                        <p className='cwheading'>{data.heading2}</p>
                        <p className='cwparagraph'>{data.paragraph2}</p>
                        <br />
                        <div className='cwbutton'>
                            <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                                Talk to Expert
                            </a>


                        </div>
                    </div>
                    <div id="cwright">
                        <div className='cwrright'>
                            <img src={cwimg} style={{ width: "100%", height: "100%" }} alt="I am Just comming ^_^" />
                        </div>
                    </div>
                </div>

                <div id="s5main" className='container'>
                    <p className='s5small'>{data.small3}</p>
                    <p className='cwheading'>{data.heading3}</p>
                    <p className='cwparagraph'>
                        {data.paragraph3}</p>
                </div>


                <div id='cwsec3'>
                    <div className="cwcard">
                            
                        <div className="cwcontent">
                            
                            {/* <img src={cw1} style={{ width: 50, height: 50 }} /> */}
                            <img src={cw1} style={{ width: 50, height: 50 }} />
                            <p className="heading">{data.cardheading1}
                            </p><p className="para">{data.cardparagraph1}</p>

                        </div>
                    </div>
                    <div className="cwcard">
                        <div className="cwcontent">
                            <img src={cw2} style={{ width: 50, height: 50 }} />
                            <p className="heading">{data.cardheading2}
                            </p><p className="para">
                                {data.cardparagraph2}       </p>

                        </div>
                    </div>
                    <div className="cwcard">
                        <div className="cwcontent">
                            <img src={cw3} style={{ width: 50, height: 50 }} />
                            <p className="heading">{data.cardheading3}
                            </p><p className="para">
                                {data.cardparagraph3}
                            </p>

                        </div>
                    </div>
                    <div className="cwcard">
                        <div className="cwcontent">
                            <img src={cw4} style={{ width: 50, height: 50 }} />
                            <p className="heading">{data.cardheading4}
                            </p><p className="para">
                                {data.cardparagraph4}
                            </p>

                        </div>
                    </div>
                    <div className="cwcard">
                        <div className="cwcontent">
                            <img src={cw5} style={{ width: 50, height: 50 }} />
                            <p className="heading">{data.cardheading5}
                            </p><p className="para">
                                {data.cardparagraph5}
                            </p>

                        </div>
                    </div>
                    <div className="cwcard">
                        <div className="cwcontent">
                            <img src={cw6} style={{ width: 50, height: 50 }} />
                            <p className="heading">{data.cardheading6}
                            </p><p className="para">
                                {data.cardparagraph6}
                            </p>

                        </div>
                    </div>
                    <div className="cwcard">
                        <div className="cwcontent">
                            <img src={cw7} style={{ width: 50, height: 50 }} />
                            <p className="heading">{data.cardheading7}
                            </p><p className="para">
                                {data.cardparagraph7}
                            </p>

                        </div>
                    </div>
                    <div className="cwcard">
                        <div className="cwcontent">
                            <img src={cw8} style={{ width: 50, height: 50 }} />
                            <p className="heading">{data.cardheading8}
                            </p><p className="para">
                                {data.cardparagraph8}
                            </p>

                        </div>
                    </div>
                    <div className="cwcard">
                        <div className="cwcontent">
                            <img src={cw9} style={{ width: 50, height: 50 }} />
                            <p className="heading">{data.cardheading9}
                            </p><p className="para">
                                {data.cardparagraph9}
                            </p>

                        </div>
                    </div>
                   


                </div>
             
                <Footer />
            </div>
        </>
    )
}

export default CryptoWallet