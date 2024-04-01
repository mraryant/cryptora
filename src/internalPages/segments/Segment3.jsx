 
import  PropTypes from "prop-types"


const Segment3 = (props) => {
    const { data } = props
    const { images } = props
  return (
      <>
          <div id="s5main" className='container'>
              <p className='s5small'>{data.small3}</p>
              <p className='cryptoheading'>{data.heading3}</p>
              <p className='cryptoparagraph'>
                  {data.paragraph3}</p>
          </div>
          <div id='cryptosec3'>
              <div className="cryptocard">
                  <div className="cryptocontent">
                      <img src={images.img1} style={{ width: 50, height: 50 }} />
                      <p className="heading">{data.cardheading1}
                      </p><p className="para">{data.cardparagraph1}</p>
                  </div>
              </div>
              <div className="cryptocard">
                  <div className="cryptocontent">
                      <img src={images.img2} style={{ width: 50, height: 50 }} />
                      <p className="heading">{data.cardheading2}
                      </p><p className="para">
                          {data.cardparagraph2}       </p>

                  </div>
              </div>
              <div className="cryptocard">
                  <div className="cryptocontent">
                      <img src={images.img3} style={{ width: 50, height: 50 }} />
                      <p className="heading">{data.cardheading3}
                      </p><p className="para">
                          {data.cardparagraph3}
                      </p>

                  </div>
              </div>
              <div className="cryptocard">
                  <div className="cryptocontent">
                      <img src={images.img4} style={{ width: 50, height: 50 }} />
                      <p className="heading">{data.cardheading4}
                      </p><p className="para">
                          {data.cardparagraph4}
                      </p>

                  </div>
              </div>
              <div className="cryptocard">
                  <div className="cryptocontent">
                      <img src={images.img5} style={{ width: 50, height: 50 }} />
                      <p className="heading">{data.cardheading5}
                      </p><p className="para">
                          {data.cardparagraph5}
                      </p>

                  </div>
              </div>
              <div className="cryptocard">
                  <div className="cryptocontent">
                      <img src={images.img6} style={{ width: 50, height: 50 }} />
                      <p className="heading">{data.cardheading6}
                      </p><p className="para">
                          {data.cardparagraph6}
                      </p>

                  </div>
              </div>


          </div>
      </>
  )
}

Segment3.propTypes =  {
    data: PropTypes.shape({
        small3: PropTypes.string.isRequired,
        heading3: PropTypes.string.isRequired,
        paragraph3: PropTypes.string.isRequired,
        cardheading1: PropTypes.string.isRequired,
        cardparagraph1: PropTypes.string.isRequired,
        cardheading2: PropTypes.string.isRequired,
        cardparagraph2: PropTypes.string.isRequired,
        cardheading3: PropTypes.string.isRequired,
        cardparagraph3: PropTypes.string.isRequired,
        cardheading4: PropTypes.string.isRequired,
        cardparagraph4: PropTypes.string.isRequired,
        cardheading5: PropTypes.string.isRequired,
        cardparagraph5: PropTypes.string.isRequired,
        cardheading6: PropTypes.string.isRequired,
        cardparagraph6: PropTypes.string.isRequired,
    }),
    images: PropTypes.shape({
        img1: PropTypes.string.isRequired,
        img2: PropTypes.string.isRequired,
        img3: PropTypes.string.isRequired,
        img4: PropTypes.string.isRequired,
        img5: PropTypes.string.isRequired,
        img6: PropTypes.string.isRequired,
    })
}

export default Segment3