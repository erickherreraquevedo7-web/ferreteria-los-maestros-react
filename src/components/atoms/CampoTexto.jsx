function CampoTexto({
    etiqueta,
    nombre,
    valor,
    onChange,
    tipo = "text",
    placeholder = ""
}) {
    return (
        <section className="mb-3">
            <label htmlFor={nombre} className="form-label">
                {etiqueta}
            </label>

            <input
                type={tipo}
                id={nombre}
                name={nombre}
                value={valor}
                onChange={onChange}
                placeholder={placeholder}
                className="form-control"
            />
        </section>
    );
}

export default CampoTexto;