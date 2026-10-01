function Precio({ valor }) {
    const precioFormateado = valor.toLocaleString("es-CL");

    return (
        <p className="fw-bold">
            ${precioFormateado}
        </p>
    );
}

export default Precio;