// Clase horario
class Schedule {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.scheduleType;
  }

  // Algoritmo que define que tipo de horario es.
  scheduleType(start, end) {
    if ((start == "12:30", end == "21:30")) {
      return new Schedule();
    } else if ((start == "11:00", end == "20:00")) {
      return new Schedule();
    } else if ((start == "09:00", end == "18:00")) {
      return new Schedule();
    } else {
      console.error(`Hubo un error en los horarios.`);
    }
  }
}

// const horarios = []

// const agregarHorarios = (start, end) => {
//   horarios.push(Schedule.prototype.scheduleType(start, end));
// }

// const wtf = new Schedule (start, end)

export default Schedule