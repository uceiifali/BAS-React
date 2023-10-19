import React from 'react'

const LoginWithGoogle = () => {

    return (
        <div
            style={{
                width: "145px",
                height: "43px",
                borderRadius: "5px",
                border: "1px solid #DEDEDE",

            }}
            className='d-flex justify-content-between p-2'

        >
              <p style={{fontSize:"18px", fontFamily: "Poppins"}}>Google</p>
            <img className='w-25' height={25} src="../Google.png" alt='Google logo '/>
          
        </div >
    )
  
}

export default LoginWithGoogle