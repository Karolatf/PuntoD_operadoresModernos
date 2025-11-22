export function ejercicio1() {
    // nombre + rest notas
    function crearEstudiante(nombre, ...notas) {
        try {
            // valido notas
            for (let i = 0; i < notas.length; i++) {
                if (typeof notas[i] !== "number") {
                    throw new Error("nota inválida");
                }
            }

            // saco primera nota
            const [primera, ...resto] = notas;

            // saco promedio del resto
            let suma = 0;
            for (let i = 0; i < resto.length; i++) {
                suma += resto[i];
            }

            const promedio = resto.length > 0 ? suma / resto.length : primera;

            // retorno datos
            return {
                nombre,
                primeraNota: primera,
                promedioResto: promedio,
                totalNotas: notas.length
            };

        } catch (error) {
            console.error(error.message);
        }
    }

    // imprimir
    console.log(crearEstudiante("Karol", 4.5, 4.0, 3.8, 5.0));
}
