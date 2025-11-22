// une dos catálogos
export function fusionarCatalogos(a, b) {
    try {
        // valido arrays
        if (!Array.isArray(a) || !Array.isArray(b)) {
            throw new Error("catálogo inválido");
        }

        // uno catálogos
        const fusion = [...a, ...b];

        // ordeno por precio
        fusion.sort(function(x, y) {
            return x.precio - y.precio;
        });

        return fusion;

    } catch (error) {
        console.error(error.message);
    }
}
