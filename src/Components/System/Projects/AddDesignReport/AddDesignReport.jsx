
import { Form } from "react-bootstrap"
import { UseInput } from "../../../../hooks"
import Input from "../../../FormHandler/Input"
import "./AddDesignReport.css"
import { useForm } from "react-hook-form"
import FormDatePicker from "../../../FormDatePicker"
import { useState } from "react"
import Select from "react-select/dist/declarations/src/Select"
const AddDesignReport = () => {
  // defineing rest classes
  const searchProject = UseInput("", "")
  const [reportDate, setReportDate] = useState(null)



  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      select: {},
    },
  })


  return (
    <div className="AddDesignReport  p-3">

      <p className="text-xl text-[#EFAA20] ">
        إضافة جديدة
      </p>

      <fieldset className="fieldBorder mb-4  p-2 mt-3">
        <legend className="text-center">
          بحث عن المشروع
        </legend >
        <Input className="form-control mb-4"
          placeholder="ابحث عن ...."
          {...searchProject.bind}
        />
      </fieldset>

      {
        searchProject.value && <>
          <Form className="">


            <fieldset className="fieldBorder mb-4  p-2 mt-3">
              <legend className="text-center">
                بيانات المشروع
              </legend >
              <div className="row">
                <div className="col-md-6 d-flex align-items-center mb-4">
                  <p className="text-white">
                    اسم المالك :
                    <span className="main-text ms-3">
                      شركة محمد ابراهيم السبيعي وأولاده
                    </span>
                  </p>

                </div>
                <div className="col-md-6 d-flex align-items-center mb-4">
                  <Form.Group>
                    <Form.Label>
                      اسم التقرير
                    </Form.Label>
                    <input className="form-control w-[300px]"  {...register("reportName")} />


                  </Form.Group>


                </div>
                <div className="col-md-6 d-flex align-items-center mb-4">
                  <p className="text-white">
                    اسم المشروع :
                    <span className="main-text ms-3">
                      شركة محمد ابراهيم
                    </span>
                  </p>

                </div>
                <div className="col-md-6 d-flex align-items-center mb-4">
                  <Form.Group>
                    <Form.Label>
                      رقم الجوال
                    </Form.Label>
                    <input className="form-control w-[300px]"  {...register("phone")} />


                  </Form.Group>
                </div>
                <div className="col-md-6 d-flex align-items-center mb-4">
                  <p className="text-white">
                    نوع المشروع :
                    <span className="main-text ms-3">
                      تصميم
                    </span>
                  </p>

                </div>
                <div className="col-md-6 d-flex align-items-center mb-4">
                  <p className="text-white">
                    العنوان :
                    <span className="main-text ms-3">
                      الرياض – حي الملقا – تقاطع شارع الدهناء مع الأفضلي
                    </span>
                  </p>

                </div>
                <div className="col-md-6 d-flex align-items-center mb-4">
                  <p className="text-white">
                    نوع العميل :
                    <span className="main-text ms-3">
                      شركة
                    </span>
                  </p>

                </div>

              </div>


            </fieldset>
            <fieldset className="fieldBorder mb-4  p-2 mt-3">
              <legend className="text-center">
                بيانات اساسيه
              </legend >
              <div className="row  ">

                <div className="col-md-4 d-flex align-items-center mb-4">
                  <Form.Group>
                    <Form.Label>
                      رقم الرخصة
                    </Form.Label>
                    <input className="form-control w-[300px]"  {...register("licenseNumber")} />


                  </Form.Group>


                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <Form.Group>
                    <Form.Label>
                      رقم الهوية
                    </Form.Label>
                    <input className="form-control w-[300px]"   {...register("iDNumber")} />


                  </Form.Group>


                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <Form.Group>
                    <Form.Label>
                      تاريخ التقرير
                    </Form.Label>
                    <FormDatePicker
                      date={reportDate}
                      setDate={setReportDate}

                    />


                  </Form.Group>


                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <Form.Group>
                    <Form.Label>
                      المخطط التنظيمي
                    </Form.Label>
                    <input className="form-control w-[300px]"   {...register("OrganizationalChart")} />



                  </Form.Group>


                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <Form.Group>
                    <Form.Label>
                      رقم القطعة
                    </Form.Label>
                    <input className="form-control w-[300px]"   {...register("pieceNumber")} />



                  </Form.Group>


                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <Form.Group>
                    <Form.Label>
                      نوع التقرير
                    </Form.Label>
                    <input className="form-control w-[300px]"   {...register("reportType")} />



                  </Form.Group>


                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <Form.Group>
                    <Form.Label>
                      مساحة الأرض
                    </Form.Label>
                    <input className="form-control w-[300px]"   {...register("landArea")} />



                  </Form.Group>


                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <Form.Group>
                    <Form.Label>
                      اسم الحي
                    </Form.Label>
                    <input className="form-control w-[300px]"   {...register("DistrictName")} />



                  </Form.Group>


                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  <Form.Group>
                    <Form.Label>
                      اسم الشارع
                    </Form.Label>
                    <input className="form-control w-[300px]"   {...register("streetName")} />



                  </Form.Group>


                </div>
                <div className="col-md-4 d-flex align-items-center mb-4">
                  {/* example */}
                  <Form.Group>
                    <Form.Label>
                      مكون البناء
                    </Form.Label>
                    <Controller
                      name="select"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={[
                            { value: "chocolate", label: "Chocolate" },
                            { value: "strawberry", label: "Strawberry" },
                            { value: "vanilla", label: "Vanilla" },
                          ]}
                        />
                      )}
                    />


                  </Form.Group>


                </div>


              </div>

            </fieldset>

          </Form>




        </>
      }




    </div>
  )
}

export default AddDesignReport
