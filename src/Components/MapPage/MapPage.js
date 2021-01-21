import React, { useState } from 'react'
import ReactMapGl , {Marker} from 'react-map-gl'
import {HiLocationMarker} from 'react-icons/hi'
import './MapPage.css'
import { Link } from 'react-router-dom';

function MapPage() {

    const lat = 6.8734907;
    const lon = 79.8900985;

    const [ viewport, setViewport] = useState({
        latitude: lat,
        longitude: lon,
        width: "100vw",
        height: "100vh",
        zoom: 17
    });

    return (
        <div data-aos="zoom-in" data-aos-delay="200" className="map__container">
            <ReactMapGl
                    {...viewport}
                    mapboxApiAccessToken="pk.eyJ1IjoidGVyYW5jZSIsImEiOiJja2hncHV0dnUwYTU4MnNwOTVnc2d4OTFuIn0.pK8_dIUOY6zpG_PDZTh6Rg"
                    mapStyle="mapbox://styles/terance/ckhgqicgp1pzk19p7iqwv9mvy"
                    onViewportChange={viewport => {
                      setViewport(viewport);
                    }}
                >
                    <Link target="_blank" to="//www.google.com/maps/dir//New+Leeds+%E0%B7%83%E0%B7%9C%E0%B6%BD%E0%B7%8F%E0%B6%9C%E0%B7%99+%E0%B6%9A%E0%B7%8A%E0%B6%BD%E0%B7%8F%E0%B7%83%E0%B7%8A+%E0%B6%91%E0%B6%9A,+B307,+Nugegoda/@6.8814289,79.858608,14z">
                        <Marker
                        latitude={lat}
                        longitude={lon} >
                        
                        <HiLocationMarker className="map__marker"/>
                    </Marker>

                    </Link>
                    
                </ReactMapGl>
        </div>
    )
}

export default MapPage
