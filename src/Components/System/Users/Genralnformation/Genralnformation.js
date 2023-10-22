import React from 'react'
import "./index.css"
const Genralnformation = () => {
  return (
    <div className='genralnformation p-5'>

  <div className=''>
     <div className='row py-3 jutify-content-between golden-square '>
        <div className='col-md-6 mb-3'><p> الاسم الاول : <span className='main-text'> اسلام </span></p> </div>
        <div className='col-md-6 mb-3 '><p> الاسم الاخير: <span className='main-text'> اسلام </span></p> </div>
        <div className='col-md-6 mb-3'><p> اسم المستخدم: <span className='main-text'> اسلام_ايهاب</span></p> </div>
        <div className='col-md-6 mb-3'><p> النوع: <span className='main-text'> ذكر</span></p> </div>
        <div className='col-md-12 mb-3'><p> البريد الالكتروني: <span className='main-text'> Islam@bsa.com</span></p> </div>
        <div className='col-md-6 mb-3'><p> رقم الجوال  : <span className='main-text'> 010123456789</span></p> </div>
        <div className='col-md-6 mb-3'><p>  البلد  : <span className='main-text'> مصر</span></p> </div>
        <div className='col-md-6 mb-3'><p>  تاريخ الميلاد  : <span className='main-text'> 15 - 10 -2023</span></p> </div>
      
     </div>
     <div className='row py-3 jutify-content-between golden-square mt-3 '>
        <div className='col-md-6 mb-3'><p> الصلاحية:  <span className='main-text'> مدير قسم </span></p> </div>
        <div className='col-md-6 mb-3 '><p>  القسم: <span className='main-text'> برمجة  </span></p> </div>
        <div className='col-md-12 mb-3'><p>بدأ العمل :   <span className='main-text'> 15  - 10 - 2023</span></p> </div>
        
      
     </div>
  </div>
</div>
    
  )
}

export default Genralnformation