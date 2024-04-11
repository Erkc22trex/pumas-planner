import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'add-to-calendar-button';

function Calendar() {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="w-full h-full bg-blue-800 p-4 rounded-lg flex flex-col justify-center items-center">
      <div className="button-container flex justify-center w-full relative">
        <add-to-calendar-button
          name="Add the title of your event"
          description="A nice description does not hurt"
          startDate="2022-02-21"
          endDate="2022-03-24"
          startTime="10:13"
          endTime="17:57"
          location="Somewhere over the rainbow"
          options="['Google']"
          timeZone="Europe/Berlin"
          trigger="click"
          inline
          listStyle="modal"
          iCalFileName="Reminder-Event"
        />
      </div>
      <div className="text-l font-bold text-white mt-4">EVENTOS CREADOS</div>
      <hr className="border-t border-white border-solid my-2 w-full"/>
    </div>
  );
  
}

export default Calendar;

