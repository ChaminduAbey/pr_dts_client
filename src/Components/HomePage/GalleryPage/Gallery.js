import React from 'react'
import './Gallery.css'
import Image1 from '../../../images/gallery-images/image1.png'
import Image2 from '../../../images/gallery-images/image2.png'
import Image3 from '../../../images/gallery-images/image3.jpeg'
import Image4 from '../../../images/gallery-images/image4.png'
import Image6 from '../../../images/gallery-images/image6.jpeg'
import Image7 from '../../../images/gallery-images/image7.jpeg'
import Image8 from '../../../images/gallery-images/image8.jpeg'
import Image9 from '../../../images/gallery-images/image9.jpeg'
import Image10 from '../../../images/gallery-images/image10.jpeg'
import Image11 from '../../../images/gallery-images/image11.jpeg'
import Image12 from '../../../images/gallery-images/image12.jpeg'
import Image13 from '../../../images/gallery-images/image13.jpeg'
import Image14 from '../../../images/gallery-images/image14.jpeg'
import Image15 from '../../../images/gallery-images/image15.jpeg'
import Image16 from '../../../images/gallery-images/image16.jpeg'
import Image17 from '../../../images/gallery-images/image17.jpeg'
import Image18 from '../../../images/gallery-images/image18.jpeg'
import Image20 from '../../../images/gallery-images/image20.jpeg'
import Image21 from '../../../images/gallery-images/image21.jpeg'
import Image22 from '../../../images/gallery-images/image22.jpeg'


function Gallery() {
    return (
        <div className="gallery__container">
            <div className="gallery__grid-item">
                <h1 className="gallery__heading">GALLERY</h1>
            </div>

            <div className="gallery__grid-item">
                <img data-aos="zoom-in" data-aos-delay="50" src={Image4} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image3} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image12} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image18} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image16} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image15} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image14} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image8} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image9} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image10} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image11} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image1} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image13} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image2} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image6} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image17} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image7} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image20} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image21} alt="Image" className="gallery__image"/> 
                <img data-aos="zoom-in" data-aos-delay="50" src={Image22} alt="Image" className="gallery__image"/> 
            </div>
        </div>
    )
}

export default Gallery
