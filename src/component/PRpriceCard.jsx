
import "../styles/PRpriceCard.css"
import PropTypes from "prop-types";

const PRpriceCard = ({ title, price, features, priceNum }) => {
    return (
        <>
            <div className="price-card"  >

                <div className="price-card-header">
                    <h3>{title}</h3>
                    <p style={{ fontSize: "30px" }}> <span style={{ fontSize: "40px" }} >{priceNum}</span>  {price}</p>
                </div>

                <div className="price-card-features">
                    <ul>
                        {features.map((feature) => (
                            <>
                                <div id="features" className="d-flex gap-2">
                                    <div style={{
                                        height: "20px",
                                        width: "25px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: "2px",
                                        borderRadius: "100%",
                                        backgroundColor: "#e7e7e7"
                                    }} >

                                        <svg style={{ color: "black" }} aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
                                        </svg>
                                    </div>
                                    <li key={feature}>{feature}</li>
                                </div>
                            </>
                        ))}
                    </ul>
                </div>

                <button type="submit" style={{ width: "60%", margin: "0 auto" }} className='s4button' id='btn1'>
                    Buy
                </button>

            </div>
        </>
    )
}
PRpriceCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    features: PropTypes.array.isRequired,
};
export default PRpriceCard