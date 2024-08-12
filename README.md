# Programación Orientada a Objetos ES6
La empresa XYZ Consultores solicita desarrollar un programa con JavaScript utilizando las nuevas tecnologías de ES6, considerando clases y que las modificaciones y consultas sean mediante métodos específicos.

![image](https://github.com/user-attachments/assets/5b279517-e60e-4992-a349-7ac21345232e)

## General Info
Para ello, crearemos tres archivos: uno principal y dos para las clases.

### Archivo Principal (main.js):
Este archivo será el punto de entrada de nuestra aplicación.
Importaremos las clases y crearemos instancias de clientes con sus respectivos datos.
Realizaremos los cálculos de impuestos y mostraremos los resultados.

### Clase Cliente:
Tendrá los atributos nombre (string) e impuesto (objeto).
Contendrá los métodos getNombre(), setNombre(), y calcularImpuesto().
La fórmula para calcular el impuesto será: ((montoBrutoAnual - deducciones) * 0.21).

### Clase Impuestos:
Tendrá los atributos montoBrutoAnual (number) y deducciones (number).
Incluirá los métodos getMontoBrutoAnual(), setMontoBrutoAnual(), getDeducciones(), y setDeducciones().

### Uso de Módulos y Babel:
Separaremos cada clase en su propio archivo (por ejemplo, Cliente.js y Impuestos.js).
Utilizaremos módulos de ES6 para importar/exportar las clases.
Transpilaremos nuestro código con Babel para asegurar la compatibilidad con navegadores.
