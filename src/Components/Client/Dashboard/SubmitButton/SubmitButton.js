import React from 'react'
import { Button } from 'react-bootstrap'

const SubmitButton = ({text,className}) => {
  return (
    <Button className={` submit-btn text-white border-none pointer  submit-btn ${className}`}  style={{fontSize:"18px", width: "400px", height: "55px"   , backgroundColor:"#717174" ,zIndex:"-1111"}}>{text}</Button>
  )
}

export default SubmitButton