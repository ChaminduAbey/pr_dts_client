import React from 'react'
import './Partners.css'
import DtsImage from '../../images/partners-images/polygon_dts.png'
import semycs from '../../images/partners-images/semycs.png.png'
import dfcc from '../../images/partners-images/dfcc.png'
import Anything from '../../images/partners-images/anything.png.png'
import Egosurf from '../../images/partners-images/egosurf.png.png'
import webxpay from '../../images/partners-images/webxpay.png.png'
import genese from '../../images/partners-images/genese.png.png'
import pcbuild from '../../images/partners-images/pcbuild.png.png'
import { Link } from 'react-router-dom'

function Partners() {
      
    return (
        <div className="partners__container" data-aos-delay="100" data-aos="zoom-in-down">
            <div className="partners__grid-item">
                <img src={genese} alt="Partners Image" className="partners__image partners-top"/>
                <Link target='_blank' to='//webxpay.co/'><img src={webxpay} alt="Partners Image" className="partners__image partners-top"/></Link>
            </div>
            <div className="partners__grid-item">
                <Link target='_blank' to='//dfcc.lk'><img src={dfcc} alt="Partners Image" className="partners__image partners-middle-up"/></Link>
                <img src={DtsImage} alt="Partners Image" className="partners__image partners-middle"/>
                <img src={Anything} alt="Partners Image" className="partners__image partners-middle-down"/>
            </div>
            <div className="partners__grid-item">
                <Link target='_blank' to='//egosurf.lk'><img src={Egosurf} alt="Partners Image" className="partners__image partners-bottom"/></Link>
                <Link className="partners-bottom-link" target='_blank' to='//semycs.com'><img src={semycs} alt="Partners Image" className="partners__image partners-bottom"/></Link>
                <img src={pcbuild} alt="Partners Image" className="partners__image partners-bottom"/>
            </div>
        </div>
    )
}

export default Partners
