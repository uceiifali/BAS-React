import React, { useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import style from './AddExpensesReports.module.css';

import { useParams } from 'react-router-dom';
import Input from '../../../FormHandler/Input';
import Select from '../../../FormHandler/Select';
import { useState } from 'react';
import DatePicker from "react-datepicker"
import SaveButton from '../../../SaveButton';
import { addAccountType } from '../../../../Context/AddAccountaing';

const AddItems = () => {
    return (
        <div className={`${style.AddItems}`}>



        </div>
    )
}

export default AddItems