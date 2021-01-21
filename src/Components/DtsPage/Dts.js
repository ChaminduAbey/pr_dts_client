import React from 'react'
import './Dts.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Dts() {

    return (
        <>
            <div className="dts__container">

                <div className="dts__grid-item" data-aos-delay="100" data-aos="zoom-in-down">
                    <h1 className="dts__heading">What is Dts ?</h1>
                    <Carousel className="dts__carousel" interval={4000} showIndicators={false} autoPlay={true} showStatus={false}>
                        <div className="dts__carousel-item">
                            <div className="dts__desc">
                                Digital Tutorial Services (DTS) is a leading distance learning, M-learning platform facilitating Academic<br/>  and Professional courses across borders. Our vision is to be the most preferred EdTec and Distance learning platform for <br/> tutoring facilitation and to create a culture which appreciates students’ wellbeing and safety.
                            </div>
                        </div>
                        <div className="dts__carousel-item">
                            <div className="dts__desc">
                                DTS platforms were pioneered by Dayan Kiriwaththuduwa in early 2020 to facilitate Sri Lankan <br/> students to have access to tutors during COVID-19 Lock down. At present it’s one of the leading EdTech, Distance learning and M-Learning providers in Sri Lanka facilitate tutoring services.  
                            </div>
                        </div>
                        <div className="dts__carousel-item">
                            <div className="dts__desc">
                                We at DTS believes, that students should have access to academic and professional tutory sessions from well<br/> recognized tutors and coaches, 
                                local and international without a hazel, at <br/> their convenience, from any part of Sri Lanka and around the Globe. 
                            </div>
                        </div>
                        <div className="dts__carousel-item">
                            <div className="dts__desc">
                                We at DTS believe, students should have access to academic and professional tutorial sessions from well recognized tutors and coaches, local and international without a hazel and at their convenience.<br/>
                                We pay a special attention to the career progress of High school students. 
                            </div>
                        </div>
                        <div className="dts__carousel-item">
                            <div className="dts__desc">
                               Thus, we have strategic partnerships with few prestigious local private colleges offering scholarships to DTS students based on their academic performance in advance level studies.
                                We at DTS believe in creating fair value across all stakeholders, offering an enhanced value proposition to both tutors and students and to be a valued strategic partner in progress.
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className="dts__grid-item">
                    <div className="dts__sub-content" data-aos-delay="500" data-aos="zoom-in-down">Our Vision</div>
                    <div className="dts__sub-content" data-aos-delay="500" data-aos="zoom-in-down">
                        Our vision is to be the most preffered edTec and Distance learning platform <br/>for tutoring facilitation and to create a culture which appreciates students' wellbeing and safety.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dts
