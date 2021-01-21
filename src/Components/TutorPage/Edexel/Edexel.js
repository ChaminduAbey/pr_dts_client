import React, { useCallback, useRef, useState } from 'react'
import './Edexel.css'
import Data from '../data'
import { Link } from 'react-router-dom'


export default function NationalStudiesAL(){
  const [page, setPageNumber] = useState(0)

  const {
    posts,
    loading,
    hasMore,
  } = Data(page)

  const observer = useRef()
  const lastElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  return(
    <div className="edexel__container">
    <h1 className="edexel__tutor-head">DTS Panel of Tutors</h1>
          <div className="edexel__post-container" data-aos-delay="200" data-aos="zoom-in-down">
              {
              posts.map((post, index) => {
                  const { id, name, medium, subject, category, platform, photo_url, cart_id } = post;

                  let url = "//primetuition.lk/students_cart.php?teacher_id=";
                  if(category == 'edexel'){
                    
                    if(cart_id != null){
                      url = url + cart_id
                    }
                    if(posts.length === index + 1){
                      return (
                        <Link ref={lastElementRef} className={(cart_id != null) ? "edexel__post" : "edexel__post __noClick"} key={id} target="__blank" to={url}>
  
                            <div className="edexel__post">
  
                              <div className="edexel__overlay">
                                  <div className="edexel__overlay-text-wrapper">
                                      <div className="edexel__subject edexel__text">{subject}</div>
                                      <div className="edexel__medium edexel__text">{medium}</div>
                                      <div className="edexel__platform edexel__text">{platform}</div>
                                  </div>
                              </div>
  
                              <img src={photo_url} alt="Profile Image" className="edexel__profile-image"/>
                              <h3 className="edexel__profile-name">{name}</h3>
  
                            </div>
                        </Link>
                        );
                    }
                    else{
                      return (
                        <Link className={(cart_id != null) ? "edexel__post" : "edexel__post __noClick"} key={id} target="__blank" to={url}>
  
                            <div className="edexel__post">
  
                              <div className="edexel__overlay">
                                  <div className="edexel__overlay-text-wrapper">
                                      <div className="edexel__subject edexel__text">{subject}</div>
                                      <div className="edexel__medium edexel__text">{medium}</div>
                                      <div className="edexel__platform edexel__text">{platform}</div>
                                  </div>
                              </div>
  
                              <img src={photo_url} alt="Profile Image" className="edexel__profile-image"/>
                              <h3 className="edexel__profile-name">{name}</h3>
  
                            </div>
                        </Link>
                        );
                    }
                  }
              })}
        </div>
    </div>
  )
}
