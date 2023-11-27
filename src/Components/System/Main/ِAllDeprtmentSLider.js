import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./MainSystem.css"
const AllDeprtmentSlider = () => {

    const settings = {

        slidesToShow: 5,
        slidesToScroll: 5,

        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,


                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <Slider className='systemDeprtamentSlider allDepetmentChart d-flex  w-199 '  {...settings}>
            <div className=' d-flex flex-column mb-2 deprtament-slider-Container  m-auto   '>
                
                <h2 style={{ color: "#fff", fontSize: "12px" }}>مدنى</h2>
                <p className='main-text'>10</p>
                <ProgressBar className='w-50  sliderProgressBar ' dir='rtl' now={37} />
            </div>
            <div className=' d-flex flex-column mb-2 deprtament-slider-Container m-auto   '>
                
                <h2 style={{ color: "#fff", fontSize: "12px" }}>معماري</h2>
                <p className='main-text'>10</p>
                <ProgressBar className='sliderProgressBar  w-50   ' dir='rtl' now={37} />
            </div>
            <div className=' d-flex flex-column mb-2 deprtament-slider-Container m-auto   '>
                
                <h2 style={{ color: "#fff", fontSize: "12px" }}>كهربا</h2>
                <p className='main-text'>10</p>
                <ProgressBar className='sliderProgressBar  w-50   ' dir='rtl' now={37} />
            </div>
            <div className=' d-flex flex-column mb-2 deprtament-slider-Container m-auto   '>
                

                <h2 style={{ color: "#fff", fontSize: "12px" }}>الحسابات</h2>
                <p className='main-text'>10</p>
                <ProgressBar className='sliderProgressBar  w-50   ' dir='rtl' now={37} />
            </div>
            <div className=' d-flex flex-column mb-2 deprtament-slider-Container m-auto   '>
                
                <h2 style={{ color: "#fff", fontSize: "12px" }}>الموارد البشرية</h2>
                <p className='main-text'>10</p>
                <ProgressBar className='sliderProgressBar  w-50   ' dir='rtl' now={37} />
            </div>
            <div className=' d-flex flex-column mb-2 deprtament-slider-Container m-auto   '>
                
                <h2 style={{ color: "#fff", fontSize: "12px" }}>برمجه</h2>
                <p className='main-text'>10</p>
                <ProgressBar className='sliderProgressBar  w-50   ' dir='rtl' now={37} />
            </div>



        </Slider>



    )


}

export default AllDeprtmentSlider
