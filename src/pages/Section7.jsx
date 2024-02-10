// import React from 'react'
import '../styles/Section7.css'

const Section7 = () => {
    return (
        <>

            <div className="s8main">
                <div className="testimonials-clean">
                    <div className="container">
                        <header className="text-center  text-white" style={{ display: 'flex', gap: "20px", justifyContent: 'center', flexDirection: 'column', paddingTop: 50 }}>
                            <p className="s2heading">Testimonials</p>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                <p className="font-italic mb-1 testimonialpara" >Our customers love us! Read what they have to say below. They are just some of those who have trusted our services. Project delivered, happy customer with Cryptora Tech.</p>

                            </div>
                        </header>

                        <div className="row people">
                            <div className="col-md-6 col-lg-4 item">
                                <div className="box">
                                    <p className="description">Cryptora Tech's blockchain development services exceeded my expectations, showcasing professionalism, expertise, and commitment from consultation to implementation.</p>
                                </div>
                                <div className="author"><img className="rounded-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
                                    <h5 className="name">JOAN STHUART ROUSSEL</h5>
                                    <p className="title"> ⭐⭐⭐⭐⭐ (5/5)</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 item">
                                <div className="box">
                                    <p className="description">
                                        Cryptora Tech excels with cutting-edge blockchain solutions, offering trend insights and innovative features, setting them apart in development excellence.</p>
                                </div>
                                <div className="author"><img className="rounded-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
                                    <h5 className="name">Henry Leo</h5>
                                    <p className="title"> ⭐⭐⭐⭐⭐ (5/5)</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 item">
                                <div className="box">
                                    <p className="description">
                                        Cryptora Tech's team displayed outstanding technical prowess, delivering a secure, scalable blockchain solution that met all requirements, meeting deadlines without compromising quality.</p>
                                </div>
                                <div className="author"><img className="rounded-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
                                    <h5 className="name">Weak Howard</h5>
                                    <p className="title"> ⭐⭐⭐⭐⭐ (5/5)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* blog */}



            </div>
        </>
    )
}

export default Section7