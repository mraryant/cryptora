 
import PropTypes from "prop-types"

const Segment4 = (props) => {
    const {data} = props
  return (
      <>
          <div id='cryptosec2' className="container">
              <div id="cryptoleft">
                  <p className='cryptosmall'>{data.small4} </p>
                  <p className='cryptoheading'>{data.heading4}</p>
                  <p className='cryptoparagraph'>{data.paragraph4}</p>
                  <br />
                  <div className='cryptobutton'>
                      <a href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                          Talk to Expert
                      </a>


                  </div>
              </div>
              <div id="cryptoright">
                  <div>
                      <img src={data.token2} style={{ width: 300, height: 300 }} alt="I am Just comming ^_^" />

                  </div>
              </div>
          </div>

      
      </>
  )
}

Segment4.propTypes = {
    data: PropTypes.shape({
        token2:PropTypes.string.isrequired,
        small4: PropTypes.string.isRequired,
        heading4: PropTypes.string.isRequired,
        paragraph4: PropTypes.string.isRequired,
    })
}

export default Segment4