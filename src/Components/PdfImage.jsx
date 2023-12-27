import React from 'react'

const PdfImage = ({
    openPdf,
    setOpenPdf,
    text = ''


}) => {
    return (
        <div>
            <div onClick={() => {
                setOpenPdf(true)
            }} className='pdfbg'>
                <img src={process.env.PUBLIC_URL + "/icons/Pdf.png"} alt="pdf" className='pdfImage' />
                <div style={{ borderRadius: "7px" }} className='bg-[#252538] d-flex justify-content-center '>
                    <p className='text-white mx-auto  mt-2 '> {text}</p>
                </div>
            </div>
        </div>
    )
}

export default PdfImage
