import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from 'react-slick'
import ImageComponent from '../../../Image';

const ReviewCarousal = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      cssEase: "linear",
      speed: 2000,
      autoplaySpeed: 2000,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
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
        <Container>
         <Slider className='my-3' {...settings}>
            <div className='   d-flex my-5 slider-Container m-auto  justify-content-center  '>
                    <ImageComponent src={process.env.PUBLIC_URL+"reviews/review1.jpg"} alt='design ' className='w-100 h-100 ' />
                </div>
                <div className='   d-flex my-5 slider-Container  m-auto  justify-content-center  '>
                    <ImageComponent src={process.env.PUBLIC_URL+"reviews/review2.jpg"} alt='design ' className='w-100 h-100 ' />
                </div>
                <div className='   d-flex my-5 slider-Container  m-auto  justify-content-center '>
                    <ImageComponent src={process.env.PUBLIC_URL+"reviews/review3.jpg"} alt='design ' className='w-100 h-100 ' />
                </div>
                <div className='   d-flex my-5 slider-Container   m-auto  justify-content-center '>
                    <ImageComponent src={process.env.PUBLIC_URL+"reviews/review4.jpg"} alt='design ' className='w-100 h-100 ' />
                </div>
       
             
            </Slider> 
         
        </Container>
    )

}

export default ReviewCarousal
