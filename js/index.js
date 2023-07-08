// ./js/index.js
// https://codesandbox.io/s/brave-almeida-lxs3m6

// VARIABLES
//const mike = "Mike";

// VARIABLES
const evaluationArea = document.querySelector("#evaluation-area");
console.log("evaluationArea", evaluationArea);


const saludar = () => {
  return "Hola!";
};

const resultado = saludar();

console.log(resultado);

if (1 === 1) {
  console.log("Son iguales");
}

switch ("México") {
  case "México":
    console.log("Es México");
    break;
  default:
    console.log("No es México");
}

const sumar = (numero1, numero2) => numero1 + numero2;

sumar(1, 5);

const word = "corta";
// CONCATENACIÓN
const str1 = "Esta es" + " " + "una oración" + " " + word + ".";
console.log(str1);

// INTERPOLACIÓN
const str2 = `Esta es una oración ${word}.`;
console.log(str2);

// METODOS DE ARREGLO
// 1. REDUCE
// Realiza una operacion de evaluacion de todos los elementos entregando uno
const numeros = [2,3,5,9,150]
const sumarNumeros = numeros.reduce((acumulador, valorActual) => {
    console.log("acumulador", acumulador)
    console.log("valor actual", valorActual)
    console.log("resultado acumulador + valor actual", acumulador + valorActual)
    console.log("-------")
    return acumulador + valorActual
}, 10)

console.log(sumarNumeros)

//REDUCE MULTIPLICACION
const numbers = [2,3,5,9]
const multiplyNumbers = numbers.reduce((acumuladorx, valorActualx) => {
    console.log("acumulador", acumuladorx)
    console.log("valor actual", valorActualx)
    console.log("resultado acumulador * valor actual", acumuladorx * valorActualx)
    console.log("-------")
    return acumuladorx * valorActualx
}, 10)

console.log(multiplyNumbers)

//EJERCICIO
//REDUCE MULTIPLICACION

const ventas = [100, 300, 500, 800, 1560]
const totalVentas = ventas.reduce((acumulador, valorActual)=>{
    return acumulador + valorActual
},0)

console.log("totalVentas", totalVentas)

//2.MAP
// Recorre todos los elementos del arreglo y los cambia, generan un nuevo arreglo
// Paradigma de programacion funcional
// siempre debes generar una nueva variable si estas mutando algo

const paises = [
    "Mexico",
    "Colombia",
    "Peru",
    "Argentina",
    "Brasil",
    "Chile",
    "Estados Unidos"
]

const formatoPaises = paises.map((pais)=>{
    return `El pais es:${pais}`
})
console.log("formatoPaises", formatoPaises)

//EJERCICIO MAP
//GENERAR ARREGLO DE NUMEROS
//MULTIPLICAR POR 3 CADA ELEMENTO DEL ARREGLO INPUT [1,2,3], OUTPUT [3,6,9]

const input = [1,2,3]

const output = input.map((element)=>{
    return element * 3
})
console.log(output)

//Manera sintetizada
const input1 = [0,10,20]

const output1 = input1.map(element1=>element1 * 3)
console.log(output1)

// EJERCICIO DE PRACTICIDAD EMPRESARIAL
// DETERMINAR SI LOS SALARIOS SE ENCUENTRAN EN UN RANGO DE SALARIO ALTO

const empleados = [
    {
      nombre: "Mike",
      salario: 3000
    },
    {
      nombre: "Ramiro",
      salario: 5000
    },
    {
      nombre: "Andrea",
      salario: 8000
    }
  ];
  
  const evaluacion = empleados.map((empleado) => {
    let resultado = `El salario de ${empleado.nombre} es un salario promedio, dentro del rango interno de la empresa`;
  
    if (empleado.salario > 7000) {
      resultado = `El salario de ${empleado.nombre} es considerado un salario alto, dentro del rango interno de la empresa.`;
    }
  
    return resultado;
  });
  
  console.log("evaluación", evaluacion);
  
  evaluationArea.innerHTML = `<p>La evaluación de Andrea es: <b>${evaluacion[2]}</b></p>`;
  
  // 3. FIND
  // ACCEDER A CADA ELEMENTO DEL ARREGLO, Y, AL COINCIDIR EL VALOR DE BÚSQUEDA CON UNO DE LOS ELEMENTOS, RETORNA EL VALOR.
  // DEVUELVE LA PRIMERA COINCIDENCIA
  
  const edades = [13, 20, 15, 18, 22, 13];
  
  const encuentraAlPrimerMenorDeEdad = edades.find((edad) => {
    return 18 >= edad;
  });
  
  console.log("evaluarMayoriaDeEdad", encuentraAlPrimerMenorDeEdad);
  
  // 4. FILTER
  // ITERA SOBRE CADA ELEMENTO DEL ARREGLO Y FILTRA DE ACUERDO A LA CONDICIÓN LOS ELEMENTOS, CREANDO UN NUEVO ARREGLO
  
  const edadesConNombre = [
    { nombre: "Persona 1", edad: 13 },
    { nombre: "Persona 2", edad: 25 },
    { nombre: "Persona 3", edad: 18 }
  ];
  
  const encuentraTodosLosMenoresDeEdad = edadesConNombre.filter((persona) => {
    return 18 >= persona.edad;
  });
  
  console.log("encuentraTodosLosMenoresDeEdad", encuentraTodosLosMenoresDeEdad);
  
  
  // YEAH, THIS ONE IS RECOMMENDED
  // BONUS
  // 7. INCLUDES
  
// CICLOS
// 5. FOR
for(let number = 0; number < 8; number++){
    console.log(number)
}

//PROMEDIO DE ESTUDIANTES
// DE ACUERDO A UNA BASE DE DATOS, CONTAMOS CON UN OBJETO DE NOMBRES Y CALIFICACIONES
// DETERMINA SI EL ESTUDIANTE APROBO O NO (ARRIBA DE 70)

let estudiantes = [
    {nombre: "Estudiante 1", calificaciones: [80,10,100]},
    {nombre: "Estudiante 2", calificaciones: [80,90,100]},
    {nombre: "Estudiante 3", calificaciones: [10,20,60]}
]

//console.log(estudiantes.length)

for(let i =0; i< estudiantes.length; i++){
    let estudiante = estudiantes[i]
    console.log(estudiante)

    let suma = 0

    for (let j = 0; j < estudiante.calificaciones.length; j++){
        suma = estudiante.calificaciones[j] + suma
    }

    let promedio = suma / estudiante.calificaciones.length
    console.log(promedio)

    if (promedio < 70) {
        console.log(`El estudiante ${estudiante.nombre} reprobo con ${promedio}. Triste historia`)
    } else {
        console.log(`El estudiante ${estudiante.nombre} aprobo con ${promedio}. Linda historia`)     
    }

}
