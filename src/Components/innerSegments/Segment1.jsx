import PropTypes from "prop-types";

const Segment1 = (props) => {
    const { data } = props;

    return (
        <>
            <div
                className="  "
                style={{
                    backgroundImage: `url(${data.smContractHero})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: " center",
                }}
            >
                <div className="cryptosec1main  ">
                    <div className='overlay02'></div>
                    <div id="cryptosec1" className="  justify-content-center text-center text-focus-in2">
                        <div id="cryptoleft" className=" align-items-center " >
                            <p className="cryptohead text-shadow">{data.heading1}</p>
                            <p className="cryptopara text-shadow   ">{data.para1}</p>
                            <br />
                            <div className="cryptobutton  "  >
                                <a
                                    target="blank"
                                    href="https://bit.ly/3GnnFUJ"
                                    style={{ textDecoration: "none" }}
                                    className="dexbutton"
                                >
                                    {data.button1}
                                </a>
                                <a
                                    target="blank"
                                    href="https://bit.ly/3GnnFUJ"
                                    style={{ textDecoration: "none" }}
                                    className="dexbutton"
                                >
                                    {data.button2}
                                </a>
                            </div>
                        </div>

                        {/* <div id="blockchainright">
                            <div>

                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

Segment1.propTypes = {
    data: PropTypes.shape({
        heading1: PropTypes.string.isRequired,
        para1: PropTypes.string.isRequired,
        button1: PropTypes.string.isRequired,
        button2: PropTypes.string.isRequired,
        smContractHero: PropTypes.string.isRequired,
    }).isRequired,
};

export default Segment1;
