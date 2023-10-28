import React, { useEffect, useMemo, useState } from 'react'
import AllUserCategories from '../../../../Components/System/Users/AllUserCategories/AllUserCategories'


import AllUsersPieChart from '../../../../Components/System/Users/AllUsersChart/AllUsersPieChart'

import CountryPieChart from '../../../../Components/System/Users/CountryChart/CountryPieChart'
import { useParams } from 'react-router-dom'
import CountryColumnChart from '../../../../Components/System/Users/CountryChart/CountryColumnChart'
import CountryDeprtamentSlider from '../../../../Components/System/Users/CountryChart/CountryDeprtamentSlider'
import "./index.css"
import SearchCountryUsers from '../../../../Components/System/Users/SearchUsers/SearchCountryUsers'


const CountryChart = () => {

    const { CountryName } = useParams()
    const [countryBase, setCountryBase] = useState("Saudia")
    console.log(CountryName)


    useMemo(() => {
        if (CountryName == "Saudia") {
            setCountryBase("Saudia")
        } else if (CountryName == "egypet") {
            setCountryBase("egypet")

        }
    }, [CountryName])
    useEffect(() => {

    }, [CountryName])
    return (
   <div className='row'>
    <div className='col-md-3'>

        <SearchCountryUsers/>   
    </div>
    <div className='col-md-9'>
    <div className='country-Chart p-5'>

<div className='d-flex justify-content-center flex-column align-items-center'>

    <h2 className='country-header text-center   text-white mb-4'>

        {countryBase == "Saudia" ? "السعودية" : "مصر"}

    </h2>
    <CountryPieChart />
</div>
<fieldset className='All-users-columnChart-container  py-3 m-auto '>
    <legend className='text-white text-center'>كل المستخدمين في      {countryBase == "Saudia" ? "السعودية" : "مصر"} </legend>

    <div className='county-users-columnChart  d-flex   align-items-center flex-column'>

        <CountryColumnChart />

        <CountryDeprtamentSlider />

    </div>
</fieldset>

</div>

    </div>
   </div>
    )
}

export default CountryChart