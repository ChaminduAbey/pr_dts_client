import React, { useCallback, useRef, useState } from 'react'
import './TutorList.css'
import Data from './data'
import axios from 'axios'

function TutorList() {

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


    const deleteRow = (id, e) => {
        axios
            .delete(`https://dts.chords.org.lk/api/tutor/${id}`)
            .then(res => {
                if(res.data.success){
                    setPageNumber(0)
                }
            })
    }

    return (
        <div className="tutorList__container">
            <h1 className="tutorList__heading">DTS Tutors</h1>
            <table className="tutorList__table">
                <tbody>
                    <tr className="tutorList__head-row">
                        <th className="tutorList__head">Tutor Name</th>
                        <th className="tutorList__head">Subject</th>
                        <th className="tutorList__head">Category</th>
                        <th className="tutorList__head">Function</th>
                    </tr>
                    {
              posts.map((post, index) => {
                  const { id, name, subject, category, } = post;
                    if(posts.length === index + 1){
                      return (
                            <tr ref={lastElementRef} className="tutorList__row" key={id}>
                                <td className="tutorList__data">{name}</td>
                                <td className="tutorList__data">{subject}</td>
                                <td className="tutorList__data">{category}</td>
                                <td className="tutorList__data">
                                    <button className="tutorList__btn" onClick={(e) => deleteRow(id, e)}>Delete</button>
                                </td>
                            </tr>
                        );
                    }
                    else{
                      return (
                            <tr className="tutorList__row" key={id}>
                                <td className="tutorList__data">{name}</td>
                                <td className="tutorList__data">{subject}</td>
                                <td className="tutorList__data">{category}</td>
                                <td className="tutorList__data">
                                <button className="tutorList__btn" onClick={(e) => deleteRow(id, e)}>Delete</button>
                                </td>
                            </tr>
                        );
                    }
              })}
                </tbody>
            </table>
        </div>
    )
}

export default TutorList
