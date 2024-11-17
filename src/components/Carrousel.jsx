import React, { useState } from 'react';
import leftArrowSrc from '../assets/images/arrowleft.png';
import rightArrowSrc from '../assets/images/arrowright.png';

const Carrousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="Carroussel">
      <div className="carroussel-img-div">
        <img
          className='carroussel-img'
          src={slides[current]}
          alt={`Slide ${current + 1}`}
        />
        
        {length > 1 && (
          <>
            <div className="slide-counter">
              {current + 1} / {length}
            </div>
            <button
              onClick={prevImage}
              className="leftButton"
              aria-label="Previous image"
            >
              <img src={leftArrowSrc} alt="Previous" className="leftArrowimg" />
            </button>
            <button
              onClick={nextImage}
              className="rightButton"
              aria-label="Next image"
            >
              <img src={rightArrowSrc} alt="Next" className="rightArrowImg" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrousel;