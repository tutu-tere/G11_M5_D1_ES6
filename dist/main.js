"use strict";

var _cliente = _interopRequireDefault(require("./cliente.mjs"));
var _impuestos = _interopRequireDefault(require("./impuestos.mjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// main.js

// Crear instancia de cliente
var cliente1 = new _cliente["default"]('Juan Pérez');
cliente1.setImpuesto(new _impuestos["default"](1000000, 20000)); // montoBrutoAnual, deducciones

// Calcular impuesto y mostrar resultado
var impuestoCalculado = cliente1.calcularImpuesto();
console.log("Impuesto anual para ".concat(cliente1.getNombre(), ": $").concat(impuestoCalculado.toFixed(2)));