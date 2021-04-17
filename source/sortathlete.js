// This is the Script for ading new elements

import Athlete from './athlete.js'
import athletes from './database.js'
// Columns
const athleteColumn = document.querySelector(".column1");
const scheduleRow = document.querySelector(".column1");
const selectAthlete = document.querySelector("#athleteselect");

const athletesElement = [];
// const kindOfSchedule = [open, mid, closure];


athletes.forEach((atleta) => {
  const appendAthlete = document.createElement("option");
  appendAthlete.innerHTML = atleta.name;
  selectAthlete.appendChild(appendAthlete);
});



// kindOfSchedule.forEach((hora) => {
//   const appendHour = document.createElement("h2");
//   appendHour.innerHTML = hora;
//   scheduleRow.appendChild(appendHour)
// });

