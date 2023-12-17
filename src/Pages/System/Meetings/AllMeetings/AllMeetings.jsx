import React, { useContext, useMemo, useState } from 'react'
import styles from "./AllMeetings.module.css"
import "./MeettingStyles.css"
import SystemControler from '../../../../Components/System/SystemControler/SystemControler'
import AddUserButton from '../../../../Components/System/AddUserButton/AddUserButton'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { Calendar, dateFnsLocalizer, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Container, Form, Image, Modal } from 'react-bootstrap'
import { showAddUpdateUser } from '../../../../Context/CheckAddUpdateUserVisability'
import Select from '../../../../Components/FormHandler/Select'
import { UseSelect } from '../../../../hooks'
import { AddMeeting } from '../../../../Components/System/Meetings/AddMeeting/AddMeeting'
import EditDeleteMeeting from '../../../../Components/System/Meetings/EditDeleteMeeting/EditDeleteMeeting'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const AllMeetings = () => {
    const { showAddUserModel, setShowAddUserModel } = useContext(showAddUpdateUser)
    const [showEditDeleteModal, setShowEditDeleteModal] = useState(false)
    const [AllEvents, setAllEvents] = useState(null)
    const [start, setStart] = useState(false)
    const [end, setEnd] = useState(false)
    const [selectedEventId, setSelectedEventId] = useState(null)
    const localizer = momentLocalizer(moment)
    const DnDCalendar = withDragAndDrop(Calendar);

   

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
    // const handleEventResize = (data) => {
    //     const { start, end } = data;
    //     setStart(start.events[0].start)
    //     setEnd(end.events[0].end)
    //     return { events: [...start.events] };

    // }
    function onEventDrop({ event, start, end, allDay }) { }
    function onEventResize({ event, start, end, allDay }) { }
    function onDragStart({ event }) { }



    return (

        <div >


            <EditDeleteMeeting id={selectedEventId} showEditDeleteModal={showEditDeleteModal} setShowEditDeleteModal={setShowEditDeleteModal} />
            <SystemControler child={<AddUserButton />} />
            <div className={styles.cleanderbg}>

                <AddMeeting showAddUserModel={showAddUserModel} setShowAddUserModel={setShowAddUserModel} />


                <DnDCalendar
                    defaultDate={moment().toDate()}
                    defaultView="month"
                    events={events}
                    localizer={localizer}
                    onEventDrop={onEventDrop}
                    onEventResize={onEventResize}
                    onDragStart={onDragStart}
                    draggableAccessor={(event) => true}
                    resizable
                    style={{ height: "100%" }}
                    messages={{
                        next: "التالي",
                        previous: "السابق",
                        today: "اليوم",
                        month: "الشهر",
                        week: "الاسبوع",
                        day: "اليوم"
                    }}

                />

            </div>


        </div>
    )
}

export default AllMeetings