import React, { useState } from 'react'
import style from "./Expenses.module.css"
import PieChart from '../../../../Components/pieChart'
import { Modal } from 'react-bootstrap'
import Calendar from 'react-calendar'
import ColumnChart from '../../../../Components/ColumnChart'
const Expenses = () => {
    const [chooseDateItems, setChooseDateItem] = useState(false)
    const [ItemscleanderValue, setItemsCleanderValue] = useState(new Date())
    const [chooseExpensesDate, setChooseExpensesDate] = useState(false)
    const [expensesCleanderValue, setExpensesCleanderValue] = useState(new Date())

    const handleCleanderItemsValue = (e) => {
        setItemsCleanderValue(e)
        setChooseDateItem(false)
    }
    const handleCleanderExpenssValue = (e) => {
        setExpensesCleanderValue(e)
        setChooseExpensesDate(false)
    }
  










    const searchByDate = () => {

    }



    return (
        <div>
            {chooseDateItems &&
                <Modal
                    className=' InvoiceDate'
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    onHide={() => setChooseDateItem(false)}
                    show={chooseDateItems}
                >

                    <Modal.Body className='d-flex align-items-center'>

                        <Calendar onChange={handleCleanderItemsValue} className={"bg-[#1E1E2D]"} value={ItemscleanderValue} />

                    </Modal.Body>


                </Modal >
            }

            {chooseExpensesDate &&
                <Modal
                    className=' InvoiceDate'
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    onHide={() => setChooseExpensesDate(false)}
                    show={chooseExpensesDate}
                >

                    <Modal.Body className='d-flex align-items-center'>

                        <Calendar onChange={handleCleanderExpenssValue} className={"bg-[#1E1E2D]"} value={expensesCleanderValue} />

                    </Modal.Body>


                </Modal >
            }

            <div className={`${style.itemsNumbers} p-3`}>
                <p className='text-xl text-center text-white'>عدد الاصناف</p>

                <div >


                    <div className='w-50 mt-4  p-3 m-auto d-flex justify-content-between '>
                        <div className='d-flex  gap-3'>
                            <svg onClick={() => { setChooseDateItem(true) }} className='pointer' xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                <path d="M17.4375 0.438965H0.4375L7.2375 8.21314V13.5877L10.6375 15.2313V8.21314L17.4375 0.438965Z" fill="#D59921" />
                            </svg>
                            <p className='text-white '> اجمالى عدد الاصناف :  </p>
                        </div>
                        <div className='Treasury-container-numbers d-flex justify-content-center text-white'>
                            <p>12600</p>
                        </div>
                    </div>

                </div>
            </div>
            <fieldset className={`${style.ExpensesContainer} mt-5  overflow-x-hidden `}>
                <legend className='text-center '>كل المصروفات</legend>
                <div className={`bg-[#0A0D10] my-4   p-4 ${style.allexpensesConatiner}`}>

                    <svg onClick={() => { setChooseExpensesDate(true) }} className='pointer' xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                        <path d="M17.4375 0.438965H0.4375L7.2375 8.21314V13.5877L10.6375 15.2313V8.21314L17.4375 0.438965Z" fill="#D59921" />
                    </svg>
                    <p className='text-white text-center'>اجمالى المصروفات  </p>

                    <ColumnChart
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                        Categoris={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                        ColumnChart={"30.732px"} colors={["#D59921"]} />

                </div>


                <div className='px-3 d-flex gap-5'>
                    <h2 className='text-white'>اجمالى المصروفات :</h2>
                    <div className='Treasury-container-numbers d-flex justify-content-center text-white'>
                        <p>12600</p>
                    </div>
                </div>

            </fieldset>

        </div>
    )
}

export default Expenses