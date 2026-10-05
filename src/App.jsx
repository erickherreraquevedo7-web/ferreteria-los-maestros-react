import { useState } from "react";
import CampoTexto from "./components/atoms/CampoTexto.jsx";
import Selector from "./components/atoms/Selector.jsx";
import ContadorCantidad from "./components/atoms/ContadorCantidad.jsx";

function App() {
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");

    const categorias = [
        { valor: "materiales", texto: "Materiales de construcción" },
        { valor: "pinturas", texto: "Pinturas" },
        { valor: "herramientas", texto: "Herramientas" }
    ];

    return (
        <main className="container mt-4">
            <h1>Prueba de átomos</h1>

            <CampoTexto
                etiqueta="Nombre"
                nombre="nombre"
                valor={nombre}
                onChange={(evento) => setNombre(evento.target.value)}
                placeholder="Ingrese su nombre"
            />

            <Selector
                etiqueta="Categoría"
                nombre="categoria"
                valor={categoria}
                opciones={categorias}
                onChange={(evento) => setCategoria(evento.target.value)}
            />

            <h2 className="mt-4">Cantidad</h2>

            <ContadorCantidad />
        </main>
    );
}

export default App;