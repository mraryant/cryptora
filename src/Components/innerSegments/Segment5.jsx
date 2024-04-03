import PropTypes from "prop-types"

const Segment5 = (props) => {
    const { data, images } = props
    
    return (
        <>
            <div id="s5main" className='px-3   '>
                <p className='s5small'>{data[0].small} </p>
                <p className='cryptoheading'>{data[0].heading}</p>
                <p className='cryptoparagraph'>
                    {data[0].paragraph}
                </p>
            </div>
            <div className=" d-flex justify-content-center " >

                <div id='cryptosec5' className="">
                    {
                        data.map((item, index) => {
                            return (
                                <section key={index} className="n5container">
                                    <div className="n5card">
                                        <div className="n5content">
                                            <p className="n5logo"><img src={images[index]} alt="I am Just comming ^_^" style={{ width: 50 }} /></p>
                                            <div className="n5h6">{item.title}</div>
                                            <div className="n5hover_content">
                                                <p> {item.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )
                        })
                        }
                    
                    {/* <section className="n5container">
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
                    </section> */}



                </div>
            </div>

        </>
    )
}

Segment5.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            small: PropTypes.string.isRequired,
            heading: PropTypes.string.isRequired,
            paragraph: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ).isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default Segment5