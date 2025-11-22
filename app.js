// importo funciones reales
import {
    crearEstudiante,
    fusionarCatalogos,
    // procesarCompra,
    // estadisticas,
    // configFinal
} from "./modulos/barril.js";

let opcion;

// menú simple
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
    else if (opcion === "4") {
        console.log(estadisticas([
            {nombre:"Ana", stats:{puntos:20}},
            {nombre:"Luis", stats:{puntos:15}}
        ]));
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
