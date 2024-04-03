
import PropTypes from "prop-types"


const Segment3 = (props) => {
    const { data, images } = props

    return (
        <>
            <div id="s5main" className='container'>
                <p className='s5small'>{data[0].small}</p>
                <p className='cryptoheading'>{data[0].heading}</p>

                <p className='cryptoparagraph'>
                    {data[0].paragraph}</p>
            </div>

            <div id='cryptosec3'>

                {data.map((item, index) => (
                    <div key={index} className="cryptocard">
                        <div className="cryptocontent">
                            <img src={images[index]} style={{ width: 50, height: 50 }} />
                            <p className="heading">{item.cardheading}
                            </p>
                            <p className="para">{item.cardparagraph}</p>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

Segment3.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            small: PropTypes.string.isRequired,
            heading: PropTypes.string.isRequired,
            paragraph: PropTypes.string.isRequired,
            cardheading: PropTypes.string.isRequired,
            cardparagraph: PropTypes.string.isRequired
        })
    ).isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};


export default Segment3