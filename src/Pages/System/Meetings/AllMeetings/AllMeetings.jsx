import React, { useMemo, useState } from 'react'
import styles from "./AllMeetings.module.css"
import SystemControler from '../../../../Components/System/SystemControler/SystemControler'
import AddUserButton from '../../../../Components/System/AddUserButton/AddUserButton'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const AllMeetings = () => {
    const [AllEvents, setAllEvents] = useState(null)
    const localizer = momentLocalizer(moment)
    const currentDate = Date.now()
    const currentDay = moment(currentDate).format("DD/MM/YYYY")
    const currrentTime = moment(currentDate).format("hh:mm a")

        const { defaultDate, formats } = useMemo(
            () => ({
                formats: {
                    eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
                        localizer.format(start, currrentTime, culture)
                },
            }),
            []
        )


        const getAllEvents = () => {


        }
        const events = [
            {
                title: 'Meeting 1',
                start: moment("2023-11-12T10:00:00"),
                end: moment("2023-11-12T11:00:00"),
                allDay: false,

            },
            {
                title: 'Meeting 2',
                start: moment("2023-11-15T14:00:00"),
                end: moment("2023-11-15T15:30:00"),
                allDay: false,

            },

        ]




        return (

            <div >

                <SystemControler child={<AddUserButton />} />
                <div className={styles.cleanderbg}>

                    <Calendar
                        localizer={localizer}
                        className="h-100 text-white"
                        startAccessor="start"
                        endAccessor={"end"}
                        rtl={true}
                        onEventDrop={true}
                        events={events}
                        views={['month', 'week']}
                        onEvent

                    />

                </div>


            </div>
        )
    }

    export default AllMeetings