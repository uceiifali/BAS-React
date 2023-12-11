import { Container } from 'react-bootstrap';
import React from 'react'

import { Carousel } from 'react-bootstrap';
import Slider from 'react-slick'
import ImageComponent from '../../../Image';
const projectsCarousal = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
          <ImageComponent src={`${process.env.PUBLIC_URL + "slider/projects/project1.jpeg"}`} alt='design ' className='w-100 h-100 ' />
        </div>
        <div className='   d-flex my-5 slider-Container  m-auto  justify-content-center  '>
          <ImageComponent src={`${process.env.PUBLIC_URL + "slider/projects/project2.jpeg"}`} alt='design ' className='w-100 h-100 ' />
        </div>
        <div className='   d-flex my-5 slider-Container  m-auto  justify-content-center '>
          <ImageComponent
            src={`${process.env.PUBLIC_URL + "slider/projects/project3.jpeg"}`}
            alt='design ' className='w-100 h-100 ' />
        </div>
        <div className='   d-flex my-5 slider-Container   m-auto  justify-content-center '>
        <ImageComponent
            src={`${process.env.PUBLIC_URL + "slider/projects/project4.jpeg"}`}
            alt='design ' className='w-100 h-100 ' />
        </div>
        
        <div className='   d-flex my-5 slider-Container  m-auto  justify-content-center '>
          <ImageComponent
            src={`${process.env.PUBLIC_URL + "slider/projects/project5.jpeg"}`}

            alt='design ' className='w-100 h-100 ' />
        </div>
        <div className='   d-flex my-5 slider-Container  m-auto  justify-content-center '>
          <ImageComponent
            src={`${process.env.PUBLIC_URL + "slider/projects/project6.jpeg"}`}

            alt='design ' className='w-100 h-100 ' />
        </div>
       

      </Slider>

    </Container>
  )


}

export default projectsCarousal
