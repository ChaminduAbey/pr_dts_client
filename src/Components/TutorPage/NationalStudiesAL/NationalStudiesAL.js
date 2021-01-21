import React, { useCallback, useRef, useState } from 'react'
import './NationalStudiesAL.css'
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
    <div className="nsAL__container">
    <h1 className="nsAL__tutor-head">DTS Panel of Tutors</h1>
          <div className="nsAL__post-container" data-aos-delay="200" data-aos="zoom-in-down">
              {
              posts.map((post, index) => {
                  const { id, name, medium, subject, category, platform, photo_url, cart_id } = post;
                  let url = "//primetuition.lk/students_cart.php?teacher_id=";
                  
                  if(category == 'A/L'){
                    
                    if(cart_id != null){
                      url = url + cart_id
                    }
                    
                    if(posts.length === index + 1){
                      return (
                        <Link ref={lastElementRef} className={(cart_id != null) ? "nsAL__post" : "nsAL__post __noClick"} key={id} target="__blank" to={url}>
                          
                            <div className="nsAL__post">
  
                              <div className="nsAL__overlay" >
                                  <div className="nsAL__overlay-text-wrapper">
                                      <div className="nsAL__subject nsAL__text">{subject}</div>
                                      <div className="nsAL__medium nsAL__text">{medium}</div>
                                      <div className="nsAL__platform nsAL__text">{platform}</div>
                                  </div>
                              </div>
  
                              <img src={photo_url} alt="Profile Image" className="nsAL__profile-image"/>
                              <h3 className="nsAL__profile-name">{name}</h3>
  
                            </div>
                        </Link>
                        );
                    }
                    else{
                      return (
                        <Link className={(cart_id != null) ? "nsAL__post" : "nsAL__post __noClick"} key={id} target="__blank" to={url}>
  
                            <div className="nsAL__post">
  
                              <div className="nsAL__overlay">
                                  <div className="nsAL__overlay-text-wrapper">
                                      <div className="nsAL__subject nsAL__text">{subject}</div>
                                      <div className="nsAL__medium nsAL__text">{medium}</div>
                                      <div className="nsAL__platform nsAL__text">{platform}</div>
                                  </div>
                              </div>
  
                              <img src={photo_url} alt="Profile Image" className="nsAL__profile-image"/>
                              <h3 className="nsAL__profile-name">{name}</h3>
  
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
