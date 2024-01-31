import React, { useState } from "react";
import styles from "./AllMeetings.module.css";
import "./MeettingStyles.css";
import {
  Calendar,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import {AddMeeting} from "../../../../Components/System/Meetings/AddMeeting/AddMeeting";
import EditDeleteMeeting from "../../../../Components/System/Meetings/EditDeleteMeeting/EditDeleteMeeting";

const AllMeetings = () => {
  require("globalize/lib/cultures/globalize.culture.ar-AE");

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewAddMeeting, setViewAddMeeting] = useState(false);
  const localizer = momentLocalizer(moment);
  const DnDCalendar = withDragAndDrop(Calendar);

  const allEvents = [
    {
      id: 1,
      title: "Conference",
      start: new Date("2024-01-22"),
      end: new Date("2024-01-22"),
      desc: "Big conference for important people",
      allDay: true,
    },
    {
      id: 2,
      title: "Assign Tasks",
      start: new Date("2024-01-25"),
      end: new Date("2024-01-26"),
      desc: "Pre-meeting meeting, to prepare for the meeting",
      allDay: false,
    },
  ];

  const [events, setEvents] = useState(allEvents);

  const handleEditMeeting = (event) => {
    setSelectedEvent(event);
  };

  const moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const updatedEvents = events.map((ev) =>
      ev.id === event.id ? { ...ev, start, end } : ev
    );
    setEvents(updatedEvents);
    alert(`${event.title} was moved`);
  };

  const resizeEvent = ({ event, start, end }) => {
    const updatedEvents = events.map((ev) =>
      ev.id === event.id ? { ...ev, start, end } : ev
    );
    setEvents(updatedEvents);
    alert(`${event.title} was resized`);
  };

  return (
    <div>
      <EditDeleteMeeting
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <div className={styles.calendarBg}>
        <AddMeeting
          isOpen={viewAddMeeting}
          onClose={() => setViewAddMeeting(false)}
        />

        <DnDCalendar
          popup
          onSelectEvent={handleEditMeeting}
          defaultDate={moment().toDate()}
          defaultView="month"
          events={events}
          localizer={localizer}
          onEventDrop={moveEvent}
          onEventResize={resizeEvent}
          draggableAccessor={() => true}
          style={{ height: "100%" }}
        />
      </div>
    </div>
  );
};

export default AllMeetings;
