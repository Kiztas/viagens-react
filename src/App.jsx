import "./App.css";

import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import Catalogo from "./components/Catalogo";
import Rodape from "./components/Rodape";

function App() {
  return (
    <div className="pagina" id="inicio">
      <Cabecalho />
      <Hero />
      <Catalogo />
      <Rodape />
    </div>
  );
}

export default App;