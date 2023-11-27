import React, { useContext, useMemo, useState } from 'react'
import styles from "./AllMeetings.module.css"
import "./MeettingStyles.css"
import SystemControler from '../../../../Components/System/SystemControler/SystemControler'
import AddUserButton from '../../../../Components/System/AddUserButton/AddUserButton'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Container, Form, Image, Modal } from 'react-bootstrap'
import { showAddUpdateUser } from '../../../../Context/CheckAddUpdateUserVisability'
import Select from '../../../../Components/FormHandler/Select'
import { UseSelect } from '../../../../hooks'
import { AddMeeting } from '../../../../Components/System/Meetings/AddMeeting/AddMeeting'
import EditDeleteMeeting from '../../../../Components/System/Meetings/EditDeleteMeeting/EditDeleteMeeting'

const AllMeetings = () => {
    const { showAddUserModel, setShowAddUserModel } = useContext(showAddUpdateUser)
    const [showEditDeleteModal, setShowEditDeleteModal] = useState(false)
    const [AllEvents, setAllEvents] = useState(null)
    const [selectedEventId, setSelectedEventId] = useState(null)
    const localizer = momentLocalizer(moment)
    const currentDate = Date.now()
    const currentDay = moment(currentDate).format("DD/MM/YYYY")
    const currrentTime = moment(currentDate).format("hh:mm a")
    const selectCountry = UseSelect("", "Select")




    // get all events
    const getAllEvents = () => {


    }


    // get the selected metting to handle (edit-delete)
    const handleEditMeeting = (event) => {
        setSelectedEventId(event.id)
        setShowEditDeleteModal(true)



    }


    const events = [
        {
            title: 'Meeting 1',
            start: new Date("2023-11-14T10:00:00"),
            end: new Date("2023-11-14T11:00:00"),
            allDay: false,
            id: "5"

        },
        {
            title: 'Meeting 2',
            start: new Date("2023-11-17T14:00:00"),
            end: new Date("2023-11-17T15:00:00"),
            allDay: false,
            id: "4"

        },

    ]




    return (

        <div >


            <EditDeleteMeeting id={selectedEventId} showEditDeleteModal={showEditDeleteModal} setShowEditDeleteModal={setShowEditDeleteModal} />
            <SystemControler child={<AddUserButton />} />
            <div className={styles.cleanderbg}>

                <AddMeeting showAddUserModel={showAddUserModel} setShowAddUserModel={setShowAddUserModel} />



                <Calendar
                    localizer={localizer}
                    className="h-100 text-white"
                    startAccessor="start"
                    endAccessor={"end"}
                    rtl={true}
                    onEventDrop={true}

                    onSelectEvent={handleEditMeeting}
                    events={events}
                    views={['month', 'week']}
                    onEvent

                />

            </div>


        </div>
    )
}

export default AllMeetings