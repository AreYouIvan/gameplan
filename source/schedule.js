// Tipos de Horarios
class scheduleKind {
  constructor() {

    this.open = 'Apertura'
    this.mid = "Intermedio";
    this.closure = "Cierre";
  }

  
};

// Tipos de puesto
const daySch = new scheduleKind()
const opening = daySch.open
const middle = daySch.mid
const closure = daySch.closure

const horarios = [opening, middle, closure]



export {scheduleKind, horarios}
