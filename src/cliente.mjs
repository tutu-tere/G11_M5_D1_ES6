// Cliente.js
export default class Cliente {
  constructor(nombre) {
    this.nombre = nombre;
    this.impuesto = null;
  }

  getNombre() {
    return this.nombre;
  }

  setImpuesto(impuesto) {
    this.impuesto = impuesto;
  }

  calcularImpuesto() {
    if (!this.impuesto) {
      throw new Error('Impuesto no configurado para el cliente');
    }
    const { montoBrutoAnual, deducciones } = this.impuesto;
    return (montoBrutoAnual - deducciones) * 0.21;
  }
}

