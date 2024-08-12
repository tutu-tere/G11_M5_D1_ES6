// main.js
import Cliente from './cliente.mjs';
import Impuestos from './impuestos.mjs';

// Crear instancia de cliente
const cliente1 = new Cliente('Juan Pérez');
cliente1.setImpuesto(new Impuestos(1000000, 20000)); // montoBrutoAnual, deducciones

// Calcular impuesto y mostrar resultado
const impuestoCalculado = cliente1.calcularImpuesto();
console.log(`Impuesto anual para ${cliente1.getNombre()}: $${impuestoCalculado.toFixed(2)}`);
