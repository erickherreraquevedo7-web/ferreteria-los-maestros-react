function Selector({
    etiqueta,
    nombre,
    valor,
    opciones,
    onChange
}) {
    return (
        <section className="mb-3">
            <label htmlFor={nombre} className="form-label">
                {etiqueta}
            </label>

            <select
                id={nombre}
                name={nombre}
                value={valor}
                onChange={onChange}
                className="form-select"
            >
                <option value="">
                    Seleccione una opción
                </option>

                {opciones.map((opcion) => (
                    <option
                        key={opcion.valor}
                        value={opcion.valor}
                    >
                        {opcion.texto}
                    </option>
                ))}
            </select>
        </section>
    );
}

export default Selector;