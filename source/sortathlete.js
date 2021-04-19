// This is the Script for ading new elements

import Athlete from "./athlete.js";
import { scheduleKind, horarios } from "./schedule.js";
import athletes from "./database.js";
// Columns

const selectAthlete = document.querySelector("#athleteselect");
const selectSchedule = document.querySelector("#scheduleSelect");
const sortButton = document.getElementById("athleteSchedule");
const template = document.querySelector(".template-div").content;
const fragment = document.createDocumentFragment();
const main = document.querySelector("main");
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

sortButton.addEventListener("click", athleteAdded);

// const hola = () => {
//   selectAthlete.value;
//   selectAthlete.value;
// }

function athleteAdded() {
  console.log();
  template.querySelector("h3").textContent = selectAthlete.value;
  template.querySelector("span").textContent = selectSchedule.value;
//  Me falta un elemento

  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
  main.appendChild(fragment);
}
