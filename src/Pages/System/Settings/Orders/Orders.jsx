import React, { useState } from 'react'

const Orders = () => {
  const [active,setActive] = useState(0)
  return (
    <div className=''>
      <div className="flex flex-col items-center py-4 gap-2 bg-[#1E1E2D] w-[261px] h-[801px] rounded-[19px] p-[10px]">
      <p className='w-full text-white text-right mb-1'>الطلبات</p>
      <button onClick={()=> setActive(0)} className={`p-2 add-user-button text-right !w-full rounded-md ${active === 0? "text-[#EFAA20] text-base": "text-[#ffffff80] !text-xs"} `}>استخدام المشروع</button>
      <button onClick={()=> setActive(1)} className={`p-2 add-user-button text-right !w-full rounded-md ${active === 1? "text-[#EFAA20] text-base": "text-[#ffffff80] !text-xs"} `}>خدمات المشروع</button>
      <button onClick={()=> setActive(2)} className={`p-2 add-user-button text-right !w-full rounded-md ${active === 2? "text-[#EFAA20] text-base": "text-[#ffffff80] !text-xs"} `}>نوع المشروع</button>
      </div>
    </div>
  )
}

export default Orders
