import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import Image from '../../../Image';

const ClientCarousal = () => {

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
      <Slider  {...settings}>
        <div className='d-flex mb-3 slider-Container m-auto  justify-content-center  '>
          <Image src={"slider/Clients/brand1.jpeg"} alt='Brand Image'  className='w-100 h-100' />
        </div>
        <div className='d-flex mb-3 slider-Container  m-auto  justify-content-center  '>
          <Image src={"slider/Clients/brand2.jpg"} alt='Brand Image' className='w-100 h-100' />
        </div>
        <div className='   d-flex mb-3 slider-Container  m-auto  justify-content-center '>
          <Image src={"slider/Clients/brand3.png"} alt='Brand Image' className='w-100 h-100' />
        </div>
        <div className='   d-flex mb-3 slider-Container   m-auto  justify-content-center '>
          <Image src={"slider/Clients/brand4.jpg"} alt='Brand Image' className='w-100 h-100' />
        </div>
        <div className='   d-flex mb-3 slider-Container   m-auto  justify-content-center '>
          <Image src={"slider/Clients/brand5.jpg"} alt='Brand Image' className='w-100 h-100' />
        </div>
        <div className='   d-flex mb-3 slider-Container   m-auto  justify-content-center '>
          <Image src={"slider/Clients/brand6.jpg"} alt='Brand img' className='w-100 h-100' />
        </div>


      </Slider>

    </Container>
  )


}

export default ClientCarousal
