import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import Button from '@mui/material/Button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Pdf = ({ openPdf, setOpenPdf, PdfFile, height, width }) => {
    // 
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    console.log(height, width, openPdf)
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    const changepage = (offset) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);

    }


    const changepageBack = () => {
        changepage(-1)
    }

    const changepageNext = () => {
        changepage(+1)
    }

    return (
        <div>
            {openPdf && <Modal
                className='d-flex claimModal align-items-center jusify-content-center'
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                onHide={() => setOpenPdf(false)}
                show={openPdf}
            >

                <Modal.Body className='d-flex align-items-center'>
                    <Document file={PdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page height={height} width={width} pageNumber={pageNumber} />
                    </Document>
                    <p className='text-white'>
                        Page {pageNumber} of {numPages}
                    </p>


                    <div className='d-flex gap-4'>
                        {
                            pageNumber > 1 &&
                            // <Button className="mb-3"
                            //     variant="contained"



                            //     
                            // >pervious page</Button>
                            <FaArrowRight
                                onClick={changepageBack}
                                size={30}
                                className='pointer'
                                color='#EFAA20'
                            />

                        }
                        {pageNumber < numPages &&
                            <FaArrowLeft
                                onClick={changepageNext}
                                size={30}
                                color='#EFAA20'
                                className='pointer'
                            />



                            // <Button
                            //     variant="contained"
                            //     onClick={changepageNext}>
                            //     Next page
                            // </Button>
                        }


                    </div>


                </Modal.Body>


            </Modal >
            }


        </div>
    );
}

export default Pdf