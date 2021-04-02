// Clase horario
class Schedule {
  constructor(start, end, scheduleType) {
    this.start = start;
    this.end = end;
    this.scheduleType = scheduleType;
  }

  // Algoritmo que define que tipo de horario es.
  scheduleType(start, end) {
    if ((start == "12:30", end == "21:30")) {
      return `Cierre`;
    } else if ((start == "11:00", end == "20:00")) {
      return `Intermedio`;
    } else if ((start == "09:00", end == "18:00")) {
      return `Apertura`;
    } else {
      console.error(`Hubo un error en los horarios.`);
    }
  }
}

console.log(Schedule.prototype.scheduleType('11:00', '20:00'));
