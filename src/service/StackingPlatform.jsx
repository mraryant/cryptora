
import React from 'react'
import TopNavbar from '../component/TopNavbar'
import './Service.css'
import './Staking.css'
import Footer from  '../component/Footer'
import Waves from "../assets/staking.mp4"
const StackingPlatform = () => {

    const data= {
        // nftsec1
        "heading1":"STAKING PLATFORM DAPP DEVELOPMENT",
        "para1": "We provide mission-driven services to help you construct DeFi staking software and market-leading functionality and institutional-grade security at Cryptora. Crypto staking is a hot topic in the DeFi world right now.",
        "button1":"Expert Consultancy",
        "button2":"Download Broucher",
    
        // nftsec2
        "small2":"ABOUT",
        "heading2":"DEFI STAKING PLATFORM",
        "paragraph2":"At Cryptora Solutions, we offer mission-driven services to build DeFi staking software reinforced with market-leading features and institutional-grade security. Our blockchain engineers and subject matter experts work closely to deliver comprehensive solutions – to accelerate your digital transformation.",
     
      //  nftsec3
        "small3":"OUR FEATURES",
      "heading3":"FEATURES OF STAKING PLATFORMS",
      "paragraph3":"The features you choose for your DeFi staking model process are determined mainly by the staking model and the services you want to deliver to your users.",
       
      "cardheading1":"API Integration",
        "cardparagraph1":"To enhance efficiency and speed up the process, third-party payment gateways and wallets can be integrated with the staking platform.",
       
        "cardheading2":"Rewards Calculator",
        "cardparagraph2":"Rewards for the staking assets can be calculated on the level of inflation, the duration of staking assets, and the type of asset staked on the platform.",
        
        "cardheading3":"Exclusive Add-Ons",
        "cardparagraph3":"Integration of attractive features such as impressive icons and UI / UX to automatically create a platform and gain more attention in the NFT community.",
        
        "cardheading4":"DApp Maintenance",
        "cardparagraph4":"Our job does not end with product delivery; we offer maintenance services post delivery to ensure that your dApp works as desired and scales as you grow.",
        
        "cardheading5":"Payouts",
        "cardparagraph5":"It gives a clear picture of how they will receive their share of the rewards to the people. It also shows activity history to trace their past actions.",
        
        "cardheading6":"List Of Supported Assets",
        "cardparagraph6":"Protocols, and firewalls withstand any security breaches. Security is a reassuring factor when choosing an NFT platform for staking.",
      
      // nftsec4
       "small4":"WHY CHOOSE US",
       "heading4":"WORLD-CLASS SOLUTIONS TO CREATE DEFI EXCHANGE",
       "paragraph4":"Cryptrora's technological skills, extensive blockchain understanding, and depth of experience uniquely qualify us to be your go-to DeFi exchange building firm. Our well-thought-out roadmap, purpose-built architectures, end-to-end delivery, and robust network of partners enable you to get your decentralized exchange up to and to dash, giving you a competitive edge.",
    
       //s5main
       "small5":"TECHNICAL SERVICE",
      "heading5":"STAKING PLATFORM DEVELOPMENT",
      "paragraph5":"When planning to develop DeFi staking platform, you can choose from the following to offer DeFi services.",
       
    
      //nftsec5
      "title1":"Meaningful Outcomes",
      "content1":"We ensure that your investments provide genuine, meaningful, and concrete results.",
    
      "title2":"Rapid Development",
      "content2":"We deliver customized products suited to your target audience.",
    
      "title3":"Complete Support",
      "content3":"We provide extensive post-delivery services so that you can focus on your growth.",
    
      }
  return (
   <>
   <div id="stakingbody">
      <TopNavbar/>

        <div className='stakingsec1main' >
        <video  autoPlay  muted className='stakingvideo'>
            <source src={Waves} type='video/mp4' />
            
    </video>
    <div className='overlay01'></div>
           <div id="stakingsec1" className=' container '>
          
           <div id="stakingleft">
                <p className='stakinghead'>{data.heading1}</p>
                <p className='stakingpara'>{data.para1}</p>
                <br />
                <div className='stakingbutton'>
<button className='dexbutton'>
{data.button1}
</button>
<button className='dexbutton'>
{data.button2}
</button>

</div>
            </div>
            <div id="stakingright">
                <div>
                
                
                </div>
            </div>
           </div>
        </div>

        
        <div id='stakingsec2' className="container">
            <div id="stakingleft">
            <p className='stakingsmall'>{data.small2}</p>
                <p className='stakingheading'>{data.heading2}</p>
                <p className='stakingparagraph'>{data.paragraph2}</p>
                <br />
                <div className='stakingbutton'>
<button className='dexbutton'>
Talk to Expert
</button>


</div>
            </div>
            <div id="stakingright">
                <div>
               <img src="/public/Stacking/sp1.png" style={{width:"100%", height:"100%"}}  alt="" />
               
                
                </div>
            </div>
        </div>
        <div id="s5main" className='container'>
            <p className='s5small'>{data.small3}</p>
                <p className='stakingheading'>{data.heading3}</p>
                <p className='stakingparagraph'>
{data.paragraph3}</p>    
            </div>
        <div id='stakingsec3'>
        <div class="stakingcard">
  <div class="stakingcontent">
  <img src='/public/Stacking/sp1.png' style={{width:50, height:50}}/>
    <p class="heading">{data.cardheading1}
    </p><p class="para">{data.cardparagraph1}</p>
   
  </div>
</div>
<div class="stakingcard">
  <div class="stakingcontent">
  <img src='/public/Stacking/sp2.png' style={{width:50, height:50}}/>
    <p class="heading">{data.cardheading2}
    </p><p class="para">
{data.cardparagraph2}       </p>
    
  </div>
</div>
<div class="stakingcard">
  <div class="stakingcontent">
  <img src='/public/Stacking/sp3.png' style={{width:50, height:50}}/>
    <p class="heading">{data.cardheading3}
    </p><p class="para">
{data.cardparagraph3}
     </p>
    
  </div>
</div>
<div class="stakingcard">
  <div class="stakingcontent">
  <img src='/public/Stacking/sp4.png' style={{width:50, height:50}}/>
    <p class="heading">{data.cardheading4}
    </p><p class="para">
{data.cardparagraph4}
    </p>
    
  </div>
</div>
<div class="stakingcard">
  <div class="stakingcontent">
  <img src='/public/Stacking/sp5.png' style={{width:50, height:50}}/>
    <p class="heading">{data.cardheading5}
    </p><p class="para">
{data.cardparagraph5}
    </p>
    
  </div>
</div>
<div class="stakingcard">
  <div class="stakingcontent">
  <img src='/public/Stacking/sp6.png' style={{width:50, height:50}}/>
    <p class="heading">{data.cardheading6}
    </p><p class="para">
{data.cardparagraph6}
    </p>
    
  </div>
</div>


        </div>
        <div id='stakingsec2' className="container">
            <div id="stakingleft">
            <p className='stakingsmall'>{data.small4} </p>
                <p className='stakingheading'>{data.heading4}</p>
                <p className='stakingparagraph'>{data.paragraph4}</p>
                <br />
                <div className='stakingbutton'>
<button className='dexbutton'>
Talk to Expert
</button>


</div>
            </div>
            <div id="stakingright">
                <div>
                <img src="/public/Decentralized/deimg2.png" style={{width:"100%", height:"100%"}}  alt="" />
                
                </div>
            </div>
        </div>
       
        <div id="s5main" className='container'>
            <p className='s5small'>{data.small5} </p>
                <p className='stakingheading'>{data.heading5}</p>
                <p className='stakingparagraph'>
                {data.paragraph5}
</p>    
            </div>
        <div id='stakingsec5' className="container">
        <section class="n5container">
  <div class="n5card">
    <div class="n5content">
    <p class="n5logo"><img src="/public/Stacking/sp11.png" alt=""  style={{width:50}}/></p>
      <div class="n5h6">{data.title1}</div>
      <div class="n5hover_content">
        <p> {data.content1}</p>
      </div>
    </div>
  </div>       
</section>
<section class="n5container">
  <div class="n5card">
    <div class="n5content">
    <p class="n5logo"><img src="/public/Stacking/sp12.png" alt=""  style={{width:50}}/></p>
      <div class="n5h6">{data.title2}</div>
      <div class="n5hover_content">
        <p>{data.content2}</p>
      </div>
    </div>
  </div>       
</section>
<section class="n5container">
  <div class="n5card">
    <div class="n5content">
    <p class="n5logo"><img src="/public/Stacking/sp13.png" alt=""  style={{width:50}}/></p>
      <div class="n5h6">{data.title3}</div>
      <div class="n5hover_content">
      <p>{data.content3}</p>      </div>
    </div>
  </div>       
</section>





        </div>
       <Footer />
        </div>
   </>
  )
}

export default StackingPlatform