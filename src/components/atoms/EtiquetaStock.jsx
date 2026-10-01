// Por terminar, después tendrá que crearse stock.jsx dentro de una carpeta de utils

function EtiquetaStock({ stock, stockMinimo }) {
    const necesitaReposicion = stock < stockMinimo;

    return (
        <span
            className={
                necesitaReposicion
                    ? "badge text-bg-danger"
                    : "badge text-bg-success"
            }
        >
            {necesitaReposicion
                ? "Reponer stock"
                : `Stock: ${stock}`}
        </span>
    );
}

export default EtiquetaStock;