import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"
import { coursesCard2 } from "../../dummydata"
import { useEffect,useState } from "react"


const HAbout = () => {
  const [showPopup, setShowPopup] = useState(false);
  function show(){
 console.log("hello");
  setShowPopup(true);
  }   
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='our courses' title='explore our popular online courses' />

          <div className='coursesCard'>
            {/* copy code form  coursesCard */}
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val) => (
                <div className='items'>
                  <div className='content flex'>
                    <div className='left'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                    </div>
                    <div className='text'>
                      <h1>{val.coursesName}</h1>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div>
                      <div className='details'>
                        {val.courTeacher.map((details) => (
                          <>
                            <div className='box'>
                              <div className='dimg'>
                                <img src={details.dcover} alt='' />
                              </div>
                              <div className='para'>
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='price'>
                    <h3>
                      {val.priceAll}
                    </h3>
                  </div>
                  <button className='outline-btn'  onClick={show()}>ENROLL NOW !</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
        
        <div className='container'>
          <Heading subtitle='Programmes' title='ONLINE PROGRAMMES' />

          <div className='coursesCard'>
            {/* copy code form  coursesCard */}
            <div className='grid2'>
              {coursesCard2.slice(0, 3).map((val) => (
                <div className='items'>
                  <div className='content flex'>
                    <div className='left'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                    </div>
                    <div className='text'>
                      <h1>{val.coursesName}</h1>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div>
                      <div className='details'>
                        {val.courTeacher.map((details) => (
                          <>
                            <div className='box'>
                              <div className='dimg'>
                                <img src={details.dcover} alt='' />
                              </div>
                              <div className='para'>
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='price'>
                    <h3>
                      {val.priceAll}
                    </h3>
                  </div>
                  <button className='outline-btn'>ENROLL NOW !</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HAbout