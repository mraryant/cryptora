 
import './ICO.css'
 
import './Service.css'
import Footer from '../component/Footer'
const Waves = 'https://res.cloudinary.com/dyqkppjr1/video/upload/v1707474661/Cryptora%20Videos/ICO.mp4'
import icoimg1 from '../../public/ICO/icoimg1.png'
import icoimg2 from '../../public/ICO/icoimg2.png'
import { Helmet } from 'react-helmet'

const ICO = () => {
  const data = {
    // nftsec1
    "heading1": "ICO MARKETING SERVICES",
    "para1": "Cryptora is an Initial Coin Offering marketing company. Expands your market reach and reputation by providing best-in-class ICO Marketing Services and focused ICO campaigns.",
    "button1": "Expert Consultancy",
    "button2": "Download Broucher",

    // nftsec2
    "small2": "What is ICO?",
    "heading2": "Initial Coin Offering",
    "paragraph2": "It is a fundraising event in which a company offers a new cryptocurrency. In exchange for their financial contributions, investors obtain Bitcoin. Interested investors can purchase a new cryptocurrency token produced by the company through an initial coin offering. This token may be helpful concerning the company's product or service, or it may simply represent a stake in the company or project.",

    //  nftsec3
    "small3": "OUR SERVICES",
    "heading3": "ICO MARKETING SERVICES",
    "paragraph3": "Our ICO Marketing services suit covers a range of services including the following ones",

    "cardheading1": "ICO Development",
    "cardparagraph1": "Creating an attractive, user-friendly and content-rich website for your ICO is the first step to bring and retain investors.",

    "cardheading2": "Market Research",
    "cardparagraph2": "We will build a powerful ICO marketing strategy based on in-depth research of the market, target audience and competitors.",

    "cardheading3": "ICO Listing",
    "cardparagraph3": "Helping your ICO connect with a large number of potential investors by listing it on all the popular ICO listing sites.",

    "cardheading4": "Social Media Marketing",
    "cardparagraph4": "Creating and promoting ICO profiles on all the leading social media platforms to boost the project visibility, reach.",

    "cardheading5": "Press Release",
    "cardparagraph5": "Improving the reach and credibility of your ICO with strategic press releases on authority crypto sites in your niche.",

    "cardheading6": "Email Marketing",
    "cardparagraph6": "Using target emails and direct messaging to tell investors about your project, make them check it out and even invest in it.",


    "cardheading7": "Influencer Marketing",
    "cardparagraph7": "Reaching out to influencers in the ICO industry to ask them to talk about your project and help build a good repo among the investors.",


    "cardheading8": "SEO",
    "cardparagraph8": "Using white-hat SEO techniques to gradually improve the off-page reputation of the ICO and increase the search engine rankings.",


    "cardheading9": "Community Management",
    "cardparagraph9": "Writing and talking about your ICO and project on popular crypto communities to build interest among the existing platform users.",


    "cardheading10": "Content Development",
    "cardparagraph10": "Using the power of relevant and high-quality content (blogs, articles, videos, etc.) to spread the ICO across the internet.",


    "cardheading11": "Airdrop, Bounty, Referral",
    "cardparagraph11": "Free token distribution campaigns and programs to raise awareness among the community and build a strong base for your ICO.",


    "cardheading12": "Pay Per Click",
    "cardparagraph12": "We may also use paid marketing strategies such as Pay-per-click, as and when needed, to acquire more audience quickly for the ICO.",

    // nftsec4
    "small4": "MARKETING",
    "heading4": "ICO MARKETING COMPANY",
    "paragraph4": "The initial coin offering has established itself as the go-to approach for any new endeavor in the current corporate environment. It's a fantastic opportunity for aspiring entrepreneurs to get their business started. At Cryptora, we recognize that initial coin offerings might be a perplexing idea for novices to the market. We assist companies worldwide to be incredibly successful with their ICOS because of our considerable knowledge in the industry and a streamlined marketing approach.",

    //s5main
    "small5": "FEATURES",
    "heading5": "WHY CHOOSE CRYPTORA FOR ICO MARKETING",
    "paragraph5": "Cryptora is a cryptocurrency and blockchain technology Pioneer.",


    //nftsec5
    "title1": "Reliability",
    "content1": "We won’t make things too complicated for you. A simple marketing strategy that is implemented in the best way will bring 100% results.",

    "title2": "Worked With 20+ ICO Projects",
    "content2": "Having worked with multiple ICO projects in diverse industries makes us uniquely able to understand and cater to your specific ICO goals.",

    "title3": "Account Manager",
    "content3": "With Cryptora, you get a dedicated account manager who will take care of all your needs, from talking to the team to giving instructions.",

    "title4": "Experienced Team",
    "content4": "Thanks to a wonderful team of skilled and experienced ICO marketers, we continue to deliver high-quality ICO marketing services.",

    "title5": "Good Market Understanding",
    "content5": "Being in the industry for nearly 7 years, we have accumulated a great understanding of how the ICO market works and what makes a new ICO succeed.",

    "title6": "On-time Support",
    "content6": "Have a question or query, or need to consult with an expert? You can connect with us via email, Skype, phone or Whatsapp at any time.",
  }
  return (
    <>
      <Helmet>
        <title> ICO Marketing Services Company To Promote Token - Cryptora</title>

        <meta name='description' content=' Looking for an ICO Marketing Company to launch your ICO successfully? Cryptora offers an absolute ICO Marketing Service to launch ICO in the market. ' />

        <meta name="keywords" content="ICO Marketing, ICO Marketing Company, ICO Marketing Agency, ICO Marketing Services, ICO Marketing Plan, ICO Marketing Strategy" />
        <link rel="canonical" href="https://cryptora.tech/ico-marketing" />
        <meta property="og:title" content="ICO Marketing Services Company To Promote Token - Cryptora" />
        <meta property="og:url" content="https://cryptora.tech/ico-marketing" />
        <meta property="og:description" content="Looking for an ICO Marketing Company to launch your ICO successfully? Cryptora offers an absolute ICO Marketing Service to launch ICO in the market. " />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://cryptora.tech/ico-marketing" />
        <meta name="twitter:title" content="ICO Marketing Services Company To Promote Token - Cryptora" />
        <meta name="twitter:description" content="Looking For an ico marketing company to launch your sucsessfully? cryptora offers absolute service in the market." />

      </Helmet>
      {/* <TopNavbar /> */}
      <div id="icobody">

        <div className='icosec1main' >
          <video autoPlay loop muted className='icovideo'>
            <source src={Waves} type='video/mp4' />

          </video>
          <div className='overlay01'></div>
          <div id="icosec1" className=' container'>
            <div id="icoleft">
              <p className='icohead'>{data.heading1}</p>
              <p className='icopara'>{data.para1}</p>
              <br />
              <div className='icobutton'>
                <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                  {data.button1}
                </a>
                <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                  {data.button2}
                </a>

              </div>
            </div>
            <div id="ico2right">
              <div>


              </div>
            </div>
          </div>
        </div>


        <div id='icosec2' className="container">
          <div id="icoleft">
            <p className='icosmall'>{data.small2}</p>
            <p className='icoheading'>{data.heading2}</p>
            <p className='icoparagraph'>{data.paragraph2}</p>
            <br />
            <div className='icobutton'>
              <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                Talk to Expert
              </a>


            </div>
          </div>
          <div id="icoright">
            <div>
              <img src={icoimg2} style={{ width: "100%", height: "100%" }} alt="I am Just comming ^_^" />


            </div>
          </div>
        </div>
        <div id="s5main" className='container'>
          <p className='s5small'>{data.small3}</p>
          <p className='icoheading'>{data.heading3}</p>
          <p className='icoparagraph'>
            {data.paragraph3}</p>
        </div>
        <div id='icosec3'>
          <div className="icocard">
            <div className="icocontent">
              <img src='/ICO/icoc1.webp' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading1}
              </p><p className="para">{data.cardparagraph1}</p>

            </div>
          </div>
          <div className="icocard">
            <div className="icocontent">
              <img src='/ICO/icoc2.webp' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading2}
              </p><p className="para">
                {data.cardparagraph2}       </p>

            </div>
          </div>
          <div className="icocard">
            <div className="icocontent">
              <img src='/ICO/icoc3.webp' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading3}
              </p><p className="para">
                {data.cardparagraph3}
              </p>

            </div>
          </div>
          <div className="icocard">
            <div className="icocontent">
              <img src='/ICO/icoc4.webp' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading4}
              </p><p className="para">
                {data.cardparagraph4}
              </p>

            </div>
          </div>
          <div className="icocard">
            <div className="icocontent">
              <img src='/ICO/icoc9.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading9}
              </p><p className="para">
                {data.cardparagraph9}
              </p>

            </div>
          </div>
          <div className="icocard">
            <div className="icocontent">
              <img src='/ICO/icoc11.webp' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading11}
              </p><p className="para">
                {data.cardparagraph11}
              </p>

            </div>
          </div>
          <div className="icocard">
            <div className="icocontent">
              <img src='/ICO/icoc5.webp' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading5}
              </p><p className="para">
                {data.cardparagraph5}
              </p>

            </div>
          </div>
          <div className="icocard">
            <div className="icocontent">
              <img src='/ICO/icoc6.webp' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading6}
              </p><p className="para">
                {data.cardparagraph6}
              </p>

            </div>
          </div>
          <div className="icocard">
            <div className="icocontent">
              <img src='/ICO/icoc7.webp' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading7}
              </p><p className="para">
                {data.cardparagraph7}
              </p>

            </div>
          </div>
          <div className="icocard">
            <div className="icocontent">
              <img src='/ICO/icoc8.webp' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading8}
              </p><p className="para">
                {data.cardparagraph8}
              </p>

            </div>
          </div>

          <div className="icocard">
            <div className="icocontent">
              <img src='/ICO/icoc10.webp' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading10}
              </p><p className="para">
                {data.cardparagraph10}
              </p>

            </div>
          </div>

          <div className="icocard">
            <div className="icocontent">
              <img src='/ICO/icoc12.png' style={{ width: 50, height: 50 }} />
              <p className="heading">{data.cardheading12}
              </p><p className="para">
                {data.cardparagraph12}
              </p>

            </div>
          </div>


        </div>
        <div id='icosec2' className="container">
          <div id="icoleft">
            <p className='icosmall'>{data.small4} </p>
            <p className='icoheading'>{data.heading4}</p>
            <p className='icoparagraph'>{data.paragraph4}</p>
            <br />
            <div className='icobutton'>
              <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                Talk to Expert
              </a>


            </div>
          </div>
          <div id="icoright">
            <div>
              <img src={icoimg1} style={{ width: 300, height: 300 }} alt="I am Just comming ^_^" />

            </div>
          </div>
        </div>

        <div id="s5main" className='container'>
          <p className='s5small'>{data.small5} </p>
          <p className='icoheading'>{data.heading5}</p>
          <p className='icoparagraph'>
            {data.paragraph5}
          </p>
        </div>
        <div id='icosec5' className="container">
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/ICO/icop1.webp" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title1}</div>
                <div className="n5hover_content">
                  <p> {data.content1}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/ICO/icop2.webp" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title3}</div>
                <div className="n5hover_content">
                  <p>{data.content3}</p>      </div>
              </div>
            </div>
          </section>

          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/ICO/icop3.webp" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title4}</div>
                <div className="n5hover_content">
                  <p>{data.content4}</p>      </div>
              </div>
            </div>
          </section>
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/ICO/icop4.webp" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title5} </div>
                <div className="n5hover_content">
                  <p>{data.content5}</p>      </div>
              </div>
            </div>
          </section>
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/ICO/icop5.webp" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title2}</div>
                <div className="n5hover_content">
                  <p>{data.content2}</p>
                </div>
              </div>
            </div>
          </section>
          <section className="n5container">
            <div className="n5card">
              <div className="n5content">
                <p className="n5logo"><img src="/ICO/icop6.webp" alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                <div className="n5h6">{data.title6}</div>
                <div className="n5hover_content">
                  <p>{data.content6}</p>      </div>
              </div>
            </div>
          </section>



        </div>
        <Footer />
      </div>
    </>
  )
}

export default ICO