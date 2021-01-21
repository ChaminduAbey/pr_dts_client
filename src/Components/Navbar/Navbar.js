import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import home_icon from '../../images/home-icon.png'
import map_icon from '../../images/map-icon.png'

var changeLogo = true

export function ChangeLogo(para){
    changeLogo = para
}

function Navbar() {
    
    

    const [ click , setClick ] = useState(false);
    const handleClick = () => setClick(!click);

    const  closeMobileMenu = () => {
        setClick(false);
        ChangeLogo(false);
        scroll.scrollToTop();
    }

    const toggleHome = () =>{
        scroll.scrollToTop();
        setClick(false);
        ChangeLogo(true)
    }


    return (
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <div className="navbar__container">

                    <IconContext.Provider value={{color: 'rgb(255, 208, 0)'}} >
                        {changeLogo ? 
                        <Link to='/map' onClick={closeMobileMenu} className="navbar-logo" >
                            <img src={map_icon} alt="Map Icon" className="logo-icon"/>
                        </Link> :
                        <Link to='/' onClick={toggleHome} className="navbar-logo" >
                            <img src={home_icon} alt="Home Icon" className="logo-icon"/>
                        </Link>
                        }

                    </IconContext.Provider>

                    <div className="menu-icon" onClick={ handleClick }>
                        { click ? <FaTimes/> : <FaBars/> }
                    </div>

                    <ul className= {click ? 'nav-menu active': 'nav-menu'}>
                                
                        <li className="nav-item">
                            <Link to='/dts_info' className="nav-links" onClick={closeMobileMenu}>
                                What is DTS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                Our Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/tutor' className="nav-links" onClick={closeMobileMenu}>
                                DTS Tutors
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/news-feed' className="nav-links" onClick={closeMobileMenu}>
                                News Feed
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/partners' className="nav-links" onClick={closeMobileMenu}>
                                Partners
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact-us' className="nav-links" onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>

                    </ul>
                    </div>
            </div>
        </IconContext.Provider>
    )
}

export default Navbar 