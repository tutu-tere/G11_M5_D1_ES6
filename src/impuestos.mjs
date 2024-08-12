// Impuestos.js
export default class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  getMontoBrutoAnual() {
    return this.montoBrutoAnual;
  }

  setMontoBrutoAnual(monto) {
    this.montoBrutoAnual = monto;
  }

  getDeducciones() {
    return this.deducciones;
  }

  setDeducciones(deducciones) {
    this.deducciones = deducciones;
  }
}
