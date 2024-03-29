import { useState } from "react";
import Popup from "../../popup/Popup";

const Card = ({ val }) => {
    const [showPopup, setShowPopup] = useState(false);

  const handleIconClick = () => {
    setShowPopup(true);
  };
    return (
        <div className='items'>
            <div className='flex'>
                {/* <div className='left'> */}
                    <div className='img'>
                        <img src={val.cover} alt='' />
                    </div>
                    <div className="pl-3">
                    <h3>{val.coursesName}</h3>
                    </div>
                {/* </div> */}
            </div>
            <div className='text'>
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
            <div className='price'>
                <h3>
                    {val.priceAll}
                </h3>
            </div>
            <button
                className="outline-btn" onClick={handleIconClick}>
                ENROLL NOW !
            </button>
            {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} />}
        </div>
    )
}

export default Card
