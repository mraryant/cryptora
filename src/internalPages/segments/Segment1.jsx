

import PropTypes from 'prop-types';


const Segment1 = (props) => {
    const { data } = props;

    return (
        <>

            <div className='cryptosec1main' >
                <div className='overlay01'></div>
                <div id="cryptosec1" className=' container text-focus-in2'>

                    <div id="cryptoleft">
                        <p className='cryptohead'>{data.heading1}</p>
                        <p className='cryptopara'>{data.para1}</p>
                        <br />
                        <div className='cryptobutton'>
                            <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                                {data.button1}
                            </a>
                            <a target='blank' href='https://bit.ly/3GnnFUJ' style={{ textDecoration: "none" }} className='dexbutton'>
                                {data.button2}
                            </a>
                        </div>
                    </div>
                    <div id="blockchainright">
                        <div>
                            
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

Segment1.propTypes = {
    data: PropTypes.shape({
        heading1: PropTypes.string.isRequired,
        para1: PropTypes.string.isRequired,
        button1: PropTypes.string.isRequired,
        button2: PropTypes.string.isRequired,
       
    }).isRequired,

    
    images: PropTypes.shape({

        //services section
        img1: PropTypes.string.isRequired,
        img2: PropTypes.string.isRequired,
        img3: PropTypes.string.isRequired,
        img4: PropTypes.string.isRequired,
        img5: PropTypes.string.isRequired,
        img6: PropTypes.string.isRequired,


        //features section
        emg1: PropTypes.string.isRequired,
        emg2: PropTypes.string.isRequired,
        emg3: PropTypes.string.isRequired,
        emg4: PropTypes.string.isRequired,
        emg5: PropTypes.string.isRequired,
        emg6: PropTypes.string.isRequired,


        // Add more PropTypes as needed
    }).isRequired,
};


export default Segment1