const calificacionMediaArea = document.querySelector("#calificacion-media");
/*
Problema 3 (Turismo - Lugares visitados):

Estás en un equipo donde desarrollarás una aplicación de viajes. 

Tienes un array de objetos que representan lugares turísticos, cada uno con su nombre, número de visitas y calificación. 

- Primero, debes filtrar la lista para quedarte solo con los lugares que tengan más de 250 visitas. 
- Después, para estos lugares populares, debes aumentar su calificación en 1, como un pequeño 'bonus' por su popularidad.
- Finalmente, debes calcular la calificación media de los lugares populares después del 'bonus' y mostrarla.

 */

const lugares = [
    { nombre: "Playa del Sol", visitas: 300, calificacion: 4 },
    { nombre: "Montaña del Águia", visitas: 1200, calificacion: 7 },
    { nombre: "Bosque Verde", visitas: 100, calificacion: 2 }
  ];
  
  // 1. FILTROS DE LUGARES - USAR FILTER
  const lugaresPopulares = lugares.filter((lugar) => lugar.visitas > 250);
  console.log("lugaresPopulares", lugaresPopulares);


  // 2. AUMENTAR LA CALIFICACIÓN EN +1 - USAR MAP
  const lugaresMejorados = lugaresPopulares.map((lugar) => {
    return {
        nombre: lugar.nombre,
        visitas: lugar.visitas,
        calificacion: lugar.calificacion + 1,
    };
  });
  console.log("lugaresMejorados", lugaresMejorados);

  // 3. CALCULAR LA CALIFICACIÓN MEDIA DE LOS LUGARES MEJORADOS - USAR REDUCE
  
  //const calificacionMedia = lugaresMejorados.reduce((total, lugar) => total + lugar.calificacion,0) / lugaresMejorados.length;
  //console.log("calificacionMedia", calificacionMedia);

// 3. CALCULAR LA CALIFICACIÓN MEDIA DE LOS LUGARES MEJORADOS - USAR REDUCE
  const sumaCalificaciones = lugaresMejorados.reduce((acumulado, valorActual) => {
    return acumulado + valorActual.calificacion;
  }, 0);
  
  const calificacionMedia = sumaCalificaciones / lugaresMejorados.length;
  console.log("calificacion media", calificacionMedia);
  
// 4. BONUS - MOSTRAR EL RESULTADO DEL PUNTO 3 A TRAVÉS DEL DOM EN HTML
  calificacionMediaArea.innerHTML = `${calificacionMedia}`;
  
  