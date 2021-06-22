
function cambiar(color) {
    const contenedor = document.getElementsByClassName('contenedor')[0];
    contenedor.style.backgroundColor = color;
}
function contar() {
    
    const res = document.getElementsByClassName('resultado')[0];
    const texto = document.getElementById('textArea');
    if (texto.value == '') {
        res.innerHTML = "el texto tiene 0 caracteres"
    }
    res.innerHTML = `el texto tiene ${texto.value.length} caracteres.`;
    
}

function alumnosAprobados() {
    
    let filtrar = alumnos.filter((e)=> e.nota >= 7);
   filtrar.forEach(elem => {
       let newEl = document.createElement('p');
       newEl.innerHTML = `nombre ${elem.nombre} - nota ${elem.nota}`;
       document.getElementById('alumnos').appendChild(newEl);
   });
  
}

var alumnos = [

  {

    nombre: 'Juan Gomez',

    nota: 7

  }, {

    nombre: 'Pedro Rodriguez',

    nota: 4

  }, {

    nombre: 'Roxana García',

    nota: 8

  }, {

    nombre: 'Luciano Lopez',

    nota: 5

  }, {

    nombre: 'Fernanda Gimenez',

    nota: 6

  }, {

    nombre: 'Florencia Martinez',

    nota: 10

  }, {

    nombre: 'Raul Sanchez',

    nota: 7

  }, {

    nombre: 'Sandra Figueroa',

    nota: 8

  }

];


// Ejercicio 1:

// Crear un documento html con 3 cuadrados que, al ser clickeados, cambien el color de fondo del documento. Cada cuadrado debera tener un color distinto.



// Ejercicio 2: 

// Programar un contador de caracteres para un textarea.



// Ejercicio 3:

// Dado el siguiente array de alumnos utilizar los métodos de array vistos para generar un array con los alumnos aprobados. Se considera aprobado todo alumno que tenga una nota mayor o igual a 7.



// var alumnos = [

//   {

//     nombre: 'Juan Gomez',

//     nota: 7

//   }, {

//     nombre: 'Pedro Rodriguez',

//     nota: 4

//   }, {

//     nombre: 'Roxana García',

//     nota: 8

//   }, {

//     nombre: 'Luciano Lopez',

//     nota: 5

//   }, {

//     nombre: 'Fernanda Gimenez',

//     nota: 6

//   }, {

//     nombre: 'Florencia Martinez',

//     nota: 10

//   }, {

//     nombre: 'Raul Sanchez',

//     nota: 7

//   }, {

//     nombre: 'Sandra Figueroa',

//     nota: 8

//   }

// ];

