import React from 'react'

const   SystemControler = ({ child }) => {
    return (
        <div className='user-control-model mb-4 d-flex align-items-center x-4 justify-content-between' >
            <div className='me-2  w-100'>
                {child}
            </div>
            <div className='icons ms-3 d-flex gap-2' >

                <img src={process.env.PUBLIC_URL+"/icons/notification.png"}  alt='notification img' className='pointer system-notification mx-1' />
                <img src={process.env.PUBLIC_URL+"/icons/messages.png"}  alt='notification img' className='pointer system-notification mx-1' />





            </div>
        </div>
    )
}
export default SystemControler