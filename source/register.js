import Athlete from './athlete.js'

function register() {
  team.push(new Athlete());
}


const team = [];

const atleta = new Athlete();
atleta.name = "Ivan";
atleta.id = 382176;
// Set position
let posicion = atleta.position.FULL_TIME;
// Set role
function role() {
  atleta.role.goalkeper = true;
  console.log(atleta.role.goalkeper);
}

role();
