
import PropTypes from 'prop-types';


const Segment2 = (props) => {
    const { data } = props;
    return (
        <>
            <div id='cryptosec2' className="container">
                <div id="cryptoright">
                    <div className='d-flex justify-content-center' >
                        <img src={data.token1} alt="I am Just comming ^_^" style={{ width: "80%", height: "100%", }} />
                    </div>
                </div>
                <div id="cryptoleft">
                    <p className='cryptosmall'>{data.small2}</p>
                    <p className='cryptoheading'>{data.heading2}</p>
                    <p className='cryptoparagraph'>{data.paragraph2}</p>
                    <br />
                    <div className='cryptobutton'>
                        <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                            Talk to Expert
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}


Segment2.propTypes = {
    data: PropTypes.shape({
        small2: PropTypes.string.isRequired,
        heading2: PropTypes.string.isRequired,
        paragraph2: PropTypes.string.isRequired,
        token1: PropTypes.string.isRequired,
    })
}

export default Segment2