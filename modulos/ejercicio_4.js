// saca puntos de jugadores
export function estadisticas(jugadores) {
    try {
        // saco puntos del primero
        const { stats: { puntos } } = jugadores[0];

        // total del equipo
        let total = 0;
        for (let i = 0; i < jugadores.length; i++) {
            total += jugadores[i].stats.puntos;
        }

        // copia lista
        const copia = [...jugadores];

        return {
            puntosPrimerJugador: puntos,
            totalPuntos: total,
            lista: copia
        };

    } catch (error) {
        console.error(error.message);
    }
}
