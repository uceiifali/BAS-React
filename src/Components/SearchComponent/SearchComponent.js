import React from 'react'
import Input from '../FormHandler/Input'

export const SearchComponent = ({background}) => {
    return (
        <div className='d-flex  w-100  mt-3  justify-content-center'>     <Input  background={background} height='37.06px'  className='border-0  search' placeholder="Search..." /></div>
    )
}
