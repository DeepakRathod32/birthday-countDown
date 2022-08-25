import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { Welcome } from "./index";

function Counter({ name, day, month }) {
  // useState Hooks
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItBday: false,
  });

  if (name === undefined || day === undefined || month === undefined) {
    name = "Anjali"; // Name of the person
    month = 9; // Month of the Birthday
    day = 12; // Day of the Birthday
  }

  // get current time
  const currentTime = new Date();

  // get current year
  const currentYear = currentTime.getFullYear();

  //Geting Birthday in Data Object
  // We subtract 1 from month; Month start from 0 in Date Object
  // Birthday Boolean
  const isItBday =
    currentTime.getDate() === day && currentTime.getMonth() === month - 1;

    // console.log(currentTime.getDate(), currentTime.getMonth(), 'kkkkkk')
  useEffect(() => {
    setInterval(() => {
      //getting the current date
      const dateAtm = new Date();

      // if the Birthday has passed
      // then set the Birthday countdown for next year
      let birthdayDay = new Date(currentYear, month - 1, day);
      if (dateAtm > birthdayDay) {
        birthdayDay = new Date(currentYear + 1, month - 1, day);
      } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
        birthdayDay = new Date(currentYear, month - 1, day);
      }

      //Getting Current Time
      const currentTime = dateAtm.getTime();

      // Getting Birthdays Time
      const birthdayTime = birthdayDay.getTime();

      //Time remaining for the Birthday
      const timeRemaining = birthdayTime - currentTime;

      let seconds = Math.floor(timeRemaining / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);

      // console.log('check', seconds, minutes, hours, days);

      seconds %= 60;
      minutes %= 60;
      hours %= 24;

      // console.log('check-again', seconds, minutes, hours);

      // Setting States
      setState((prevState) => ({
        ...prevState,
        seconds,
        minutes,
        hours,
        days,
        isItBday,
      }));
      // console.log(`${days}:${hours}:${minutes}:${seconds} , ${isItBday}`);
    }, 1000);
  }, [currentYear, day, isItBday, month]);

  let birth = new Date(currentYear, month - 1, day);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthBday = monthNames[birth.getMonth()];
  // console.log(currentTime, currentYear, isItBday)

  if (!state.isItBday) {
    return (
      <div id="counter-background">
        <h1 className="head">
          Countdown to <span className="color">{name}'s</span> Birthday{" "}
        </h1>
        <div className="counter-container">
          <div className="counter-box">
            {state.days} <span className="legend">Days</span>
          </div>
          <div className="counter-box">
            {state.hours} <span className="legend">Hours</span>
          </div>
          <div className="counter-box">
            {state.minutes} <span className="legend">minutes</span>
          </div>
          <div className="counter-box">
            {state.seconds} <span className="legend">seconds</span>
          </div>
        </div>

        <div className="birthday">
          Birth Date : {day} {monthBday} {currentYear}
        </div>
        <Link to="/birthday/setcounter">
          <button className="btn-gc">Generate Counter</button>
        </Link>
      </div>
    );
  } else {
    return <Welcome name={name} />;
  }
}

export default Counter;
