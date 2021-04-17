import Athlete from "./athlete.js";

let nameAthlete = document.querySelector(".form-input");
let idAthlete = document.querySelector(".id-input");;



const btnSubmit = document.querySelector("button")


btnSubmit.addEventListener('click', register)






let typeAhlete = Athlete.position;

let roleAthlete = Athlete.role;



function register() {

  console.log(nameAthlete.value);
  console.log(idAthlete.value);
}







// // team.push(new Athlete());
// const team = [];

// const atleta = new Athlete();
// atleta.name = "Ivan";
// atleta.id = 382176;
// // Set position
// let posicion = atleta.position.FULL_TIME;
// // Set role
// function role() {
//   atleta.role.goalkeper = true;
//   console.log(atleta.role.goalkeper);
// }

// role();
