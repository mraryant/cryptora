import PropTypes from "prop-types"

const Segment5 = (props) => {
    const { data } = props
    const { images } = props
    return (
        <>
            <div id="s5main" className='px-3   '>
                <p className='s5small'>{data.small5} </p>
                <p className='cryptoheading'>{data.heading5}</p>
                <p className='cryptoparagraph'>
                    {data.paragraph5}
                </p>
            </div>
            <div className=" d-flex justify-content-center " >

                <div id='cryptosec5' className="">
                    <section className="n5container">
                        <div className="n5card">
                            <div className="n5content">
                                <p className="n5logo"><img src={images.emg1} alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
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
                                <p className="n5logo"><img src={images.emg2} alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
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
                                <p className="n5logo"><img src={images.emg3} alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                                <div className="n5h6">{data.title3}</div>
                                <div className="n5hover_content">
                                    <p>{data.content3}</p>      </div>
                            </div>
                        </div>
                    </section>

                    <section className="n5container">
                        <div className="n5card">
                            <div className="n5content">
                                <p className="n5logo"><img src={images.emg4} alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                                <div className="n5h6">{data.title4}</div>
                                <div className="n5hover_content">
                                    <p>{data.content4}</p>      </div>
                            </div>
                        </div>
                    </section>
                    <section className="n5container">
                        <div className="n5card">
                            <div className="n5content">
                                <p className="n5logo"><img src={images.emg5} alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                                <div className="n5h6">{data.title5} </div>
                                <div className="n5hover_content">
                                    <p>{data.content5}</p>      </div>
                            </div>
                        </div>
                    </section>
                    <section className="n5container">
                        <div className="n5card">
                            <div className="n5content">
                                <p className="n5logo"><img src={images.emg6} alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                                <div className="n5h6">{data.title6}</div>
                                <div className="n5hover_content">
                                    <p>{data.content6}</p>      </div>
                            </div>
                        </div>
                    </section>



                </div>
            </div>

        </>
    )
}

Segment5.propTypes = {
    data: PropTypes.shape({
        small5: PropTypes.string.isRequired,
        heading5: PropTypes.string.isRequired,
        paragraph5: PropTypes.string.isRequired,
        title1: PropTypes.string.isRequired,
        content1: PropTypes.string.isRequired,
        title2: PropTypes.string.isRequired,
        content2: PropTypes.string.isRequired,
        title3: PropTypes.string.isRequired,
        content3: PropTypes.string.isRequired,
        title4: PropTypes.string.isRequired,
        content4: PropTypes.string.isRequired,
        title5: PropTypes.string.isRequired,
        content5: PropTypes.string.isRequired,
        title6: PropTypes.string.isRequired,
        content6: PropTypes.string.isRequired,
    }),
    images: PropTypes.shape({
        emg1: PropTypes.string.isRequired,
        emg2: PropTypes.string.isRequired,
        emg3: PropTypes.string.isRequired,
        emg4: PropTypes.string.isRequired,
        emg5: PropTypes.string.isRequired,
        emg6: PropTypes.string.isRequired
    }),
}

export default Segment5