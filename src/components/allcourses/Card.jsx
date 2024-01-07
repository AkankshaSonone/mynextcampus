import React from 'react'

const Card = ({ val, setShowPopup }) => {
    return (
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
            <button
                className="outline-btn"
                onClick={() => setShowPopup(true)}
            >
                ENROLL NOW !
            </button>
        </div>
    )
}

export default Card