import React from 'react'
import style from "./EmployeesManagment.module.css"
import { Container, Image } from 'react-bootstrap'

import ProgressBar from 'react-bootstrap/ProgressBar';
const EmployeesManagment = () => {





    return (
        <div className={`${style.AllEmployees} p-4  `}>

            <Container className='mx-auto '>
                <div className='row '>

                    <div className='col-md-4 mb-3'>
                        <div className={`   ${style.EmployeesSystemCard} `}>
                            <div className='d-flex justify-content-between w-90 h-100 align-items-center mx-2'>
                                <div>   <p className='text-white text-bold text-xl'>عدد الموظفين</p></div>
                                <div className='d-flex flex-column'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="36" viewBox="0 0 59 36" fill="none">
                                        <path d="M54.354 25.5528L50.369 23.7168L49.9622 22.7956C51.322 21.4364 52.2314 19.3649 52.4126 17.3321H53.369C53.5957 17.3321 53.813 17.2421 53.9733 17.0818C54.1336 16.9215 54.2236 16.7042 54.2236 16.4775C54.2236 16.2509 54.1336 16.0335 53.9733 15.8732C53.813 15.713 53.5957 15.6229 53.369 15.6229H53.2412C53.1541 13.8057 52.7802 12.3617 52.1041 11.2281C51.3426 9.94971 50.2138 9.10047 48.7435 8.69574C48.6761 8.28523 48.4652 7.91197 48.1483 7.64242C47.8314 7.37287 47.4292 7.22452 47.0132 7.22379H46.0802C45.6633 7.22454 45.2602 7.37354 44.943 7.64416C44.6259 7.91478 44.4153 8.28937 44.349 8.70098C41.566 9.47011 40.0629 11.7929 39.873 15.6229H39.7449C39.5183 15.6229 39.3009 15.713 39.1406 15.8732C38.9804 16.0335 38.8903 16.2509 38.8903 16.4775C38.8903 16.7042 38.9804 16.9215 39.1406 17.0818C39.3009 17.2421 39.5183 17.3321 39.7449 17.3321H40.7009C40.8459 18.919 41.3945 20.4424 42.2945 21.7574C42.5495 22.1271 42.8369 22.4734 43.1533 22.7923L42.745 23.7168L40.9655 24.5362C40.357 24.0013 39.6742 23.5573 38.9384 23.2181L33.8195 20.8592L33.2065 19.4705C33.6407 19.0474 34.0322 18.5826 34.3756 18.0829C35.5312 16.3941 36.2183 14.4291 36.3668 12.3881H37.7861C38.0127 12.3881 38.2301 12.2981 38.3904 12.1378C38.5506 11.9776 38.6407 11.7602 38.6407 11.5335C38.6407 11.3069 38.5506 11.0895 38.3904 10.9293C38.2301 10.769 38.0127 10.679 37.7861 10.679H37.4073C37.3188 8.31596 36.8542 6.4542 35.9921 5.00961C35.0336 3.40286 33.6004 2.35081 31.7276 1.87212C31.6964 1.36582 31.4735 0.890428 31.1042 0.542651C30.7349 0.194875 30.247 0.000833932 29.7397 0H28.6003C28.0932 0.000848274 27.6054 0.194776 27.2362 0.542358C26.867 0.889941 26.644 1.36509 26.6125 1.87121C23.0342 2.78129 21.1274 5.73931 20.9337 10.679H20.5539C20.3273 10.679 20.1099 10.769 19.9496 10.9293C19.7894 11.0895 19.6993 11.3069 19.6993 11.5335C19.6993 11.7602 19.7894 11.9776 19.9496 12.1378C20.1099 12.2981 20.3273 12.3881 20.5539 12.3881H21.9732C22.1217 14.4291 22.8088 16.3941 23.9644 18.0829C24.3078 18.5826 24.6993 19.0474 25.1335 19.4705L24.5205 20.8592L19.4015 23.2181C18.6658 23.5573 17.9832 24.0013 17.3747 24.5361L15.595 23.7167L15.188 22.7951C16.5483 21.436 17.4576 19.3649 17.6387 17.3321H18.5951C18.8217 17.3321 19.0391 17.2421 19.1994 17.0818C19.3596 16.9215 19.4497 16.7042 19.4497 16.4775C19.4497 16.2509 19.3596 16.0335 19.1994 15.8732C19.0391 15.713 18.8217 15.6229 18.5951 15.6229H18.4672C18.3802 13.805 18.0061 12.3609 17.3299 11.2276C16.9677 10.6067 16.4861 10.0637 15.913 9.62983C15.3399 9.19593 14.6866 8.87975 13.9908 8.6995C13.9241 8.2882 13.7135 7.91398 13.3964 7.64367C13.0793 7.37335 12.6765 7.22453 12.2598 7.22379H11.3268C10.9112 7.22452 10.5092 7.37263 10.1924 7.64178C9.87564 7.91093 9.66456 8.28369 9.5967 8.6938C8.89658 8.87233 8.23895 9.18827 7.66204 9.62326C7.08513 10.0583 6.60046 10.6036 6.23623 11.2276C5.56008 12.3609 5.18599 13.805 5.09905 15.6229H4.97098C4.74433 15.6229 4.52696 15.713 4.36669 15.8732C4.20643 16.0335 4.11639 16.2509 4.11639 16.4775C4.11639 16.7042 4.20643 16.9215 4.36669 17.0818C4.52696 17.2421 4.74433 17.3321 4.97098 17.3321H5.92721C6.0721 18.919 6.62054 20.4424 7.52039 21.7574C7.77549 22.1271 8.06293 22.4734 8.37931 22.7923L7.97093 23.7168L3.98592 25.5527C2.79751 26.1028 1.791 26.981 1.08485 28.0838C0.378703 29.1867 0.00231796 30.4683 0 31.7779L0 35.145C0 35.3716 0.0900369 35.589 0.250304 35.7492C0.41057 35.9095 0.627939 35.9995 0.85459 35.9995H6.25104C6.254 35.9995 6.25674 36 6.25981 36C6.26289 36 6.26563 35.9995 6.26859 35.9995H20.7646C20.7676 35.9995 20.7703 36 20.7734 36C20.7764 36 20.7792 35.9995 20.7821 35.9995H37.8564C37.8594 35.9995 37.8621 36 37.8652 36C37.8682 36 37.871 35.9995 37.8739 35.9995H53.4227C53.4257 35.9995 53.4285 36 53.4315 36C53.4344 36 53.4374 35.9995 53.4404 35.9995H57.4854C57.7121 35.9995 57.9294 35.9095 58.0897 35.7492C58.25 35.589 58.34 35.3716 58.34 35.145V31.7779C58.3377 30.4683 57.9613 29.1867 57.2551 28.0839C56.5489 26.981 55.5424 26.1029 54.354 25.5528ZM41.5832 15.6227C41.7293 12.8631 42.6153 11.2063 44.3247 10.5126V10.927C44.3247 11.1537 44.4148 11.371 44.575 11.5313C44.7353 11.6916 44.9527 11.7816 45.1793 11.7816C45.406 11.7816 45.6233 11.6916 45.7836 11.5313C45.9439 11.371 46.0339 11.1537 46.0339 10.927V8.97923C46.0339 8.96697 46.0388 8.95522 46.0475 8.94655C46.0562 8.93789 46.0679 8.933 46.0802 8.93297H47.0132C47.0254 8.933 47.0372 8.93789 47.0458 8.94655C47.0545 8.95522 47.0594 8.96697 47.0594 8.97923V10.927C47.0594 11.1537 47.1495 11.371 47.3097 11.5313C47.47 11.6916 47.6874 11.7816 47.914 11.7816C48.1407 11.7816 48.358 11.6916 48.5183 11.5313C48.6786 11.371 48.7686 11.1537 48.7686 10.927V10.5045C49.5547 10.8096 50.2133 11.3735 50.6359 12.1032C51.1569 12.9768 51.4517 14.1334 51.5306 15.6227H48.911C49.0323 15.251 49.0637 14.8558 49.0029 14.4696C48.9421 14.0834 48.7906 13.717 48.561 13.4006C48.3313 13.0842 48.03 12.8266 47.6817 12.649C47.3333 12.4714 46.9479 12.3788 46.5569 12.3788C46.1659 12.3788 45.7805 12.4714 45.4322 12.649C45.0838 12.8266 44.7825 13.0842 44.5529 13.4006C44.3232 13.717 44.1718 14.0834 44.1109 14.4696C44.0501 14.8558 44.0816 15.251 44.2028 15.6227H41.5832ZM47.3239 14.8558C47.3237 15.0584 47.2434 15.2527 47.1005 15.3963C46.9577 15.54 46.7638 15.6213 46.5612 15.6227H46.5525C46.401 15.6218 46.2532 15.5761 46.1277 15.4913C46.0022 15.4064 45.9046 15.2864 45.8473 15.1462C45.7899 15.006 45.7754 14.8519 45.8055 14.7035C45.8356 14.555 45.909 14.4188 46.0164 14.312C46.1238 14.2052 46.2605 14.1326 46.4091 14.1034C46.5577 14.0742 46.7117 14.0896 46.8515 14.1478C46.9914 14.206 47.1109 14.3043 47.195 14.4303C47.279 14.5563 47.3239 14.7044 47.3239 14.8558ZM42.4174 17.3321H50.6964C50.4002 20.1078 48.4958 22.6349 46.5568 22.6349C44.6178 22.6349 42.7137 20.1077 42.4174 17.3321ZM48.7901 24.3728C48.4261 25.1442 47.7329 25.7003 46.9545 25.8209C45.9012 25.9835 44.8439 25.3788 44.3297 24.359L44.5582 23.8417C45.1728 24.1715 45.8594 24.3441 46.5569 24.3441C47.2544 24.344 47.941 24.1713 48.5555 23.8414L48.7901 24.3728ZM26.6062 3.65309V4.4989C26.6062 4.72555 26.6963 4.94292 26.8565 5.10319C27.0168 5.26346 27.2342 5.35349 27.4608 5.35349C27.6875 5.35349 27.9048 5.26346 28.0651 5.10319C28.2254 4.94292 28.3154 4.72555 28.3154 4.4989V1.99382C28.3155 1.91829 28.3455 1.84589 28.3989 1.79249C28.4523 1.73908 28.5248 1.70904 28.6003 1.70895H29.7397C29.8153 1.70904 29.8877 1.73908 29.9411 1.79249C29.9945 1.84589 30.0245 1.91829 30.0246 1.99382V4.4989C30.0246 4.72555 30.1146 4.94292 30.2749 5.10319C30.4352 5.26346 30.6525 5.35349 30.8792 5.35349C31.1058 5.35349 31.3232 5.26346 31.4835 5.10319C31.6437 4.94292 31.7338 4.72555 31.7338 4.4989V3.65275C32.9101 4.02233 33.9056 4.81873 34.5243 5.88527C35.2298 7.06746 35.6161 8.64127 35.6983 10.6785H31.817C32.0173 10.2359 32.1035 9.7502 32.0677 9.26572C32.0318 8.78124 31.8751 8.31347 31.6118 7.90522C31.3485 7.49696 30.987 7.16124 30.5604 6.92876C30.1339 6.69629 29.6558 6.57448 29.17 6.57448C28.6842 6.57448 28.2061 6.69629 27.7796 6.92876C27.353 7.16124 26.9915 7.49696 26.7282 7.90522C26.4649 8.31347 26.3082 8.78124 26.2723 9.26572C26.2365 9.7502 26.3227 10.2359 26.5231 10.6785H22.6416C22.7989 6.75776 24.0756 4.49093 26.6062 3.65309ZM30.3664 9.48253C30.366 9.79853 30.2407 10.1016 30.0179 10.3256C29.795 10.5496 29.4926 10.6765 29.1766 10.6785H29.1634C28.9271 10.6772 28.6964 10.6059 28.5006 10.4736C28.3047 10.3413 28.1524 10.154 28.0629 9.93528C27.9734 9.71655 27.9507 9.47621 27.9976 9.24458C28.0446 9.01295 28.1591 8.80042 28.3267 8.6338C28.4943 8.46718 28.7075 8.35393 28.9394 8.30835C29.1713 8.26277 29.4115 8.2869 29.6297 8.3777C29.8479 8.46849 30.0343 8.62188 30.1654 8.8185C30.2966 9.01513 30.3665 9.24619 30.3664 9.48253ZM23.6879 12.3881H34.6521C34.4519 14.7092 33.3004 17.195 31.682 18.541C31.6448 18.5672 31.6097 18.5964 31.5772 18.6282C30.8506 19.203 30.0342 19.548 29.17 19.548C28.3058 19.548 27.4894 19.203 26.7628 18.6282C26.7303 18.5964 26.6952 18.5672 26.658 18.541C25.0396 17.195 23.8881 14.7092 23.6879 12.3881ZM32.2429 21.5197C31.7642 22.6122 30.7981 23.4059 29.7074 23.5749C28.2443 23.8017 26.7762 22.9439 26.1017 21.5093L26.5331 20.5321C27.3308 21.0067 28.2418 21.2572 29.17 21.2572C30.0982 21.2572 31.0092 21.0067 31.8069 20.5321L32.2429 21.5197ZM6.8096 15.623C6.88845 14.1333 7.18323 12.9763 7.70407 12.1034C8.12766 11.3742 8.78593 10.8102 9.57141 10.5035V10.927C9.57141 11.1537 9.66144 11.371 9.82171 11.5313C9.98198 11.6916 10.1993 11.7816 10.426 11.7816C10.6526 11.7816 10.87 11.6916 11.0303 11.5313C11.1905 11.371 11.2806 11.1537 11.2806 10.927V10.148C11.4479 10.137 11.6154 10.1313 11.7831 10.1309C11.9632 10.1309 12.1363 10.1383 12.3061 10.1493V10.927C12.3061 11.1537 12.3961 11.371 12.5564 11.5313C12.7167 11.6916 12.934 11.7816 13.1607 11.7816C13.3873 11.7816 13.6047 11.6916 13.765 11.5313C13.9252 11.371 14.0153 11.1537 14.0153 10.927V10.5123C14.7919 10.8205 15.4423 11.3809 15.8622 12.1033C16.3829 12.9762 16.6777 14.1332 16.7567 15.6229H14.1371C14.2584 15.2512 14.2899 14.856 14.2291 14.4698C14.1683 14.0835 14.0169 13.7171 13.7872 13.4006C13.5576 13.0841 13.2563 12.8265 12.9079 12.6489C12.5596 12.4713 12.1741 12.3787 11.7831 12.3787C11.3921 12.3787 11.0066 12.4713 10.6582 12.6489C10.3099 12.8265 10.0086 13.0841 9.77893 13.4006C9.54929 13.7171 9.39787 14.0835 9.33706 14.4698C9.27626 14.856 9.30779 15.2512 9.42909 15.6229L6.8096 15.623ZM12.5502 14.856C12.5502 15.0077 12.5052 15.1559 12.4209 15.2821C12.3366 15.4082 12.2169 15.5065 12.0767 15.5645C11.9366 15.6226 11.7824 15.6378 11.6336 15.6082C11.4848 15.5786 11.3482 15.5056 11.2409 15.3983C11.1336 15.2911 11.0606 15.1544 11.031 15.0057C11.0014 14.8569 11.0166 14.7027 11.0746 14.5625C11.1326 14.4224 11.2309 14.3026 11.357 14.2183C11.4831 14.134 11.6314 14.089 11.7831 14.089C11.9864 14.0892 12.1814 14.1701 12.3251 14.3139C12.4689 14.4577 12.5499 14.6526 12.5502 14.856ZM7.64345 17.3322H15.9226C15.6263 20.1079 13.7219 22.635 11.783 22.635C9.84408 22.635 7.93971 20.1078 7.64345 17.3322ZM14.0162 24.3729C13.6521 25.1443 12.9589 25.7004 12.1805 25.821C11.1273 25.9836 10.0699 25.3789 9.55568 24.3591L9.78426 23.8418C10.3988 24.1717 11.0855 24.3443 11.7829 24.3442C12.4804 24.3441 13.167 24.1713 13.7815 23.8411L14.0162 24.3729ZM14.4925 30.8858V34.2905H7.11452V31.778C7.11452 31.5513 7.02448 31.334 6.86421 31.1737C6.70395 31.0134 6.48658 30.9234 6.25993 30.9234C6.03328 30.9234 5.81591 31.0134 5.65564 31.1737C5.49538 31.334 5.40534 31.5513 5.40534 31.778V34.2905H1.70918V31.778C1.71091 30.795 1.99344 29.833 2.5235 29.0051C3.05356 28.1773 3.80909 27.5181 4.70116 27.1052L8.22594 25.4814C9.02048 26.7607 10.3924 27.5564 11.8391 27.5564C12.0411 27.5564 12.2428 27.5409 12.4424 27.5099C13.0477 27.4101 13.6233 27.1771 14.1275 26.8276C14.6318 26.4782 15.0522 26.0211 15.3582 25.4895L16.1589 25.8581C15.079 27.3121 14.4946 29.0746 14.4925 30.8858ZM42.138 34.2905H38.7196V30.886C38.7196 30.6594 38.6296 30.442 38.4693 30.2817C38.3091 30.1215 38.0917 30.0314 37.8651 30.0314C37.6384 30.0314 37.421 30.1215 37.2608 30.2817C37.1005 30.442 37.0105 30.6594 37.0105 30.886V34.2905H21.6278V30.886C21.6278 30.6594 21.5378 30.442 21.3775 30.2817C21.2173 30.1215 20.9999 30.0314 20.7733 30.0314C20.5466 30.0314 20.3292 30.1215 20.169 30.2817C20.0087 30.442 19.9187 30.6594 19.9187 30.886V34.2905H16.2018V30.8858C16.2042 29.5994 16.574 28.3405 17.2676 27.2572C17.9611 26.1738 18.9497 25.3111 20.1169 24.7705L24.7604 22.6306C25.7056 24.2832 27.4248 25.3202 29.2403 25.3202C29.4843 25.3203 29.728 25.3015 29.9691 25.2641C31.5071 25.0257 32.8324 24.0471 33.5968 22.6387L38.2228 24.7706C39.3901 25.3112 40.3786 26.1739 41.0722 27.2572C41.7658 28.3406 42.1355 29.5995 42.138 30.8858V34.2905ZM56.6307 34.2905H54.2859V31.778C54.2859 31.5513 54.1959 31.334 54.0356 31.1737C53.8754 31.0134 53.658 30.9234 53.4314 30.9234C53.2047 30.9234 52.9873 31.0134 52.8271 31.1737C52.6668 31.334 52.5768 31.5513 52.5768 31.778V34.2905H43.8473V30.8858C43.8452 29.0747 43.2611 27.3121 42.1812 25.8582L42.9998 25.4813C43.7942 26.7606 45.1662 27.5564 46.6131 27.5564C46.815 27.5564 47.0167 27.5409 47.2162 27.5099C47.8215 27.4101 48.3971 27.1771 48.9013 26.8277C49.4056 26.4784 49.826 26.0213 50.1321 25.4897L53.6388 27.1054C54.5309 27.5183 55.2864 28.1774 55.8164 29.0051C56.3465 29.8329 56.629 30.7948 56.6308 31.7778L56.6307 34.2905Z" fill="white" />
                                    </svg>
                                    <p className='text-white text-xl text-center'>30 </p>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className='col-md-4'>
                        <div className={`   ${style.EmployeesSystemCard}  `}>
                            <div className='d-flex justify-content-between w-90 h-100 align-items-center mx-2'>
                                <div>    <p className='text-white text-bold text-xl'>موظفين متصلين</p></div>
                                <div className='d-flex flex-column'>
                                    <Image src={process.env.PUBLIC_URL + "/ConnectedUser.png"} alt='connected user' />
                                    <p className='text-white text-xl text-center'>20</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-4'>

                        <div className={`   ${style.EmployeesSystemCard}  `}>
                            <div className='d-flex justify-content-between w-90 h-100 align-items-center mx-2'>


                                <div>     <p className='text-white text-xl'> موظفين
                                    غير متصلين</p>

                                </div>


                                <div className='d-flex flex-column'>
                                    <Image src={process.env.PUBLIC_URL + "/disconnectedUser.png"} alt='connected user' />


                                    <p className='text-white text-xl text-center'>100</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <fieldset className={`${style.allServices} py-3`}>
                        <legend className='text-center'>كل الخدمات</legend>

                        <div className='d-flex  justify-content-between w-90 gap-3 mx-auto'>
                            <div className='d-flex  justify-content-center  gap-2'>
                                <div className={`${style.pdfbackground} `}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <g clip-path="url(#clip0_2650_24766)">
                                            <path d="M12.9842 15.7684H3.23463C3.04895 15.7684 2.89844 15.6178 2.89844 15.4322V0.975842C2.89844 0.790162 3.04895 0.639648 3.23463 0.639648H10.6309C10.7201 0.639648 10.8055 0.675083 10.8686 0.73812L13.222 3.09148C13.285 3.15451 13.3204 3.24004 13.3204 3.3292V7.36352C13.3204 7.5492 13.1699 7.69972 12.9842 7.69972C12.7986 7.69972 12.6481 7.5492 12.6481 7.36352V3.46845L10.4916 1.31204H3.57082V15.096H12.6481V13.415C12.6481 13.2294 12.7986 13.0788 12.9842 13.0788C13.1699 13.0788 13.3204 13.2294 13.3204 13.415V15.4322C13.3204 15.6178 13.1699 15.7684 12.9842 15.7684Z" fill="white" />
                                            <path d="M10.6246 17.7855H1.21119C1.02551 17.7855 0.875 17.635 0.875 17.4493V3.66539C0.875 3.47971 1.02551 3.3292 1.21119 3.3292H3.22836C3.41404 3.3292 3.56455 3.47971 3.56455 3.66539C3.56455 3.85107 3.41404 4.00158 3.22836 4.00158H1.54739V17.1131H10.2884V15.4322C10.2884 15.2465 10.439 15.096 10.6246 15.096C10.8103 15.096 10.9608 15.2465 10.9608 15.4322V17.4493C10.9608 17.635 10.8103 17.7855 10.6246 17.7855ZM12.978 3.66539H10.6246C10.439 3.66539 10.2884 3.51488 10.2884 3.3292V0.975842C10.2884 0.790162 10.439 0.639648 10.6246 0.639648C10.8103 0.639648 10.9608 0.790162 10.9608 0.975842V2.993H12.978C13.1636 2.993 13.3142 3.14352 13.3142 3.3292C13.3142 3.51488 13.1636 3.66539 12.978 3.66539Z" fill="white" />
                                            <path d="M17.016 13.7512H6.59401C6.40833 13.7512 6.25781 13.6007 6.25781 13.415V7.36354C6.25781 7.17786 6.40833 7.02734 6.59401 7.02734H17.016C17.2017 7.02734 17.3522 7.17786 17.3522 7.36354V13.415C17.3522 13.6007 17.2017 13.7512 17.016 13.7512ZM6.9302 13.0788H16.6798V7.69973H6.9302V13.0788Z" fill="white" />
                                            <path d="M7.93776 12.4064C7.75208 12.4064 7.60156 12.2558 7.60156 12.0702V8.70826C7.60156 8.52258 7.75208 8.37207 7.93776 8.37207H8.77824C9.42706 8.37207 9.95492 8.89993 9.95492 9.54875C9.95492 10.1976 9.42706 10.7254 8.77824 10.7254H8.27395V12.0702C8.27395 12.2558 8.12344 12.4064 7.93776 12.4064ZM8.27395 10.053H8.77824C9.05631 10.053 9.28253 9.82681 9.28253 9.54875C9.28253 9.27068 9.05631 9.04446 8.77824 9.04446H8.27395V10.053ZM11.535 12.4064H10.9635C10.7779 12.4064 10.6273 12.2558 10.6273 12.0702V8.70826C10.6273 8.52258 10.7779 8.37207 10.9635 8.37207H11.535C12.5176 8.37207 13.3169 9.1714 13.3169 10.1539V10.6246C13.3169 11.6071 12.5176 12.4064 11.535 12.4064ZM11.2997 11.734H11.535C12.1468 11.734 12.6445 11.2363 12.6445 10.6246V10.1539C12.6445 9.54216 12.1468 9.04446 11.535 9.04446H11.2997V11.734ZM14.3254 12.4064C14.1398 12.4064 13.9892 12.2558 13.9892 12.0702V8.70826C13.9892 8.52258 14.1398 8.37207 14.3254 8.37207H15.6702C15.8559 8.37207 16.0064 8.52258 16.0064 8.70826C16.0064 8.89394 15.8559 9.04446 15.6702 9.04446H14.6616V12.0702C14.6616 12.2558 14.5111 12.4064 14.3254 12.4064Z" fill="white" />
                                            <path d="M15.3366 10.7256H14.328C14.1424 10.7256 13.9918 10.5751 13.9918 10.3894C13.9918 10.2038 14.1424 10.0532 14.328 10.0532H15.3366C15.5222 10.0532 15.6728 10.2038 15.6728 10.3894C15.6728 10.5751 15.5222 10.7256 15.3366 10.7256ZM11.6384 6.3551H4.57838C4.3927 6.3551 4.24219 6.20459 4.24219 6.01891C4.24219 5.83323 4.3927 5.68271 4.57838 5.68271H11.6384C11.8241 5.68271 11.9746 5.83323 11.9746 6.01891C11.9746 6.20459 11.8241 6.3551 11.6384 6.3551ZM11.6384 5.01033H4.57838C4.3927 5.01033 4.24219 4.85981 4.24219 4.67413C4.24219 4.48845 4.3927 4.33794 4.57838 4.33794H11.6384C11.8241 4.33794 11.9746 4.48845 11.9746 4.67413C11.9746 4.85981 11.8241 5.01033 11.6384 5.01033ZM7.94032 3.66555H4.57838C4.3927 3.66555 4.24219 3.51504 4.24219 3.32936C4.24219 3.14368 4.3927 2.99316 4.57838 2.99316H7.94032C8.126 2.99316 8.27651 3.14368 8.27651 3.32936C8.27651 3.51504 8.126 3.66555 7.94032 3.66555Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2650_24766">
                                                <rect width="17.2131" height="17.2131" fill="white" transform="translate(0.507812 0.606445)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className='text-white'>طلب اجازة</p>
                            </div>
                            <div className=' d-flex w-50 flex-column align-items-center justfiy-content-center gap-1'>
                                <ProgressBar className={`${style.employeeProgress} w-100`} dir='rtl' variant="warning" now={40} />
                                <p className='text-white text-sm'>نسبة 40% من الاجمالى العاملين</p>

                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 30 35" fill="none">
                                    <rect width="30" height="34.0909" rx="4.09091" fill="#136D01" />
                                    <path d="M22.4297 18.5459C22.2308 18.5459 22.04 18.6249 21.8994 18.7656C21.7587 18.9062 21.6797 19.097 21.6797 19.2959V22.2959C21.6797 22.4948 21.6007 22.6856 21.46 22.8262C21.3194 22.9669 21.1286 23.0459 20.9297 23.0459H10.4297C10.2308 23.0459 10.04 22.9669 9.89936 22.8262C9.75871 22.6856 9.67969 22.4948 9.67969 22.2959V19.2959C9.67969 19.097 9.60067 18.9062 9.46002 18.7656C9.31937 18.6249 9.1286 18.5459 8.92969 18.5459C8.73078 18.5459 8.54001 18.6249 8.39936 18.7656C8.25871 18.9062 8.17969 19.097 8.17969 19.2959V22.2959C8.17969 22.8926 8.41674 23.4649 8.8387 23.8869C9.26065 24.3088 9.83295 24.5459 10.4297 24.5459H20.9297C21.5264 24.5459 22.0987 24.3088 22.5207 23.8869C22.9426 23.4649 23.1797 22.8926 23.1797 22.2959V19.2959C23.1797 19.097 23.1007 18.9062 22.96 18.7656C22.8194 18.6249 22.6286 18.5459 22.4297 18.5459ZM15.1472 19.8284C15.2185 19.8967 15.3026 19.9502 15.3947 19.9859C15.4845 20.0256 15.5815 20.0461 15.6797 20.0461C15.7778 20.0461 15.8749 20.0256 15.9647 19.9859C16.0568 19.9502 16.1409 19.8967 16.2122 19.8284L19.2122 16.8284C19.3534 16.6872 19.4328 16.4956 19.4328 16.2959C19.4328 16.0962 19.3534 15.9046 19.2122 15.7634C19.071 15.6222 18.8794 15.5428 18.6797 15.5428C18.48 15.5428 18.2884 15.6222 18.1472 15.7634L16.4297 17.4884V10.2959C16.4297 10.097 16.3507 9.90622 16.21 9.76557C16.0694 9.62492 15.8786 9.5459 15.6797 9.5459C15.4808 9.5459 15.29 9.62492 15.1494 9.76557C15.0087 9.90622 14.9297 10.097 14.9297 10.2959V17.4884L13.2122 15.7634C13.1423 15.6935 13.0592 15.638 12.9679 15.6002C12.8765 15.5623 12.7786 15.5428 12.6797 15.5428C12.5808 15.5428 12.4829 15.5623 12.3915 15.6002C12.3001 15.638 12.2171 15.6935 12.1472 15.7634C12.0773 15.8333 12.0218 15.9163 11.9839 16.0077C11.9461 16.0991 11.9266 16.197 11.9266 16.2959C11.9266 16.3948 11.9461 16.4927 11.9839 16.5841C12.0218 16.6755 12.0773 16.7585 12.1472 16.8284L15.1472 19.8284Z" fill="white" />
                                </svg>
                            </div>

                        </div>
                        <div className='d-flex  mt-4 justify-content-between w-90 gap-3 mx-auto'>
                            <div className='d-flex  justify-content-center gap-2'>
                                <div className={`${style.pdfbackground} `}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <g clip-path="url(#clip0_2650_24766)">
                                            <path d="M12.9842 15.7684H3.23463C3.04895 15.7684 2.89844 15.6178 2.89844 15.4322V0.975842C2.89844 0.790162 3.04895 0.639648 3.23463 0.639648H10.6309C10.7201 0.639648 10.8055 0.675083 10.8686 0.73812L13.222 3.09148C13.285 3.15451 13.3204 3.24004 13.3204 3.3292V7.36352C13.3204 7.5492 13.1699 7.69972 12.9842 7.69972C12.7986 7.69972 12.6481 7.5492 12.6481 7.36352V3.46845L10.4916 1.31204H3.57082V15.096H12.6481V13.415C12.6481 13.2294 12.7986 13.0788 12.9842 13.0788C13.1699 13.0788 13.3204 13.2294 13.3204 13.415V15.4322C13.3204 15.6178 13.1699 15.7684 12.9842 15.7684Z" fill="white" />
                                            <path d="M10.6246 17.7855H1.21119C1.02551 17.7855 0.875 17.635 0.875 17.4493V3.66539C0.875 3.47971 1.02551 3.3292 1.21119 3.3292H3.22836C3.41404 3.3292 3.56455 3.47971 3.56455 3.66539C3.56455 3.85107 3.41404 4.00158 3.22836 4.00158H1.54739V17.1131H10.2884V15.4322C10.2884 15.2465 10.439 15.096 10.6246 15.096C10.8103 15.096 10.9608 15.2465 10.9608 15.4322V17.4493C10.9608 17.635 10.8103 17.7855 10.6246 17.7855ZM12.978 3.66539H10.6246C10.439 3.66539 10.2884 3.51488 10.2884 3.3292V0.975842C10.2884 0.790162 10.439 0.639648 10.6246 0.639648C10.8103 0.639648 10.9608 0.790162 10.9608 0.975842V2.993H12.978C13.1636 2.993 13.3142 3.14352 13.3142 3.3292C13.3142 3.51488 13.1636 3.66539 12.978 3.66539Z" fill="white" />
                                            <path d="M17.016 13.7512H6.59401C6.40833 13.7512 6.25781 13.6007 6.25781 13.415V7.36354C6.25781 7.17786 6.40833 7.02734 6.59401 7.02734H17.016C17.2017 7.02734 17.3522 7.17786 17.3522 7.36354V13.415C17.3522 13.6007 17.2017 13.7512 17.016 13.7512ZM6.9302 13.0788H16.6798V7.69973H6.9302V13.0788Z" fill="white" />
                                            <path d="M7.93776 12.4064C7.75208 12.4064 7.60156 12.2558 7.60156 12.0702V8.70826C7.60156 8.52258 7.75208 8.37207 7.93776 8.37207H8.77824C9.42706 8.37207 9.95492 8.89993 9.95492 9.54875C9.95492 10.1976 9.42706 10.7254 8.77824 10.7254H8.27395V12.0702C8.27395 12.2558 8.12344 12.4064 7.93776 12.4064ZM8.27395 10.053H8.77824C9.05631 10.053 9.28253 9.82681 9.28253 9.54875C9.28253 9.27068 9.05631 9.04446 8.77824 9.04446H8.27395V10.053ZM11.535 12.4064H10.9635C10.7779 12.4064 10.6273 12.2558 10.6273 12.0702V8.70826C10.6273 8.52258 10.7779 8.37207 10.9635 8.37207H11.535C12.5176 8.37207 13.3169 9.1714 13.3169 10.1539V10.6246C13.3169 11.6071 12.5176 12.4064 11.535 12.4064ZM11.2997 11.734H11.535C12.1468 11.734 12.6445 11.2363 12.6445 10.6246V10.1539C12.6445 9.54216 12.1468 9.04446 11.535 9.04446H11.2997V11.734ZM14.3254 12.4064C14.1398 12.4064 13.9892 12.2558 13.9892 12.0702V8.70826C13.9892 8.52258 14.1398 8.37207 14.3254 8.37207H15.6702C15.8559 8.37207 16.0064 8.52258 16.0064 8.70826C16.0064 8.89394 15.8559 9.04446 15.6702 9.04446H14.6616V12.0702C14.6616 12.2558 14.5111 12.4064 14.3254 12.4064Z" fill="white" />
                                            <path d="M15.3366 10.7256H14.328C14.1424 10.7256 13.9918 10.5751 13.9918 10.3894C13.9918 10.2038 14.1424 10.0532 14.328 10.0532H15.3366C15.5222 10.0532 15.6728 10.2038 15.6728 10.3894C15.6728 10.5751 15.5222 10.7256 15.3366 10.7256ZM11.6384 6.3551H4.57838C4.3927 6.3551 4.24219 6.20459 4.24219 6.01891C4.24219 5.83323 4.3927 5.68271 4.57838 5.68271H11.6384C11.8241 5.68271 11.9746 5.83323 11.9746 6.01891C11.9746 6.20459 11.8241 6.3551 11.6384 6.3551ZM11.6384 5.01033H4.57838C4.3927 5.01033 4.24219 4.85981 4.24219 4.67413C4.24219 4.48845 4.3927 4.33794 4.57838 4.33794H11.6384C11.8241 4.33794 11.9746 4.48845 11.9746 4.67413C11.9746 4.85981 11.8241 5.01033 11.6384 5.01033ZM7.94032 3.66555H4.57838C4.3927 3.66555 4.24219 3.51504 4.24219 3.32936C4.24219 3.14368 4.3927 2.99316 4.57838 2.99316H7.94032C8.126 2.99316 8.27651 3.14368 8.27651 3.32936C8.27651 3.51504 8.126 3.66555 7.94032 3.66555Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2650_24766">
                                                <rect width="17.2131" height="17.2131" fill="white" transform="translate(0.507812 0.606445)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className='text-white'>طلب توظيف </p>
                            </div>
                            <div className=' d-flex w-50 flex-column align-items-center justfiy-content-center gap-1'>
                                <ProgressBar className={`${style.employeeProgress} w-100`} dir='rtl' variant="warning" now={37} />
                                <p className='text-white text-sm'> نسبة 37% من الاجمالى العاملين  </p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 30 35" fill="none">
                                    <rect width="30" height="34.0909" rx="4.09091" fill="#136D01" />
                                    <path d="M22.4297 18.5459C22.2308 18.5459 22.04 18.6249 21.8994 18.7656C21.7587 18.9062 21.6797 19.097 21.6797 19.2959V22.2959C21.6797 22.4948 21.6007 22.6856 21.46 22.8262C21.3194 22.9669 21.1286 23.0459 20.9297 23.0459H10.4297C10.2308 23.0459 10.04 22.9669 9.89936 22.8262C9.75871 22.6856 9.67969 22.4948 9.67969 22.2959V19.2959C9.67969 19.097 9.60067 18.9062 9.46002 18.7656C9.31937 18.6249 9.1286 18.5459 8.92969 18.5459C8.73078 18.5459 8.54001 18.6249 8.39936 18.7656C8.25871 18.9062 8.17969 19.097 8.17969 19.2959V22.2959C8.17969 22.8926 8.41674 23.4649 8.8387 23.8869C9.26065 24.3088 9.83295 24.5459 10.4297 24.5459H20.9297C21.5264 24.5459 22.0987 24.3088 22.5207 23.8869C22.9426 23.4649 23.1797 22.8926 23.1797 22.2959V19.2959C23.1797 19.097 23.1007 18.9062 22.96 18.7656C22.8194 18.6249 22.6286 18.5459 22.4297 18.5459ZM15.1472 19.8284C15.2185 19.8967 15.3026 19.9502 15.3947 19.9859C15.4845 20.0256 15.5815 20.0461 15.6797 20.0461C15.7778 20.0461 15.8749 20.0256 15.9647 19.9859C16.0568 19.9502 16.1409 19.8967 16.2122 19.8284L19.2122 16.8284C19.3534 16.6872 19.4328 16.4956 19.4328 16.2959C19.4328 16.0962 19.3534 15.9046 19.2122 15.7634C19.071 15.6222 18.8794 15.5428 18.6797 15.5428C18.48 15.5428 18.2884 15.6222 18.1472 15.7634L16.4297 17.4884V10.2959C16.4297 10.097 16.3507 9.90622 16.21 9.76557C16.0694 9.62492 15.8786 9.5459 15.6797 9.5459C15.4808 9.5459 15.29 9.62492 15.1494 9.76557C15.0087 9.90622 14.9297 10.097 14.9297 10.2959V17.4884L13.2122 15.7634C13.1423 15.6935 13.0592 15.638 12.9679 15.6002C12.8765 15.5623 12.7786 15.5428 12.6797 15.5428C12.5808 15.5428 12.4829 15.5623 12.3915 15.6002C12.3001 15.638 12.2171 15.6935 12.1472 15.7634C12.0773 15.8333 12.0218 15.9163 11.9839 16.0077C11.9461 16.0991 11.9266 16.197 11.9266 16.2959C11.9266 16.3948 11.9461 16.4927 11.9839 16.5841C12.0218 16.6755 12.0773 16.7585 12.1472 16.8284L15.1472 19.8284Z" fill="white" />
                                </svg>
                            </div>

                        </div>


                    </fieldset>
                </div>
            </Container>

        </div>
    )
}

export default EmployeesManagment
