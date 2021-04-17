
// Clase horario, para agregar todas las propiedades del atleta.
class Athlete {
  constructor() {
    this.name;
    this.id;
    this.position = {
      FULL_TIME: false,
      JUST_WEEKEND: false,
      PART_TIME: false,
    };
    this.role = {
      goalkeper: false,
      cashier: false,
      fitting_room: false,
      athlete_zero: false,
    };
    this.area = {
      ftwWoman: false,
      ftwMen: false,
      appWoman: false,
      appMen: false,
      cashiers: false,
    }
  }
}



export default Athlete