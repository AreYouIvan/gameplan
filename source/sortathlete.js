// This is the Script for ading new elements

// Columns
const athleteColumn = document.querySelector(".column1");
const hourColumn = document.querySelector(".column2");

const athletesElement = [];
const hoursElement = [];

// Adding new athlete.
let nuevoAtleta;
athletesElement.push("Hola");
hoursElement.push(`5 - 7 pm`);

athletesElement.forEach((atleta) => {
  console.log(atleta);
  const appendAthlete = document.createElement("h2");
  appendAthlete.innerHTML = atleta;
  athleteColumn.appendChild(appendAthlete);
});
hoursElement.forEach((hora) => {
  console.log(hora);
  const appendHour = document.createElement("h2");
  appendHour.innerHTML = hora;
  hourColumn.appendChild(appendHour);
});
