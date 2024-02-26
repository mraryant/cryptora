import PRpriceCard from "../component/PRpriceCard";

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam esse, saepe quod beatae, ab deleniti aliquid vitae fuga eaque est voluptatem molestias cumque odio laboriosam molestiae, similique maxime incidunt.
const PRprice = () => {
    const features = [

        "Security: Cryptography ensures secure.",
        "Anonymity: Users can make transactions.",
        "Global Accessibility: Cryptocurrencies.",
        "Limited Supply: Many cryptocurrencies.",
        "Limited Supply: Many cryptocurrencies."
    ];

    return (
        <>
            <div id="pr-price-parent" style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
                <h1 style={{ textAlign: "center", fontSize: "40px", fontWeight: "700", marginTop: "50px" }}>Packages and Pricing for PR Distribution</h1>
                <div id="pr-price-main"
                    style={{
                        // marginTop: "50px",
                        minHeight: "50vh",
                        gap: "4vmax",
                        width: "100vw",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        // overflow: "hidden",
                        padding: "0px 10px",
                    }}
                >
                    <PRpriceCard

                        title="Basic plain"
                        priceNum="$10/"
                        price="month"
                        features={features}
                    />
                    <div style={{ scale: "1.15" }}>

                        <PRpriceCard
                            title="Populer plain"
                            priceNum="$10/"
                            price="month"
                            features={features}
                        />
                    </div>
                    <PRpriceCard

                        title="Basic plain"
                        priceNum="$10/"
                        price="month"
                        features={features}
                    />
                </div>


                <div id="pr-price-main"
                    style={{
                        // marginTop: "50px",
                        minHeight: "50vh",
                        gap: "4vmax",
                        width: "100vw",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        // overflow: "hidden",
                        padding: "0px 10px",
                    }}
                >
                    <PRpriceCard

                        title="Basic plain"
                        priceNum="$10/"
                        price="month"
                        features={features}
                    />
                    <div style={{ scale: "1.15" }}>

                        <PRpriceCard
                            title="Populer plain"
                            priceNum="$10/"
                            price="month"
                            features={features}
                        />
                    </div>
                    <PRpriceCard

                        title="Basic plain"
                        priceNum="$10/"
                        price="month"
                        features={features}
                    />
                </div>

            </div>

        </>
    );
};

export default PRprice;
