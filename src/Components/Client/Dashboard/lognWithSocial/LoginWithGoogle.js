import React from 'react'

const LoginWithGoogle = () => {

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
              <p className='my-auto' style={{fontSize:"16px", fontFamily: "Poppins" }}>Google</p>
            <img width={26} height={26} src="../Google.png" className='me-2' alt='Google logo '/>
          
        </div >
    )
  
}

export default LoginWithGoogle