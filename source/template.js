import Athlete from './athlete.js'

let ivan = new Athlete();
let atleta1 = new Athlete();
let atleta2 = new Athlete();
let atleta3 = new Athlete();
let atleta4 = new Athlete();
let atleta5 = new Athlete();
let atleta6 = new Athlete();
let atleta7 = new Athlete();
let atleta8 = new Athlete();
const athletes = [];

athletes.push(
  ivan,
  atleta1,
  atleta2,
  atleta3,
  atleta4,
  atleta5,
  atleta6,
  atleta7,
  atleta8
);

ivan.name = "Iván García";
ivan.id = 382176;
ivan.position.FULL_TIME = true;
ivan.role = {
  goalkeper: true,
  cashier: true,
  fitting_room: true,
};

console.log(ivan.position.FULL_TIME === true)


