import { useState } from "react";

function ContadorCantidad() {
    const [cantidad, setCantidad] = useState(1);

    function aumentar() {
        setCantidad(cantidad + 1);
    }

    function disminuir() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <section className="d-flex align-items-center gap-2">
            <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={disminuir}
            >
                -
            </button>

            <span>{cantidad}</span>

            <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={aumentar}
            >
                +
            </button>
        </section>
    );
}

export default ContadorCantidad;