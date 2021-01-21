import React, { useState } from 'react'
import './Contact.css'
import Contact_Us_Image from '../../images/undraw_contact_us.svg'
import { Link } from 'react-router-dom'

function Contact() {

    let date = new Date()

    let today = date.getDay()

    return (
        <div className="contact__container">
            <div className="contact__grid-item">
                <Link to='/tutor-upload' className="contact__tutor-button-link">
                    <button className={today == 1 ? "contact__tutor-button left-top" : 'contact__disable'}></button>
                </Link>
                <Link to='/tutor-upload' className="contact__tutor-button-link">
                    <button className={today == 2 ? "contact__tutor-button left-middle" : 'contact__disable'}></button>
                </Link>
                <Link to='/tutor-upload' className="contact__tutor-button-link">
                    <button className={today == 3 ? "contact__tutor-button left-bottom" : 'contact__disable'}></button>
                </Link>
                <div className="contact__address-wrapper" data-aos-delay="300" data-aos="zoom-in-down">
                    <div className="contact__address-head">CHORDS BY SEMICIRCLE (PVT) LTD</div>
                    <div className="contact__address">
                        <p>level 26, East Tower, World Trade Centre</p>
                        <p>Echelon Square, Colombo</p>
                        <p>00100</p>
                        <p>Sri Lanka</p>
                    </div>
                </div>
                <div className="contact__address-wrapper" data-aos-delay="500" data-aos="zoom-in-down">
                    <div className="contact__address-head">HYBRID TO TELEPORT CENTER | LEEDS NUGEGODA</div>
                    <div className="contact__address">
                        <p>No 19/4</p>
                        <p>Nawala Road, Nugegoda</p>
                        <p>10250</p>
                        <p>Sri Lanka</p>
                    </div>
                </div>
            </div>
            <Link to='/tutor-upload' className="contact__tutor-button-link">
                    <button className={today == 4 ? "contact__tutor-button middle-bottom" : 'contact__disable'}></button>
            </Link>
            <div className="contact__grid-item">

                <Link to='/tutor-upload' className="contact__tutor-button-link">
                    <button className={today == 5 ? "contact__tutor-button right-top" : 'contact__disable'}></button>
                </Link>
                <Link to='/tutor-upload' className="contact__tutor-button-link">
                    <button className={today == 6 ? "contact__tutor-button right-middle" : 'contact__disable'}></button>
                </Link>
                <Link to='/tutor-upload' className="contact__tutor-button-link">
                    <button className={today == 0 ? "contact__tutor-button right-bottom" : 'contact__disable'}></button>
                </Link>

                <img data-aos="zoom-in-down" src={Contact_Us_Image} alt="Contact Us Image" className="contact__image"/>
                <div data-aos="zoom-in-down" data-aos-delay="250" className="contact__hotline-head">HotLine For Sri Lankan Students</div><br/>
                <Link className="contact__hotline-link" href="tel:+94117109509"><p data-aos-delay="250" data-aos="zoom-in-down">0117109509</p></Link>
            </div>
        </div>
    )
}

export default Contact
