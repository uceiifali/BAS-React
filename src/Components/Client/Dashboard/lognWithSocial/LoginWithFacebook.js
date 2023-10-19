import React from 'react'

const LoginWithFacebook = () => {
    return (
        <div
            style={{
                width: "126px"  ,
                height: "43px",
                borderRadius: "5px",
                border: "1px solid #DEDEDE",

            }}
            className='d-flex  align-items-center p-2'

        >
              <p className='my-auto' style={{fontSize:"16px", fontFamily: "Poppins" }}>facebook</p>
            <img width={26} height={26} src="../facebook.png" className='me-2' alt='facebook logo '/>
          
        </div >
    )
}

export default LoginWithFacebook