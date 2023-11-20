import React from 'react'
import { Button, Form, Image, Modal, NavDropdown } from 'react-bootstrap'
import "./index.css"
import { useState } from 'react'
import EditDesignRequest from '../Requests/EditRequest/EditDesignRequest'
import ConfirmPoper from '../ConfirmPoper'
const ShowDesignRequest = ({ setShowProject, DesignProjectType }) => {
  const [showImg, setShowImg] = useState(false)
  const [imgSrc, setImgSrc] = useState(`${process.env.PUBLIC_URL}/icons/show.png`)
  const [acceptRequest, setAcceptRequest] = useState(false)
  const [ConfirmAcceptRequest, setConfirmAcceptRequest] = useState(false)
  const [refuseRequest, setRefuseRequest] = useState(false)
  const [confirmRefuseRequest, setConfirmRefuseRequest] = useState(false)
  const [finishedRefuse, setFinishedRefuse] = useState(false)
  const [editRequest, setEditRequest] = useState(false)
  const [ConfirmUpdate, setConfirmUpdate] = useState(false)
  const [deleteRequest, setDeleteRequest] = useState(false)
  const handleAcceptRequest = () => {
    setConfirmAcceptRequest(true)


    // after check accept request 
    setAcceptRequest(false)




  }
  const handleRefuseRequest = () => {


    //confirm Refuse Request
    setConfirmRefuseRequest(false)
    setFinishedRefuse(true)

  }

  const handleDeleteRequest = () => {


    //after making sure that the request is deleted 

  }







  return (
    <div className='show-Design   p-2'>
      {showImg &&
        <Modal
          size="lg"
          show={showImg}
          onHide={() => setShowImg(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          className='   showRequestImg'
        >
          <Image className='pointer w-100 h-100  instrutmentimg' src={imgSrc} alt='owner img' />
        </Modal>}

      {acceptRequest &&
        <Modal
          className='submitSystemPoper'
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setAcceptRequest(false)}
          show={acceptRequest}
        >

          <Modal.Body className='d-flex align-items-center'>


            <div className='d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center '>
              {<p className='text-white' style={{ fontSize: "30px" }}>  هل انت متاكد من قبول هذا الطلب </p>}
              <div className='d-flex justify-content-center mt-3 gap-3'>

                <Button

                  onClick={() => {
                    handleAcceptRequest()

                  }}
                  className='Delete-button'>نعم</Button>

                <Button

                  onClick={() => {
                    setAcceptRequest(false)

                  }}
                  className='No-Delete'>لا</Button>

              </div>

            </div>
          </Modal.Body>


        </Modal >
      }
      {ConfirmAcceptRequest &&
        <Modal
          className='submitSystemPoper'
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setConfirmAcceptRequest(false)}
          show={ConfirmAcceptRequest}
        >

          <Modal.Body >
            <div className='d-flex justify-content-center w-100'>            <img src={process.env.PUBLIC_URL + "/correct.gif"} width={120} height={120} className='my-3' color='#E1B67C' /></div>


            <div className='d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center '>
              {<p className='text-white' style={{ fontSize: "30px" }}> تم قبول الطلب بنجاح    </p>}
              <Button
                onClick={() => {
                  setConfirmAcceptRequest(false)

                }}
                className='sumbmitAddUpdateUser'>حفظ</Button>

            </div>
          </Modal.Body>


        </Modal >
      }

      {refuseRequest && <Modal
        className='submitSystemPoper'
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setRefuseRequest(false)}
        show={refuseRequest}
      >

        <Modal.Body className='d-flex align-items-center'>


          <div className='d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center '>
            {<p className='text-white' style={{ fontSize: "30px" }}>  هل انت متاكد من رفض هذا الطلب </p>}
            <div className='d-flex justify-content-center mt-3 gap-3'>

              <Button

                onClick={() => {
                  setRefuseRequest(false)
                  setConfirmRefuseRequest(true)

                }}
                className='Delete-button'>نعم</Button>

              <Button

                onClick={() => {
                  setRefuseRequest(false)

                }}
                className='No-Delete'>لا</Button>

            </div>

          </div>
        </Modal.Body>


      </Modal >

      }
      {confirmRefuseRequest && <Modal
        className='submitSystemPoper leaveComment'
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setConfirmRefuseRequest(false)}
        show={confirmRefuseRequest}
      >

        <Modal.Body >


          <div className='w-100   mt-3 '>
            {<p className='text-white' style={{ fontSize: "30px" }}> اترك تعليقاً .... </p>}

            <Form className='w-100'>
              <textarea className='form-control w-100' rows={5} placeholder='اترك تعليقاً ....' />

              <div className='d-flex justify-content-center my-3'>
                <Button
                  onClick={() => {
                    handleRefuseRequest()

                  }}
                  className='sumbmitAddUpdateUser'>حفظ</Button>
              </div>

            </Form>



          </div>
        </Modal.Body>


      </Modal >
      }

      {finishedRefuse && <Modal
        className='submitSystemPoper'
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setFinishedRefuse(false)}
        show={finishedRefuse}
      >

        <Modal.Body >
          <div className='d-flex justify-content-center w-100'>            <img src={process.env.PUBLIC_URL + "/correct.gif"} width={120} height={120} className='my-3' color='#E1B67C' /></div>


          <div className='d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center '>
            {<p className='text-white' style={{ fontSize: "30px" }}> تم رفض الطلب بنجاح    </p>}
            <Button
              onClick={() => {
                setFinishedRefuse(false)

              }}
              className='sumbmitAddUpdateUser'>حفظ</Button>

          </div>
        </Modal.Body>


      </Modal >

      }

      {deleteRequest && <Modal
        className='submitSystemPoper'
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setDeleteRequest(false)}
        show={deleteRequest}
      >

        <Modal.Body className='d-flex align-items-center'>


          <div className='d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center '>
            {<p className='text-white' style={{ fontSize: "30px" }}>  هل انت متاكد من حذف هذا الطلب </p>}
            <div className='d-flex justify-content-center mt-3 gap-3'>

              <Button

                onClick={() => {
                  setDeleteRequest(false)
                  handleDeleteRequest()


                }}
                className='Delete-button'>نعم</Button>

              <Button

                onClick={() => {
                  setDeleteRequest(false)

                }}
                className='No-Delete'>لا</Button>

            </div>

          </div>
        </Modal.Body>


      </Modal >

      }

      {editRequest && <EditDesignRequest editRequest={editRequest} setEditRequest={setEditRequest} setConfirmPoper={setConfirmUpdate} />}
      {ConfirmUpdate && <ConfirmPoper confirmPoper={ConfirmUpdate} setConfirmPoper={setConfirmUpdate} setEditRequest={setEditRequest} text={"تم تعديل الطلب فى المشاريع بنجاح  "} />}

      <div className='border-golden'>
        <div className='row px-2 py-3'>
          <div className='col-md-6 mb-2'>
            <p className='text-white'>اسم المشروع :   <span>BSA</span> </p>

          </div>
          <div className='col-md-6   mb-2'>
            <div className=' d-flex gap-3 justify-content-start '>
              <Button className='export-bg  ms-2 '>تصدير CSV </Button>
              <Button className='export-bg ms-2'> تصدير Excel     </Button>
            </div>

          </div>
          <div className='col-md-6 mb-2'>
            <p className='text-white'>نوع المشروع :   <span>التصميم</span> </p>

          </div>
          <div className='col-md-6 mb-2'>
            <p className='text-white'>
              <p className='text-white'>  الحالة  :

                {DesignProjectType === "inProgress" ? <span>
                  قيد التنفيذ
                </span> : DesignProjectType === "pending" ? <span>
                  فى انتظار الموافقة
                </span> : DesignProjectType === "rejected" ? <span>
                  مرفوضة
                </span> : ""





                } </p>

            </p>

          </div>
          <div className='col-md-6 mb-2'>
            <p className='text-white'>  رقم الطلب  : <span> 0123</span> </p>

          </div>

          <div className='col-md-6  mb-2'>
            {DesignProjectType == "inProgress" ?
              <div className='d-flex align-items-center  gap-3'>


                <img className='pointer editIcon' onClick={() => { setEditRequest(true) }} src={process.env.PUBLIC_URL + "/icons/edit.png"} />


                <NavDropdown title={<svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none">
                  <path d="M2 16C0.89543 16 0 15.1046 0 14C0 12.8954 0.89543 12 2 12C3.10457 12 4 12.8954 4 14C4 15.1046 3.10457 16 2 16ZM2 10C0.89543 10 0 9.10457 0 8C0 6.89543 0.89543 6 2 6C3.10457 6 4 6.89543 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78929 2.53043 10 2 10ZM2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4Z" fill="white" />
                </svg>} className='fs-5 ' >

                  <NavDropdown.Item className='text-end  d-flex justify-content-between  align-items-center' href="#action/3.2">
                    <span>   المشروع</span>

                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-end  d-flex justify-content-between align-items-center' href="#action/3.3">
                    <span> العميل</span>

                  </NavDropdown.Item>
                  <NavDropdown.Item className='text-end  d-flex justify-content-between align-items-center' href="#action/3.3">
                    <span> الحسابات</span>

                  </NavDropdown.Item>



                </NavDropdown>
              </div>

              : DesignProjectType === "pending" ?

                <div className='d-flex gap-3'>
                  <img className='pointer confirm' onClick={() => {
                    setAcceptRequest(true)


                  }

                  } src={process.env.PUBLIC_URL + "/icons/confirm.png"} />
                  <img className='pointer declince'

                    onClick={() => {
                      setRefuseRequest(true)


                    }}

                    src={process.env.PUBLIC_URL + "/icons/declince.png"} />
                  <img className='pointer ' onClick={() => { setEditRequest(true) }} src={process.env.PUBLIC_URL + "/icons/editIcon.png"} />

                </div> : DesignProjectType === "rejected" ?
                  <div className='d-flex gap-3'>
                    <img className='pointer confirm' onClick={() => {
                      setAcceptRequest(true)


                    }

                    } src={process.env.PUBLIC_URL + "/icons/confirm.png"} />

                    <img className='pointer ' onClick={() => { setEditRequest(true) }} src={process.env.PUBLIC_URL + "/icons/editIcon.png"} />

                    <img className='pointer delete-icon'

                      onClick={() => {
                        setDeleteRequest(true)


                      }}

                      src={process.env.PUBLIC_URL + "/icons/deleteRequest.png"} />
                  </div>


                  : ""
            }

          </div>


        </div>

      </div>
      <fieldset className='border-golden my-4'>
        <legend className='text-center'>بيانات المشروع</legend>
        <div className='row px-2'>
          <div className='col-md-6 mt-2'>
            <p className='text-white'>اسم المالك : <span>BSA</span></p>
          </div>
          <div className='col-md-6 mt-2'>
            <p className='text-white'> موقع المشروع : <span>السعودية</span></p>
          </div>
          <div className='col-md-6 mt-2'>
            <p className='text-white'> المدينة  : <span>السعودية</span></p>
          </div>
          <div className='col-md-6 mt-2'>
            <p className='text-white'> الحي  : <span>السعودية</span></p>
          </div>
          <div className='col-md-6 mt-2'>
            <p className='text-white'> رقم القطعة  : <span>___  </span></p>
          </div>
          <div className='col-md-6 mt-2'>
            <p className='text-white'> رقم المخطط   : <span>___  </span></p>
          </div>
          <div className='col-md-6 mt-2'>
            <p className='text-white'>  نوع المشروع : <span>التصميم  </span></p>
          </div>
        </div>
      </fieldset>

      <fieldset className='border-golden my-4'>
        <legend className='text-center'>بيانات المالك</legend>
        <div className='row px-2'>
          <div className='col-md-6 mt-3'>
            <p className='text-white'> نوع العميل  : <span>BSA</span></p>
          </div>
          <div className='col-md-6 mt-3'>
            <p className='text-white'>    رقم الشهادة الضربية      : <span>     ــــــــــ </span></p>
          </div>
          <div className='col-md-6 mt-3'>
            <p className='text-white'>  نوع الهوية     : <span></span></p>
          </div>
          <div className='col-md-6 mt-3'>
            <p className='text-white'> البريد الالكتروني  : <span> </span></p>
          </div>
          <div className='col-md-6 mt-3 mb-3'>
            <img className='pointer instrutmentimg ' onClick={() => { setShowImg(true) }} src={imgSrc} alt='owner img' />

            <p className='text-white'>  صورة الهوية   </p>
          </div>

          <div className='col-md-6 mt-3'>
            <p className='text-white'>  رقم الجوال   : <span>  </span></p>
          </div>

        </div>
      </fieldset>
      <fieldset className='border-golden my-4'>
        <legend className='text-center'>بيانات الوكيل</legend>
        <div className='row px-2'>
          <div className='col-md-6 mt-3'>
            <p className='text-white'> نوع العميل  : <span>BSA</span></p>
          </div>
          <div className='col-md-6 mt-3'>
            <p className='text-white'>   رقم الوكالة     : <span>     ــــــــــ </span></p>
          </div>
          <div className='col-md-6 mt-3'>
            <p className='text-white'>   اسم الصك     : <span></span></p>
          </div>
          <div className='col-md-6 mt-3'>
            <p className='text-white'> رقم الصك   : <span> </span></p>
          </div>
          <div className='col-md-6 mt-3 mb-3'>
            <img className='pointer instrutmentimg' onClick={() => { setShowImg(true) }} src={imgSrc} alt='owner img' />

            <p className='text-white'>  صورة الصك   </p>
          </div>

          <div className='col-md-6 mt-3 mb-3'>
            <img className='pointer instrutmentimg' onClick={() => { setShowImg(true) }} src={imgSrc} alt='owner img' />

            <p className='text-white'>  صورة الوكالة   </p>
          </div>

        </div>
      </fieldset>

      <div className='my-3 mx-2 d-flex justify-content-end'>
        <Button
          onClick={() => {
            setShowProject(false)

          }}
          className='sumbmitAddUpdateUser'>موافق</Button>
      </div>

    </div>

  )
}
export default ShowDesignRequest