// SACAR ESTADISTICAS DE JUGADORES DEPORTIVOS //

//EXPORTO la funcion para que otros archivos puedan usarla
// "Export" : hace publica la funcion
export function estadisticas(jugadores) {

  // TRY : para ejecutar este codigo, si falla, voy al CATCH
    try {

        //PASO 1: DESTTRUCTURING ANIDADO = forma elegante de extraer valores que están dentro de otros objetos, en una sola línea
        //Saco puntos del primero jugador 
        const { stats: { puntos } } = jugadores[0];

        //PASO 2: Sumar todos los puntos
        // Variable acumuladora que guardara la suma total
        let total = 0;

        //Recorro TODOS los jugadres con un for tradicional
        for (let i = 0; i < jugadores.length; i++) {

             // En cada vuelta, sumo los puntos del jugador actual
            // jugadores[i] → jugador en la posición "i"
            // .stats.puntos → navego hasta la propiedad puntos
            total += jugadores[i].stats.puntos;
        }

        // PASO 3: Clonar el array (Spread operator = El spread operator son tres puntos (...) que expanden o desempaquetan los elementos de un array u objeto, permitiéndonos copiarlos o combinarlos de forma rápida y segura.)
        // Creo una copia del array original para no modificarlo
        // El spread operator (...) "expande" todos los elementos
        const copia = [...jugadores];

        // PASO 4: Retornar objeto con resultados
        //Este objeto es lo que recibira quien llame a estadisticas()
            return {
            puntosPrimerJugador: puntos,  //Puntos del jugador [0]
            totalPuntos: total,           // Suma de todos los puntos
            lista: copia                  // Copia del array completo
        };



    } catch (error) {
        //MANEJO DE ERRORES
        //Si algo salio mal en el tryy, caigo aqui
        //Ejemplo: si jugadores esta vacio, el destructuring falla
        
        //Muestro el error en la consola para debugging = Es el proceso de encontrar y corregir errores (bugs) en el código, "Depurar" o "limpiar" el código de errores para que funcione correctamente.
        console.error(error.message);
        //NOTA: no retorno nada aqui, retornaria "undefined"
        //Podría retornar un objeto con error: true 
    }
}



//  GLOSARIO - CONCEPTOS DEL EJERCICIO 4

//  FUNCIÓN
// - Bloque de código reutilizable que hace una tarea específica
// - En este ejercicio:
//     export function estadisticas(jugadores) { ... }
//          "estadisticas" es la función que procesa datos de jugadores


//  PARÁMETRO
// - Variable que recibe la función para trabajar con ella
// - En este ejercicio:
//   function estadisticas(jugadores) { ... }
//                        "jugadores" es el parámetro
// Recibe un array con información de los jugadores


//  ARRAY
// - Lista ordenada de elementos entre corchetes []
// - En este ejercicio:
// [
//     {nombre:"Ana", stats:{puntos:20}},
//     {nombre:"Luis", stats:{puntos:15}}
// ]
//      Array de 2 jugadores
//      jugadores[0] → primer jugador (Ana)
//      jugadores.length → cantidad de jugadores (2)


//  OBJETO
// - Colección de datos relacionados con llaves {}
// - Tiene propiedades en formato clave: valor
// - En este ejercicio:
//   {nombre:"Ana", stats:{puntos:20}}
//      Objeto jugador
//       .nombre → "Ana"
//       .stats → {puntos:20} (otro objeto dentro)
//       .stats.puntos → 20


//  DESTRUCTURING
// - Extraer valores de objetos/arrays de forma elegante
// - En este ejercicio:
//     const { stats: { puntos } } = jugadores[0];
//                Saco "puntos" del objeto "stats" del primer jugador
// Sin destructuring sería: jugadores[0].stats.puntos


//  SPREAD OPERATOR (...)
// - Expande/copia elementos de arrays u objetos
// - En este ejercicio:
//    const copia = [...jugadores];
//        Crea una COPIA del array original
// Sin spread: const copia = jugadores (solo referencia, NO copia)


//  VARIABLE (const/let)
// - Contenedor que guarda valores
// - En este ejercicio:
//    let total = 0;                 // Variable que puede cambiar
//    const copia = [...jugadores];  // Variable constante (no cambia)


//  OPERADORES ARITMÉTICOS
// - Realizan operaciones matemáticas
// - En este ejercicio:
//   total += jugadores[i].stats.puntos;
//         += significa: total = total + jugadores[i].stats.puntos
// Suma los puntos de cada jugador al acumulador


//  OPERADORES DE COMPARACIÓN
// - Comparan valores para tomar decisiones
// - En este ejercicio:
//   for (let i = 0; i < jugadores.length; i++)
//                     < "menor que"
//   Compara si i es menor que la cantidad de jugadores
//   Mientras sea true, el ciclo continúa


//  CICLO FOR
// - Repite código un número específico de veces
// - En este ejercicio:
//    for (let i = 0; i < jugadores.length; i++) {
//     total += jugadores[i].stats.puntos;
// }
//     i = 0 → empieza en 0
//     i < jugadores.length → mientras i sea menor que la cantidad
//     i++ : incrementa i en 1 cada vuelta
//   Recorre TODOS los jugadores para sumar sus puntos


//  RETURN
// - Devuelve el resultado de la función
// - En este ejercicio:
//   return {
//     puntosPrimerJugador: puntos,
//     totalPuntos: total,
//     lista: copia
// };
//      Retorna un objeto con los resultados calculados
//      Quien llame a estadisticas() recibe este objeto


//  TRY-CATCH
// - Maneja errores sin romper el programa
// - En este ejercicio:
// try {
//     Intento ejecutar este código
// } catch (error) {
//     Si falla, caigo aquí y muestro el error
// console.error(error.message);
// }


//  CONSOLE.ERROR()
// - Muestra mensajes de error en la consola (debugging)
// - En este ejercicio:
//     console.error(error.message);
//        Si algo falla, muestro QUÉ salió mal
// Ayuda a encontrar y corregir problemas (debugging)


//  EXPORT
// - Hace pública la función para que otros archivos la usen
// - En este ejercicio:
//    export function estadisticas(jugadores) { ... }
//        Permite que barril.js y app.js puedan importarla
// Sin export, la función solo existiría en este archivo


//  ACCESO A PROPIEDADES
// - Navegar dentro de objetos con punto (.)
// - En este ejercicio:
//    jugadores[i].stats.puntos
//    jugadores[i] : jugador en posición i
//        .stats : entro al objeto stats
//        .puntos : saco el valor de puntos


// ÍNDICE (i)
// - Posición de un elemento en el array
// - Siempre empieza en 0
// - En este ejercicio:
//     jugadores[0]  → primer jugador (Ana)
//     jugadores[1]  → segundo jugador (Luis)
// En el for: "i" representa la posición actual


//  RESUMEN EJERCICIO 4
// Función estadisticas → procesa jugadores
// Parámetro jugadores → array que recibe la función
// Destructuring → saca puntos del primer jugador elegantemente
// Spread (...) → copia el array sin modificar el original
// For → recorre todos los jugadores
// += → suma y acumula puntos
// Return → devuelve objeto con resultados
// Try-Catch → atrapa errores
// Export → hace la función disponible para otros archivos

       
