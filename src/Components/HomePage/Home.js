import React, { useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import primeTutionOnline from "../../images/home-images/primeTutuion-online-logo.png";
import primeTution from "../../images/home-images/primeTution-logo.png";
import Hyb2T from "../../images/home-images/hyb2t-logo.png";
import image_1 from "../../images/home-images/gallery-image1.jpg";
import image_2 from "../../images/home-images/gallery-image2.jpg";
import facebook from "../../images/home-images/social_media-images/facebook.svg";
import youtube from "../../images/home-images/social_media-images/youtube.svg";
import instagram from "../../images/home-images/social_media-images/instagram.svg";
import { IconContext } from "react-icons/lib";
import { ChangeLogo } from "../Navbar/Navbar";
import { animateScroll as scroll } from "react-scroll";
import axios from "axios";
import LogInComponent from "./LoginView/LoginView";

function Home() {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const GalleryClick = () => {
    ChangeLogo(false);
    scroll.scrollToTop();
  };

  const [url, setUrl] = useState("");

  const [countValue, setCount] = useState(0);

  axios({
    method: "GET",
    url: "https://dts.chords.org.lk/api/introvideo",
  }).then((res) => {
    setUrl(res.data.url);
  });

  axios({
    method: "GET",
    url: "https://dts.chords.org.lk/api/count",
  }).then((res) => {
    setCount(Number(res.data.count));
  });

  return (
    <div id="home" className="home__container">
      {/* <div className="home__grid-item" data-aos-delay="100" data-aos="zoom-in-up">

                <Link target='__blank' to={'//primetuition.lk/index2.php' }className="home__image-link">
                    <img src={primeTutionOnline} alt="Prime Tution Image" className="home__image top__image" />
                    <p className="home__web-link">primetuition.lk</p>
                </Link>
                <hr/>
                <Link target='__blank' to={'//primetuition.lk/Hyb2T/tutory-time-table.php' } className="home__image-link">
                    <img src={Hyb2T} alt="Hyb2T Image" className="home__image middle__image"/>
                    <p className="home__web-link">leedshybrid.lk</p>
                </Link>
                <hr/>
                <Link target='__blank' to={'//www.primetuition.org/index2.php' } className="home__image-link">
                    <img src={primeTution} alt="Prime Tution Online Image" className="home__image bottom__image"/>
                    <p className="home__web-link">primetuition.org</p>
                </Link>
                
            </div> */}

      <div data-aos-delay="100" data-aos="zoom-in-up">
        {LogInComponent()}
      </div>
      <div className="home__grid-item">
        <div className="home__sub-grid-item">
          {/* TsrW3W1y2O0 */}
          <div className="home__count-wrapper">
            <span className="home__count">{countValue}</span>

            <hr className="home__hr" />
            <p className="homr__count-text">
              Total Number Of Registerd Students So Far
            </p>
          </div>
          <div
            className="home__youtube-wrapper"
            data-aos-delay="100"
            data-aos="zoom-in-up"
          >
            <YouTube className="home__youtube" videoId={url} opts={opts} />

            <ul className="home__social-media-wrapper">
              <li className="home__social-media">
                <Link target="__blank" to={"//www.facebook.com/dts.chords"}>
                  <img
                    src={facebook}
                    alt="Facebook"
                    className="social-media-logo"
                  />
                </Link>
              </li>

              <li className="home__social-media">
                <Link
                  target="__blank"
                  to="//www.youtube.com/channel/UCJWqnCBFwRmS5tpDdpJN1cg"
                >
                  <img
                    src={youtube}
                    alt="Youtube"
                    className="social-media-logo"
                  />
                </Link>
              </li>

              {/* <IconContext.Provider value={{color: '#add8e6'}}>
                        <li className="home__social-media">
                            <Link target='__blank' to='//www.twitter.com'>
                                <img src={twitter} alt="Twitter" className="social-media-logo"/>
                            </Link>
                        </li>
                        </IconContext.Provider> */}

              <li className="home__social-media">
                <Link
                  target="__blank"
                  to="//www.instagram.com/digital_tutorial_services?igshid=1rrdpgle5l2rd"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="social-media-logo"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div data-aos-delay="100" data-aos="zoom-in-up">
            <Link
              to="/gallery"
              className="home__carousel-wrapper"
              onClick={GalleryClick}
            >
              <div className="home__carousel-overlay">
                <div className="overlay-text">GALLERY</div>
              </div>
              <Carousel
                className="home__carousel"
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                showArrows={false}
                showStatus={false}
              >
                <div>
                  <img className="home__carousel-image" src={image_1} />
                </div>
                <div>
                  <img className="home__carousel-image" src={image_2} />
                </div>
              </Carousel>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
