import React from "react";
import { useState } from "react";
import './Carousel.css';


const Carousel = ({ pics }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const previousImage = () => {
        let activePic = currentIndex
        if (activePic === 0) {
            setCurrentIndex(pics.length - 1)
        } else {
            let activePic = (currentIndex - 1)
            setCurrentIndex(activePic)
        }
    }

    const nextImage = () => {
        let activePic = (currentIndex + 1)
        setCurrentIndex(activePic)
        if (activePic > (pics.length - 1)) {
            setCurrentIndex(0)
        }

    }


    return (

        <div className='carouselStyles'>
            <div className='leftArrow' onClick={previousImage}>&larr;</div>
            <div className="rightArrow" onClick={nextImage}>&rarr;</div>
            <img src={pics[currentIndex].url} alt={pics[currentIndex].title} className="imageStyles" />
        </div>


    )

}

export default Carousel;