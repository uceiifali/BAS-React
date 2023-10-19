import React from 'react'

const LoginWithFacebook = () => {
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
              <p style={{fontSize:"18px", fontFamily: "Poppins"}}>facebook</p>
            <img className='w-25' height={25} src="../facebook.png" alt='facebook logo '/>
          
        </div >
    )
}

export default LoginWithFacebook