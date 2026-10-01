import Boton from "./components/atoms/Boton";
import Precio from "./components/atoms/Precio";
import EtiquetaStock from "./components/atoms/EtiquetaStock";

function App() {

    function agregarProducto() {
        alert("Producto agregado al carrito");
    }

    return (
        <main className="container mt-4">
            <h1>Ferretería Los Maestros</h1>

            <section className="mt-4">
                <h2>Prueba de componentes</h2>

                <Precio valor={5990} />

                <EtiquetaStock
                    stock={5}
                    stockMinimo={10}
                />

                <br />

                <Boton
                    texto="Agregar al carrito"
                    onClick={agregarProducto}
                />
            </section>
        </main>
    );
}

export default App;