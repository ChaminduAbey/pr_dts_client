import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './TutorUpload.css'

export default function TutorUpload() {

    const SubmitForm1 = (e) => {
        e.preventDefault()
        fetch("https://dts.chords.org.lk/api/tutor", {        
            method: 'POST',        
            body: new FormData(document.getElementById("formID1"))
            // event.target is the form    
        }).then((resp) => {    
            return resp.json();
            // or resp.text() or whatever the server sends    
        }).then((body) => { 
            console.log(body)
            if(body.success){
                alert("Successfully Submited")
                document.getElementById("input1").value = '';
                document.getElementById("input2").value = '';
                document.getElementById("input3").value = '';
                document.getElementById("input4").value = '';
                document.getElementById("input5").value = '';
            }
            else{
                alert("Unsuccessfull")
            }         
            // TODO handle body    
        }).
        catch((error) => {   
            console.log(error)     
            // TODO handle error    
        });
    }

    const SubmitForm2 = (e) => {
        e.preventDefault()
        fetch("https://dts.chords.org.lk/api/tutor", {        
            method: 'POST',        
            body: new FormData(document.getElementById("formID2"))
            // event.target is the form    
        }).then((resp) => {    
            return resp.json();
            // or resp.text() or whatever the server sends    
        }).then((body) => { 
            console.log(body)
            if(body.success){
                alert("Successfully Submited")
                document.getElementById("input1").value = '';
                document.getElementById("input2").value = '';
                document.getElementById("input3").value = '';
                document.getElementById("input4").value = '';
                document.getElementById("input5").value = '';
            }
            else{
                alert("Unsuccessfull")
            }         
            // TODO handle body    
        }).
        catch((error) => {   
            console.log(error)     
            // TODO handle error    
        });
    }
    
        return (
            <div className="tutorup__container">
    
                <div className="tutorup__grid">
    
                    <form
                        id="formID1"     
                        action="https://dts.chords.org.lk/api/tutor"
                        method="post"
                        encType="multipart/form-data"
                    >
    
                        <div className="tutorup__grid-item">
                            <h3 className="tutorup__name tutorup__heading">Name</h3>
                            <input id="input1" className="tutorup__text-input" autoComplete="off"  type="text" name="name" />
                        </div>
                        <div className="tutorup__grid-item">
                            <h3 className="tutorup__medium tutorup__heading">Medium</h3>
                            <input id="input2" className="tutorup__text-input" autoComplete="off"  type="text" name="medium" />
                        </div>
                        <div className="tutorup__grid-item">
                            <h3 className="tutorup__subject tutorup__heading">Subject</h3>
                            <input id="input3" className="tutorup__text-input" autoComplete="off"  type="text" name="subject" />
                        </div>
                        <div className="tutorup__grid-item">
                            <h3 className="tutorup__category tutorup__heading">Category</h3>
                            <select name="category"  className="tutorup__text-input">
                                <option value="A/L" defaultValue>National Syllabus A/Ls</option>
                                <option value="O/L">National Syllabus O/Ls</option>
                                <option value="edexel">Edexel and Cambridge</option>
                                <option value="business">Business and Spoken English</option>
                                <option value="pro-studies">Professional Studies</option>
                                <option value="training">Training and Coaching</option>
                            </select>
                        </div>
                        <div className="tutorup__grid-item">
                            <h3 className="tutorup__platform tutorup__heading">Platform</h3>
                            <select name="platform"  className="tutorup__text-input">
                                <option value="Hybrid" defaultValue>Hybrid</option>
                                <option value="Online">Online</option>
                                <option value="Hybrid/Online">Both</option>
                            </select>
                        </div>
                        <div className="tutorup__grid-item">
                            <h3 className="tutorup__image tutorup__heading">Upload a Image</h3>
                            <input id="input4" autoComplete="off" className="tutorup__image-input" type="file" name="profile_img" accept="image/*" />
                        </div>
                        <div className="tutorup__grid-item">
                            <button className="tutorup__submit" onClick={(e) =>  {
                                SubmitForm1(e)
                            }}>Submit</button>
                        </div>
    
                    </form>
    
                </div>
    
                <div className="tutorup__grid">
                    <div className="tutor__grid2">
                        <h3 className="tutorup__list-head">Click to view Tutor List</h3>
                        <Link to="/tutor-list">
                            <button className="tutorup__list">Tutor List</button>
                        </Link>
                    </div>
                    <div className="tutor__grid2">
                        <form id="formID2"  action="https://dts.chords.org.lk/api/introvideo" method="post">
    
                            <div className="tutorup__grid-item1">
                                <h3 className="tutorup__url-head">URL</h3>
                            </div>
                            <div className="tutorup__grid-item1">
                                <input id="input5" autoComplete="off" className="tutorup__url" type="text" name="url"/> <br/>
                            </div>
                            <div className="tutorup__grid-item1">
                                <button className="tutorup__submit" onClick={(e) =>  {
                                    SubmitForm2(e)
                                }}>Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
    
            </div>
        )
    
}

