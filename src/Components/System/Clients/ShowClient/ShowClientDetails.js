import React, { useState } from 'react'
import { Image, Modal } from 'react-bootstrap'
import "./index.css"
import DataTableComponent from '../../../DataTableComponent'
const ShowClientDetails = ({showProject, setShowProject}) => {
  const [showImg, setShowImg] = useState(false)
  const [ModalImgSrc, setModalImgSrc] = useState(false)
  const [identityImage, setIdentityImage] = useState(`${process.env.PUBLIC_URL}/icons/show.png`)
  const [instrumentImage, setInstrumentImage] = useState(`${process.env.PUBLIC_URL}/icons/show.png`)
  const [agencyImage, setAgencyImage] = useState(`${process.env.PUBLIC_URL}/icons/show.png`)
  const [clientStatusType, setClientStatusType] = useState("معلومات المشروع")

  console.log(clientStatusType)
  const ClientDetailsTable = Array.from({ length: 2 }).map((_, index) => {
    return {

      amount: 'BSA',
      Payments: '53543',
      PaymentType: 'تصميم',
      DeliverDate: '12-10-2023',
      status: <div className='d-flex flex-column gap-1 my-1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
          <g clip-path="url(#clip0_667_12027)">
            <path d="M9.5013 18.2082C7.19251 18.2056 4.97903 17.2872 3.34646 15.6547C1.7139 14.0221 0.795577 11.8086 0.792969 9.49984C0.792969 9.28987 0.876376 9.08851 1.02484 8.94004C1.17331 8.79158 1.37467 8.70817 1.58464 8.70817C1.7946 8.70817 1.99596 8.79158 2.14443 8.94004C2.29289 9.08851 2.3763 9.28987 2.3763 9.49984C2.3763 10.909 2.79418 12.2866 3.57708 13.4583C4.35999 14.63 5.47276 15.5432 6.77468 16.0825C8.07661 16.6218 9.50921 16.7629 10.8913 16.4879C12.2734 16.213 13.543 15.5344 14.5394 14.538C15.5359 13.5415 16.2145 12.272 16.4894 10.8899C16.7643 9.50774 16.6232 8.07514 16.0839 6.77322C15.5447 5.47129 14.6314 4.35852 13.4597 3.57562C12.288 2.79271 10.9105 2.37484 9.5013 2.37484C9.29134 2.37484 9.08998 2.29143 8.94151 2.14296C8.79304 1.9945 8.70963 1.79313 8.70963 1.58317C8.70963 1.37321 8.79304 1.17184 8.94151 1.02338C9.08998 0.874911 9.29134 0.791504 9.5013 0.791504C11.8109 0.791504 14.0259 1.70899 15.659 3.34212C17.2922 4.97524 18.2096 7.19024 18.2096 9.49984C18.2096 11.8094 17.2922 14.0244 15.659 15.6576C14.0259 17.2907 11.8109 18.2082 9.5013 18.2082Z" fill="#8C8C8C" />
            <path d="M9.50134 18.2082C8.62938 18.2088 7.76224 18.0787 6.92881 17.8224C6.72808 17.7606 6.5601 17.6216 6.46183 17.436C6.36357 17.2504 6.34307 17.0334 6.40484 16.8326C6.4666 16.6319 6.60559 16.4639 6.7912 16.3656C6.97682 16.2674 7.19388 16.2469 7.39461 16.3086C8.07702 16.5191 8.78721 16.6257 9.50134 16.6248C9.7113 16.6248 9.91267 16.7082 10.0611 16.8567C10.2096 17.0052 10.293 17.2065 10.293 17.4165C10.293 17.6265 10.2096 17.8278 10.0611 17.9763C9.91267 18.1248 9.7113 18.2082 9.50134 18.2082ZM4.40267 16.3481C4.21581 16.348 4.03502 16.2817 3.89241 16.161C3.00094 15.4123 2.26934 14.4918 1.74123 13.4543C1.69397 13.3617 1.66542 13.2608 1.65719 13.1572C1.64897 13.0536 1.66123 12.9494 1.69328 12.8505C1.72533 12.7517 1.77655 12.6601 1.844 12.581C1.91145 12.502 1.99382 12.437 2.08639 12.3897C2.179 12.3424 2.28002 12.3139 2.38367 12.3056C2.48733 12.2974 2.5916 12.3097 2.6905 12.3418C2.78941 12.3739 2.88102 12.4251 2.9601 12.4927C3.03917 12.5602 3.10416 12.6426 3.15135 12.7353C3.58423 13.5845 4.18341 14.338 4.91328 14.951C5.03752 15.0556 5.12658 15.1959 5.16838 15.3528C5.21018 15.5098 5.2027 15.6758 5.14694 15.8283C5.09119 15.9808 4.98987 16.1125 4.85672 16.2055C4.72358 16.2985 4.56507 16.3482 4.40267 16.3481ZM1.69867 11.6421C1.51205 11.6423 1.33139 11.5764 1.18869 11.4561C1.04599 11.3358 0.950455 11.1689 0.918993 10.985C0.722642 9.83765 0.756009 8.66275 1.01716 7.52841C1.05808 7.35485 1.15605 7.20004 1.29537 7.08875C1.4347 6.97746 1.60733 6.91612 1.78564 6.91456C1.84724 6.91441 1.90864 6.92167 1.96851 6.9362C2.17277 6.98374 2.34979 7.11046 2.46063 7.2885C2.57147 7.46654 2.60706 7.68131 2.55956 7.88558C2.34586 8.81472 2.31879 9.77704 2.47993 10.7167C2.51504 10.9236 2.46673 11.1359 2.34558 11.3072C2.22443 11.4785 2.04033 11.5947 1.83361 11.6305C1.78902 11.6381 1.74389 11.6419 1.69867 11.6421ZM3.09569 5.63813C2.94963 5.63805 2.80644 5.59757 2.68196 5.52117C2.55748 5.44478 2.45655 5.33544 2.39033 5.20526C2.32412 5.07507 2.2952 4.92911 2.30678 4.78351C2.31836 4.63791 2.36999 4.49836 2.45594 4.38027C2.96931 3.67581 3.58478 3.05176 4.28206 2.52869C4.4188 2.42556 4.58548 2.3699 4.75676 2.3702C4.92296 2.37005 5.085 2.42223 5.21989 2.51933C5.35478 2.61644 5.45568 2.75354 5.50829 2.9112C5.5609 3.06886 5.56254 3.23908 5.51299 3.39773C5.46344 3.55637 5.3652 3.6954 5.23221 3.79509C4.6608 4.22368 4.15658 4.7352 3.73624 5.31271C3.66248 5.41339 3.56607 5.4953 3.4548 5.55183C3.34353 5.60836 3.22049 5.63791 3.09569 5.63813ZM7.5979 2.60525C7.40455 2.60516 7.21792 2.53431 7.07322 2.40608C6.92851 2.27784 6.83574 2.10109 6.8124 1.90915C6.78906 1.71722 6.83677 1.52338 6.94652 1.3642C7.05627 1.20502 7.22048 1.09151 7.40817 1.04508C8.09308 0.876275 8.79593 0.791127 9.50134 0.791505C9.7113 0.791505 9.91267 0.874913 10.0611 1.02338C10.2096 1.17185 10.293 1.37321 10.293 1.58317C10.293 1.79313 10.2096 1.9945 10.0611 2.14296C9.91267 2.29143 9.7113 2.37484 9.50134 2.37484C8.92412 2.3744 8.34898 2.44398 7.78851 2.58203C7.72615 2.5974 7.66212 2.60522 7.5979 2.60525Z" fill="#8C8C8C" />
            <path d="M8.44474 12.403C8.23488 12.4025 8.03371 12.3191 7.88503 12.171L5.77405 10.0596C5.69945 9.98639 5.64011 9.89907 5.59944 9.80275C5.55877 9.70643 5.53759 9.603 5.53712 9.49845C5.53664 9.3939 5.55689 9.29028 5.59668 9.1936C5.63647 9.09691 5.69503 9.00907 5.76896 8.93513C5.84289 8.8612 5.93073 8.80265 6.02742 8.76286C6.12411 8.72307 6.22772 8.70282 6.33227 8.70329C6.43683 8.70377 6.54025 8.72495 6.63657 8.76562C6.7329 8.80628 6.82021 8.86563 6.89347 8.94023L8.44471 10.4919L12.1074 6.82885C12.2563 6.68262 12.4569 6.60111 12.6656 6.60206C12.8743 6.603 13.0742 6.68633 13.2218 6.8339C13.3693 6.98147 13.4526 7.18135 13.4536 7.39004C13.4545 7.59874 13.373 7.79937 13.2268 7.94827L9.00445 12.171C8.85577 12.3191 8.6546 12.4025 8.44474 12.403Z" fill="#136D01" />
          </g>
          <defs>
            <clipPath id="clip0_667_12027">
              <rect width="19" height="19" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>تم الدفع</p>


      </div>,


    }
  });
  // const { id } = useParams()


  const columns = [

    {
      name: ' القيمة',
      selector: row => row.amount,
    },
    {
      name: '  الدفعات ',
      selector: row => row.Payments,
    },
    {
      name: '    نوع الدفعة',
      selector: row => row.PaymentType,
    },
    {
      name: 'تاريخ الاستلام  ',
      selector: row => row.DeliverDate,
    },

    {
      name: '    الحالة',
      selector: row => row.status,
    },


  ];




  return (
    <>
      {showImg &&
        <Modal
          size="lg"
          show={showImg}
          onHide={() => setShowImg(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          className='d-flex align-items-center   showRequestImg'
        >
          <Image className='pointer w-100 h-100  instrutmentimg' src={ModalImgSrc} alt='owner img' />
        </Modal>}

      {
        showProject &&
        <Modal
          size="lg"
          show={showProject}
          onHide={() => setShowProject(false)}
          aria-labelledby=" example-modal-sizes-title-lg"
          className='systemModal ShowClientModal     '
        >   < div className='ShowClient' >

            <div className='d-flex justify-content-between  w-90 mx-auto'>
              <div className='d-flex gap-2 w-100'>
                <div
                  onClick={() => {
                    setClientStatusType("معلومات المشروع")
                  }}
                  className={`d-flex justify-content-center align-items-center w-25 pointer   my-3 ${clientStatusType === "معلومات المشروع" ? "edit-clint-header-golden" : "edit-clint-header-white"} `}>
                  <p className={`
                ${clientStatusType === "معلومات المشروع" ? "golden" : "text-white"}
                
                text-center`}> معلومات المشروع </p>
                </div>
                <div
                  onClick={() => {
                    setClientStatusType("الدفعات")
                  }}
                  className={` w-25 pointer d-flex justify-content-center align-items-center  my-3 ${clientStatusType === "الدفعات" ? "edit-clint-header-golden" : "edit-clint-header-white"} `}>
                  <p className={`
                ${clientStatusType === "الدفعات" ? "golden" : "text-white"}
                
                text-center`}


                  >  الدفعات </p>
                </div>
              </div>
              <div >
                <img className='pointer' src={process.env.PUBLIC_URL + "/Rejected.png"} alt='close'
                  onClick={() => { setShowProject(false) }}
                />
              </div>

            </div>

            {clientStatusType == "معلومات المشروع" ?

              <div>
                <div className='data-container w-90 m-auto border-golden p-3' >
                  <div className='row'>
                    <div className='col-md-6 mb-3'>
                      <p className='text-white'>اسم المشروع : <span className='main-text'>BSA</span></p>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <p className='text-white'> حالة المشروع : <span className='main-text'>قيد التنفيذ</span></p>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <p className='text-white'>  نوع المشروع :  <span className='main-text'> التصميم</span></p>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <p className='text-white'>  موقع المشروع:   <span className='main-text'> السعودية </span></p>
                    </div>

                    <div className='col-md-6 mb-3'>
                      <p className='text-white'>  المدينة  :   <span className='main-text'>  ـــــــ </span></p>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <p className='text-white'>  الحى   :   <span className='main-text'>  ـــــــ </span></p>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <p className='text-white'>  رقم المخطط :     <span className='main-text'>  ـــــــ </span></p>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <p className='text-white'>  رقم القطعه   :     <span className='main-text'>  ـــــــ </span></p>
                    </div>
                    <div className='col-md-12 mb-3'>
                      <p className='text-white'>  رقم الشهادة الضربية    :     <span className='main-text'>  ـــــــ </span></p>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <p className='text-white'>  الوكيل :     <span className='main-text'>  ـــــــ </span></p>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <p className='text-white'>       رقم الوكالة :     <span className='main-text'>  ـــــــ </span></p>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <p className='text-white'>        اسم الصك:   <span className='main-text'>  ـــــــ </span></p>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <p className='text-white'>       رقم الصك :<span className='main-text'>  ـــــــ </span></p>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <p className='text-white'>       تاريخ الأستلام :  <span className='main-text'>   2023 - 04 - 10 </span></p>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <p className='text-white'>       تاريخ الأستلام :  <span className='main-text'>  2023 - 05 - 10 </span></p>
                    </div>

                  </div>

                </div>
                <div className='data-container my-4 w-90 mx-auto border-golden p-3' >
                  <div className='row'>
                    <div className='col-md-4 mt-3'>
                      <img className='pointer instrutmentimg ' onClick={() => {
                        setShowImg(true)
                        setModalImgSrc(identityImage)

                      }} src={identityImage} alt='owner img' />

                      <p className='text-white'>  صورة الهوية   </p>
                    </div>
                    <div className='col-md-4 mt-3'>
                      <img className='pointer instrutmentimg ' onClick={() => {
                        setShowImg(true)
                        setModalImgSrc(instrumentImage)

                      }} src={instrumentImage} alt='owner img' />

                      <p className='text-white'>  صورة الصك   </p>
                    </div>
                    <div className='col-md-4 mt-3'>
                      <img className='pointer instrutmentimg ' onClick={() => {
                        setShowImg(true)
                        setModalImgSrc(agencyImage)

                      }} src={agencyImage} alt='owner img' />

                      <p className='text-white'>   صوره الوكالة   </p>
                    </div>

                  </div>
                </div>
              </div> : <div>

                <div className='border-golden w-90 mx-auto '>
                  <div className='row p-3'>

                    <div className='col-md-6'>
                      <p className='text-white' >
                        المبلغ الاجمالى : <span className='main-text'> 3000 ريال</span>
                      </p>
                    </div>
                    <div className='col-md-6'>
                      <p className='text-white'>
                        عدد الدفعات المتفق عليها :
                        <span className='main-text'> 4 دفعات </span>

                      </p>
                    </div>
                    <div className='col-md-6'>
                      <p className='text-white'>
                        المبلغ المتبقى :
                        <span className='main-text'>  1500 ريال</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='py-3     w-90  mx-auto '>
                  <DataTableComponent className={" border-golden  datatableComponent"} columns={columns} data={ClientDetailsTable} />
                </div>
              </div>

            }


          </div >
        </Modal>


      }


    </>


  )
}

export default ShowClientDetails


