import React, { useCallback, useRef, useState } from 'react'
import './Business.css'
import Data from '../data'
import { Link } from 'react-router-dom'


export default function Business(){
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
    <div className="business__container">
    <h1 className="business__tutor-head">DTS Panel of Tutors</h1>
          <div className="business__post-container" data-aos-delay="200" data-aos="zoom-in-down">
              {
              posts.map((post, index) => {
                  const { id, name, medium, subject, category, platform, photo_url, cart_id} = post;
                  let url = "//primetuition.lk/students_cart.php?teacher_id=";
                  if(category == 'business'){
                    
                    if(cart_id != null){
                      url = url + cart_id
                    }

                    if(posts.length === index + 1){
                      return (
                        <Link ref={lastElementRef} className={(cart_id != null) ? "business__post" : "business__post __noClick"} key={id} target="__blank" to={url}>
  
                            <div className="business__post">
  
                              <div className="business__overlay">
                                  <div className="business__overlay-text-wrapper">
                                      <div className="business__subject business__text">{subject}</div>
                                      <div className="business__medium business__text">{medium}</div>
                                      <div className="business__platform business__text">{platform}</div>
                                  </div>
                              </div>
  
                              <img src={photo_url} alt="Profile Image" className="business__profile-image"/>
                              <h3 className="business__profile-name">{name}</h3>
  
                            </div>
                        </Link>
                        );
                    }
                    else{
                      return (
                        <Link className={(cart_id != null) ? "business__post" : "business__post __noClick"} key={id} target="__blank" to={url}>
  
                            <div className="business__post">
  
                              <div className="business__overlay">
                                  <div className="business__overlay-text-wrapper">
                                      <div className="business__subject business__text">{subject}</div>
                                      <div className="business__medium business__text">{medium}</div>
                                      <div className="business__platform business__text">{platform}</div>
                                  </div>
                              </div>
  
                              <img src={photo_url} alt="Profile Image" className="business__profile-image"/>
                              <h3 className="business__profile-name">{name}</h3>
  
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
