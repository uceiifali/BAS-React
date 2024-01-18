import { BsFillTelephoneFill } from "react-icons/bs"
import { FaLocationDot } from "react-icons/fa6"
import { IoMailSharp } from "react-icons/io5"

const Footer = () => {
  return (
    <footer className="bg-[#E1B67C] text-white/90 text-center">

<div className="flex justify-center gap-5 py-3">
        <p className="flex justify-center items-center gap-1"><FaLocationDot className="" /> المملكة العربية</p>
        <p className="flex justify-center items-center gap-1"><IoMailSharp className="" /> Info@bsa.com.sa</p>
        <p className="flex justify-center items-center gap-1"><BsFillTelephoneFill className="" /> 966112255999+</p>

</div>
        <div className="bg-[#f6d3a4]  h-[1px] w-1/3 mx-auto">
        </div>
        <CopyRight/>
    </footer>
  )
}

export default Footer




const CopyRight = () => {
    return (
        <div className="py-2">
            <p>Copyright © 2023 BSA Engineering Consultancy</p>
        </div>
    )
}