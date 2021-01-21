import "./App.css";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Landing from "./Components/LandingPage/Landing";
import Navbar from "./Components/Navbar/Navbar";
import MapPage from "./Components/MapPage/MapPage";
import Dts from "./Components/DtsPage/Dts";
import Contact from "./Components/ContactPage/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Gallery from "./Components/HomePage/GalleryPage/Gallery";
import Tutor from "./Components/TutorPage/Tutor";
import SlideRoutes from "react-slide-routes";
import Home from "./Components/HomePage/Home";
import Partners from "./Components/PartnersPage/Partners";
import NewsFeed from "./Components/NewsFeedPage/NewsFeed";
import Services from "./Components/ServicesPage/Services";
import TutorUpload from "./Components/TutorUpload/TutorUpload";
import NationalStudiesAL from "./Components/TutorPage/NationalStudiesAL/NationalStudiesAL";
import NationalStudiesOL from "./Components/TutorPage/NationalStudiesOL/NationalStudiesOL";
import Business from "./Components/TutorPage/Business/Business";
import Edexel from "./Components/TutorPage/Edexel/Edexel";
import Studies from "./Components/TutorPage/Studies/Studies";
import Training from "./Components/TutorPage/Training/Training";
import TutorList from "./Components/TutorUpload/TutorList/TutorList";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* <Landing/>  */}
      <Navbar />
      <Switch>
        <SlideRoutes location={location} duration={1000}>
          <Route path="/" exact component={Home} />
          <Route path="/map" component={MapPage} />
          <Route path="/dts_info" component={Dts} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/tutor" component={Tutor} />
          <Route path="/partners" component={Partners} />
          <Route path="/services" component={Services} />
          <Route path="/news-feed" component={NewsFeed} />
          <Route path="/tutor-upload" component={TutorUpload} />
          <Route path="/national-studies-AL" component={NationalStudiesAL} />
          <Route path="/national-studies-OL" component={NationalStudiesOL} />
          <Route path="/business" component={Business} />
          <Route path="/edexel" component={Edexel} />
          <Route path="/professional-studies" component={Studies} />
          <Route path="/training" component={Training} />
          <Route path="/tutor-list" component={TutorList} />
        </SlideRoutes>
      </Switch>
    </>
  );
}

export default App;
