//MENU PRINCIPAL QUE LLAMA TODAS LAS FUNCIONES //

// importo funciones desde barril
import {
    crearEstudiante,
    fusionarCatalogos,
    procesarCompra,
    estadisticas,
    configFinal
} from "./modulos/barril.js";

let opcion;

// menú simple para que el usuario elija la opcion que desee, o el ejercicio a probar
do {
    opcion = prompt(
        "Seleccione:\n" +
        "1. crearEstudiante\n" +
        "2. fusionarCatalogos\n" +
        "3. procesarCompra\n" +
        "4. estadisticas\n" +
        "5. configFinal"
    );

    if (opcion === "1") {
        console.log(crearEstudiante("Karol", 4.5, 4.0, 3.8));
    }
    else if (opcion === "2") {
        console.log(fusionarCatalogos(
            [{nombre:"JS", precio:40}], 
            [{nombre:"CSS", precio:30}]
        ));
    }
    else if (opcion === "3") {
        console.log(procesarCompra(
            {nombre:"Ana", correo:"a@mail.com"},
            [{nombre:"Mouse", precio:20}]
        ));
    }

    //Cuando el usuario elige la opción 4 en el menu
    else if (opcion === "4") {
        console.log(estadisticas([
            {nombre:"Ana", stats:{puntos:20}}, //Jugador 1
            {nombre:"Luis", stats:{puntos:15}} //Jugador 2
        ]));

        //SALIDA EN CONSOLA:
        //   puntosPrimerJugador: 20,    ← Puntos de Ana
        //   totalPuntos: 35,            ← 20 + 15
        //   lista: [                    ← Copia del array
        //     {nombre:"Ana", stats:{puntos:20}},
        //     {nombre:"Luis", stats:{puntos:15}}
        //   ]
        // }
        
    }
    else if (opcion === "5") {
        console.log(configFinal(
            {modo:"prod"}, 
            {tema:"oscuro"}
        ));
    }
    else {
        alert("Opción inválida");
    }

} while (opcion < "1" || opcion > "5");



//CONCEPPTOS CLAVE APLICADOS

//1. Destructuring Anidado
// const { stats: { puntos } } = jugadores[0];

// Es lo mismo que:
// const primerJugador = jugadores[0];
// const statsDelPrimero = primerJugador.stats;
// const puntos = statsDelPrimero.puntos;


//2. Spread Operator
// const copia = [...jugadores];

// Expande los elementos:
// [...jugadores] → [jugador1, jugador2, jugador3]


// 3. Try-Catch (manejo de errores)
// try {
    // Código que puede fallar
// } catch (error) {
    // Qué hacer si falla
// }


// 4. Export (modularización)
// export function estadisticas() { ... }

// Permite que barril.js haga:
// export { estadisticas } from "./ejercicio_4.js";



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