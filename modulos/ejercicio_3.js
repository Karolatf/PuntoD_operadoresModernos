
// procesa cliente + productos
export function procesarCompra(cliente, productos) {
    try {
        // copia del cliente
        const copiaCliente = { ...cliente };

        // saco primer producto
        const [primer, ...resto] = productos;

        // calculo total
        let total = 0;
        for (let i = 0; i < productos.length; i++) {
            total += productos[i].precio;
        }

        return {
            totalProductos: productos.length,
            precioTotal: total,
            primerProducto: primer
        };

    } catch (error) {
        console.error(error.message);
    }
}
