// mezcla configs
export function configFinal(...configs) {
    try {
        let final = {};

        // mezclo configs
        for (let i = 0; i < configs.length; i++) {
            final = { ...final, ...configs[i] };
        }

        final.validacion = true;

        return final;

    } catch (error) {
        console.error(error.message);
        return { validacion: false };
    }
}

