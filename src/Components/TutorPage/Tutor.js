import React from 'react'
import './Tutor.css'
import DtsImage from '../../images/tutor-images/polygon_dts.png'
import BusinessImage from '../../images/tutor-images/polygon_business.png'
import edexel from '../../images/tutor-images/polygon_edexel.png'
import nationalAL from '../../images/tutor-images/polygon_nationalAL.png'
import nationalOL from '../../images/tutor-images/polygon_nationalOL.png'
import proffectional from '../../images/tutor-images/polygon_professional.png'
import training from '../../images/tutor-images/polygon_training.png'
import { Link } from 'react-router-dom'

function Tutor() {
      
    return (
        <div className="tutor__container" data-aos-delay="100" data-aos="zoom-in-down">
            <div className="tutor__grid-item">
                <Link to='/national-studies-AL'><img src={nationalAL} alt="tutor Image" className="tutor__image tutor-top"/></Link>
                <Link to='/national-studies-OL'><img src={nationalOL} alt="tutor Image" className="tutor__image tutor-top"/></Link>
            </div>
            <div className="tutor__grid-item">
                <Link to='/training'><img src={training} alt="tutor Image" className="tutor__image tutor-middle-up"/></Link>
                    <img src={DtsImage} alt="tutor Image" className="tutor__image  tutor-middle"/>
                <Link to='/edexel'><img src={edexel} alt="tutor Image" className="tutor__image tutor-middle-down"/></Link>
            </div>
            <div className="tutor__grid-item">
                <Link to='/professional-studies'><img src={proffectional} alt="tutor Image" className="tutor__image tutor-bottom"/></Link>
                <Link to='/business'><img src={BusinessImage} alt="tutor Image" className="tutor__image tutor-bottom"/></Link>
            </div>
        </div>
    )
}

export default Tutor
