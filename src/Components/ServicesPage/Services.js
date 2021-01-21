import React, { useState } from 'react'
import './Services.css'
import services__image from '../../images/undraw_interaction_design.png'

function Services() {

    const [display1 , setdisplay1] = useState(false)
    const [display2 , setdisplay2] = useState(false)
    const [display3 , setdisplay3] = useState(false)
    const [display4 , setdisplay4] = useState(false)
    const [display5 , setdisplay5] = useState(false)
    const [display6 , setdisplay6] = useState(false)
    const [display7 , setdisplay7] = useState(false)
    const [display8 , setdisplay8] = useState(false)
    const [display9 , setdisplay9] = useState(false)
    const [display10 , setdisplay10] = useState(false)
    const [displayImage , setDisplayImage] = useState(true)

    const showImage = () => setDisplayImage(true)
    const hideImage = () => setDisplayImage(false)

    const show1 = () => setdisplay1(true)
    const hide1 = () => setdisplay1(false)
    
    const show2 = () => setdisplay2(true)
    const hide2 = () => setdisplay2(false)

    const show3 = () => setdisplay3(true)
    const hide3 = () => setdisplay3(false)

    const show4 = () => setdisplay4(true)
    const hide4 = () => setdisplay4(false)

    const show5 = () => setdisplay5(true)
    const hide5 = () => setdisplay5(false)

    const show6 = () => setdisplay6(true)
    const hide6 = () => setdisplay6(false)

    const show7 = () => setdisplay7(true)
    const hide7 = () => setdisplay7(false)

    const show8 = () => setdisplay8(true)
    const hide8 = () => setdisplay8(false)

    const show9 = () => setdisplay9(true)
    const hide9 = () => setdisplay9(false)

    const show10 = () => setdisplay10(true)
    const hide10 = () => setdisplay10(false)

    return (
        <div className="services__container">
            <div className="services__heading" data-aos="zoom-out-down">Our Services</div>
            
            <div className="grid-item">
                <div className="services__grid-item">

                    <div className="services__desc-wrapper" data-aos="zoom-out-up">
                        <div className="services__desc">

                            {display1 ? <p className="description">
                                <p className="head-1">
                                    Hybrid is the latest approach for tutoring, which is a combination of both physical and virtual education. We at DTS are committed to develop Hybrid education in Sri Lanka at the tutoring sphere as it offers scores of benefits for both students and tutors. Some of the key benefits are shown below.
                                </p>
                                <p className="description-1">
                                    1)	A student can switch between online and offline classes. <br/>
                                    2)	Access a live classroom from the comfort of your home. <br/>
                                    3)	If a lesson is missed students can catch up through VOD. <br/>
                                    4)	Lessons are live streamed with studio quality. <br/>
                                    5)	Student Access to air-conditioned hybrid studios. <br/>
                                </p>
                            </p> : ''}

                            {display2 ? <p>
                                <p className="head-1">
                                    DTS have strategic partnership with scores of tuition institutes in various parts of the isle. Thus, the student who wants to attend a tutorial session of a preferred tutor can go to one of the   teleport centres and follow the lesson from a physical classroom, with lesson being projected on a screen. However, to obtain the service of a teleport centre minimum numbers of students are required.
                                </p>
                            </p> : ''}

                            {display3 ? <p>
                                <p className="head-1">
                                    The experts predict that with fast evolving technology the future of education is distance/online learning. We at DTS provide online learning facility through our prime tuition platform. Distance/Online learning provides scores of benefits, such as:
                                </p>
                                <p className="description-3">
                                    1) You can attend a virtual classroom from the comfort of your home<br/>
                                    2) You can save time, money and energy<br/>
                                    3) Parents don’t have to worry about a Childs safety in attending physical classes.
                                </p>
                            </p> : ''}

                            {display4 ? <p>
                                <p className="head-1">
                                    At DTS we have our own team of digital marketers and content developers. Thus, we can provide the support services to promote our tutors through our digital platforms such as DTS website, YouTube, Facebook, and Instagram and by developing the content for the online posters and YouTube videos.
                                </p>
                            </p> : ''}

                            {display5 ? <p>
                                <p className="head-1">
                                    Video on demand is one of our high end e-portfolios we make available for students. Tutors have the luxury to conduct their lesson in our hi-end studios for which we can provide live recording through advance camera settings. The recorded lessons would be edited by our team and would make it available for the students.
                                </p>
                                <p className="description-2">
                                    1)	If a student miss a class still can follow it on VOD once it’s available in the active lessons. <br/>
                                    2)	Students have access to digital library of the active lessons they have activated. <br/>
                                    3)	If a student not enrolled for a particular class, still have the luxury to pay VOD and watch.
                                </p>
                            </p> : ''}

                            {display6 ? <p>
                                <p className="head-1">
                                DTS have strategic partnerships with higher education institutes. Our goal is to be mutually be benefited by these strategic alliances. The benefit for the students are if they failed to make it to a local university after completing GCE A/L, based on their performance they can receive a scholarship with one of our strategic partner higher education institute (Private).
                                </p>
                            </p> : ''}

                            {display7 ? <p>
                                <p className="head-1">
                                At DTS students have the option of paying their class fees via an online payment gateway with a debit/credit card, easy cash, Frimi etc. Also they have the option of making a bank deposit or account transfer, which would be verified and updated by our payment verification team upon the submission of a copy of the deposit slip.  Furthermore, students have the option of settling their class fees at the Hybrid to teleport centre in Nawala Nugegoda.
                                </p>
                            </p> : ''}

                            {display8 ? <p>
                                <p className="head-1">
                                    This speciality card. CHORDS in partnership with DFCC bank have introduced a speciality student card which is also a DFCC debit card. Any student who registers with DTS would receive this unique ID.
                                </p>
                            </p> : ''}

                            {display9 ? <p>
                                <p className="head-1">
                                    The student coordination team is responsible for attending to student quires. They can be reached on our fixed line @0117109509 from morning 6:00 to 9:30pm from Monday to Sunday, or chat with an agent via whatsapp chat box. 
                                </p>
                            </p> : ''}

                            {display10 ? <p>
                                <p className="head-1">
                                We provide Web platform for private institutes to conduct online classes. The digital platforms could be integrated with our own payment gateway in partnership with WebEx and discounted zoom packages with secured features. Also a tutor who is interested in their own web platform to conduct online classes can obtain a customized web platform at DTS
                                </p>
                            </p> : ''}

                        </div>
                        {displayImage ? <img src={services__image} alt="Services Image" className="services__image"/> : ''}
                        
                    </div>

                    </div>

                    <div className="services__grid-item">

                        <div className="services__wrapper-grid-item" onMouseEnter={hideImage} onMouseLeave={showImage}>

                            <div className="services__text-wrapper" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" onMouseEnter={show1} onMouseLeave={hide1}>
                                <div className="services__num">01</div>
                                <div className="services__text">Hybrid To Teleport</div>
                            </div>
                            <div className="services__text-wrapper" data-aos-delay="100" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" onMouseEnter={show3} onMouseLeave={hide3}>
                                <div className="services__num">03</div>
                                <div className="services__text">Online Learning</div>
                            </div>
                            <div className="services__text-wrapper" data-aos-delay="200" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" onMouseEnter={show5} onMouseLeave={hide5}>
                                <div className="services__num">05</div>
                                <div className="services__text">Video On Demand</div>
                            </div>
                            <div className="services__text-wrapper" data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" onMouseEnter={show7} onMouseLeave={hide7}>
                                <div className="services__num">07</div>
                                <div className="services__text">Easy Payment Methods</div>
                            </div>
                            <div className="services__text-wrapper" data-aos-delay="400" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" onMouseEnter={show9} onMouseLeave={hide9}>
                                <div className="services__num">09</div>
                                <div className="services__text">Student Coordination</div>
                            </div>

                        </div>

                        <div className="services__wrapper-grid-item" onMouseEnter={hideImage} onMouseLeave={showImage}>

                            <div className="services__text-wrapper" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" onMouseEnter={show2} onMouseLeave={hide2}>
                                <div className="services__num">02</div>
                                <div className="services__text">Teleport Centers</div>
                            </div>                   
                            <div className="services__text-wrapper" data-aos-delay="100" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" onMouseEnter={show4} onMouseLeave={hide4}>
                                <div className="services__num">04</div>
                                <div className="services__text">Tutor Promotions</div>
                            </div>                    
                            <div className="services__text-wrapper" data-aos-delay="200" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" onMouseEnter={show6} onMouseLeave={hide6}>
                                <div className="services__num">06</div>
                                <div className="services__text">Student Scholarships</div>
                            </div>                    
                            <div className="services__text-wrapper" data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" onMouseEnter={show8} onMouseLeave={hide8}>
                                <div className="services__num">08</div>
                                <div className="services__text">Hybrid Debit Card</div>
                            </div>
                            <div className="services__text-wrapper" data-aos-delay="400" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" onMouseEnter={show10} onMouseLeave={hide10}>
                                <div className="services__num">10</div>
                                <div className="services__text">Institutional Platforms</div>
                            </div>

                        </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services