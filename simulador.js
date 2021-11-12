function saludar() {
  let usuario = prompt("Ingrese su usuario");
  alert("Hola " + usuario);
}
function calificaciones() {
  let calificacionUno = parseInt(prompt("ingrese sus calificaciones"));
  let calificacionDos = parseInt(prompt("ingrese sus calificaciones"));
  let calificacionTres = parseInt(prompt("ingrese sus calificaciones"));
  let calificacionCuatro = parseInt(prompt("ingrese sus calificaciones"));
  let calificacionCinco = parseInt(prompt("ingrese sus calificaciones"));
  let calificacionSeis = parseInt(prompt("ingrese sus calificaciones"));
  let suma =
    calificacionUno +
    calificacionDos +
    calificacionTres +
    calificacionCuatro +
    calificacionCinco +
    calificacionSeis;
  let resultadoFinal = suma / 6;
  if (resultadoFinal >= 7) {
    alert("Aprobado");
  } else if (resultadoFinal >= 4) {
    alert("Tenés que esforzarte más");
  } else {
    alert("Lamentablemente tenés que recursar");
  }
}

function alumnos(nombre, dni, edad, fecha) {
  this.nombre = nombre;
  this.dni = dni;
  this.edad = edad;
  this.fecha = fecha;

  this.datos = function () {
    console.log("El nombre es: " + this.nombre);
    console.log("El dni es: " + this.dni);
    console.log("La edad: " + this.edad);
    console.log("La fecha de nacimiento es: " + this.fecha);
  };
}

let alumno = new alumnos("Pedro", 33345655, 16, "15/06/2008");
alert("Los datos ingresados deben ser: nombre ej. " + alumno.nombre);
alert("Los datos ingresados deben ser: dni ej." + alumno.dni);
alert("Los datos ingresados deben ser: edad ej." + alumno.edad);
alert("Los datos ingresados deben ser: fecha ej." + alumno.fecha);

alert("Ingrese sus datos personales");
let nombreAlumno = prompt("Ingrese su nombre");
let dniAlumno = prompt("Ingrese su dni");
let edadAlumno = prompt("Ingrese su edad");
let fechaAlumno = prompt("Ingrese su fecha de nacimiento");

let alumnoData = new alumnos(nombreAlumno, dniAlumno, edadAlumno, fechaAlumno);
console.log(alumnoData);
alumnoData.datos();
function materias() {
  let materias = [];
  let nombreMaterias;
  for (let i = 0; i < 5; i++) {
    nombreMaterias = prompt(
      "Ingrese el nombre de las materias que te llevaste a marzo"
    );
    materias.push(nombreMaterias);
  }
  console.log(materias);
}
