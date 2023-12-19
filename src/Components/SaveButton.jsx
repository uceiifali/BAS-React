import React from 'react'
import { Button } from 'react-bootstrap'

const SaveButton = () => {
    return (
        <div className=' d-flex justify-content-center'>

            <Button
                
               type='submit'
                className='sumbmitAddUpdateUser'>
                حفظ
            </Button>
        </div>
    )
}
export default SaveButton