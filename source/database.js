import Athlete from "./athlete.js";

let ivan = new Athlete();
let atleta1 = new Athlete();
let atleta2 = new Athlete();
let atleta3 = new Athlete();
let atleta4 = new Athlete();
let atleta5 = new Athlete();
let atleta6 = new Athlete();
let atleta7 = new Athlete();
let atleta8 = new Athlete();
ivan.name = "Iván García";
ivan.id = 382176;
ivan.position.FULL_TIME = true;
ivan.role = {
  goalkeper: true,
  cashier: true,
  fitting_room: true,
};
atleta1.name = "Juan perez";
atleta1.id = 111111;
atleta1.position.FULL_TIME = true;
atleta1.role = {
  goalkeper: true,
  fitting_room: true,
};
atleta2.name = "Alejandro Hernandez";
atleta2.id = 222222;
atleta2.position.FULL_TIME = true;
atleta2.role = {
  cashier: true,
  fitting_room: true,
};
atleta3.name = "Johann García";
atleta3.id = 333333;
atleta3.position.PART_TIME = true;
atleta3.role = {
  fitting_room: true,
};
atleta4.name = "Chicharito Hernandez";
atleta4.id = 444444;
atleta4.position.PART_TIME = true;
atleta4.role = {
  goalkeper: true,
  fitting_room: true,
};
atleta5.name = "Cristiano Ronaldo";
atleta5.id = 444441;
atleta5.position.PART_TIME = true;
atleta5.role = {
  goalkeper: true,
  cashier: true,
  fitting_room: true,
};
atleta6.name = "Ronaldinho Gaucho";
atleta6.id = 444443;
atleta6.position.JUST_WEEKEND = true;
atleta6.role = {
  goalkeper: true,
  cashier: true,
  fitting_room: true,
};
atleta7.name = "El matadors";
atleta7.id = 444445;
atleta7.position.JUST_WEEKEND = true;
atleta7.role = {

  fitting_room: true,
};

atleta8.name = "Verguete Jance";
atleta8.id = 444446;
atleta8.position.PART_TIME = true;
atleta8.role = {
  cashier: true,
  fitting_room: true,
};
const athletes = [ ivan, atleta1, atleta2, atleta3, atleta4, atleta5, atleta6, atleta7, atleta8];




// Clasificar los horarios
athletes.filter((atleta) => {
  if (atleta.position.FULL_TIME == true){
    console.log(atleta.name);
  }
})


