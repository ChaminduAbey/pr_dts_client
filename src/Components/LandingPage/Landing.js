import React, { useEffect, useState } from 'react'
import './Landing.css'
import Logo from '../../images/main-logo.png'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import axios from 'axios'


function Landing() {

    const [animate, setAnimate] = useState(false);

    const [countValue, setCount] = useState(0)

    let audio = new Audio("/audioFile.mp3")

    const handleAnimate = () => {
        setAnimate(true)
        audio.play();
        document.getElementById("tap_button").style.display = 'none';
    }

    axios({
        method: 'GET',
        url: 'https://dts.chords.org.lk/api/count',
      }).then(res => {
        setCount(Number(res.data.count))
    })

    useEffect(() => {
        document.getElementById("tap_button").disabled = true;
        setTimeout(() => {
            document.getElementById("tap_button").disabled = false;
        }, 3000);
    }, [])

    return (
        <>
            <div className="landing__overlay"></div>
            <div className={animate ? "landing__container landing__container_animation" : "landing__container"}>
                <div className="landing__grid-item">
                    <div className={animate ? "landing__logo-animate" : "landing__logo-wrapper"}>
                        <img src={Logo} alt="Logo" className="landing__logo"/>
                        <h1 className="landing__logo-content">Digital Tutorial Services</h1>
                    </div>

                    <div className="landing__count-wrapper">
                    <CountUp end={countValue} redraw={true} duration={2}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className={animate ? "landing__count-animate" : "landing__count"} ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <p className="landing__count-text">Dots Connected So Far</p>
                    </div>

                </div>

                <button id="tap_button" className="landing__button" onClick={handleAnimate}> Tap To Connect </button>

                <div className="landing__grid-item">
                    <h1 className={animate ? "landing__bottom-text-animate": "landing__bottom-text"}>Connecting The Dots</h1>
                    <p className={animate ? "landing__dot-animation-animte" : "landing__dot-animation"}><span id="dot_1"> . </span><span id="dot_2"> . </span><span id="dot_3"> . </span><span id="dot_4"> . </span><span id="dot_5"> . </span></p>
                </div>
            </div>
        </>
    )
    
}

export default Landing
