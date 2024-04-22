import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import esLocale from '@fullcalendar/core/locales/es';

export default function Calendar() {
  return (
    <div style={{ backgroundColor: 'white', height: '60vh', width: '45vh', padding: '30px', borderRadius: '10px' }}>
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        height="100%"
        width="100%"
        locale={esLocale} // Establece el idioma a español
        googleCalendarApiKey="AIzaSyB_sGcOHVYN-PYoKDmD4F99f1YdctgkaLk"
        events={{ googleCalendarId: 'aaronherrera985@gmail.com' }}
      />
    </div>
  );
}