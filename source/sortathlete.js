// This is the Script for ading new elements

import Athlete from './athlete.js'
import { scheduleKind, horarios } from "./schedule.js";
import athletes from './database.js'
// Columns

const selectAthlete = document.querySelector("#athleteselect");
const selectSchedule = document.querySelector("#scheduleSelect");

const athletesElement = [];
// const kindOfSchedule = [open, mid, closure];


athletes.forEach((atleta) => {
  const appendAthlete = document.createElement("option");
  appendAthlete.innerHTML = atleta.name;
  selectAthlete.appendChild(appendAthlete);
});

horarios.forEach((horario) => {
  const appendSchedule = document.createElement("option");
  appendSchedule.innerHTML = horario;
  selectSchedule.appendChild(appendSchedule);
});



