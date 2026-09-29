import { useState } from "react";
import { viagens } from "../data/viagens";
import Filtros from "./Filtros";
import CartaoViagem from "./CartaoViagem";

function Catalogo() {
  const [filtro, setFiltro] = useState("Todas");

  const viagensFiltradas =
    filtro === "Todas"
      ? viagens
      : viagens.filter((viagem) => viagem.tipo === filtro);

  const quantidade = viagensFiltradas.length;

  return (
    <main>
      <section
        className="catalogo"
        id="destinos"
        aria-labelledby="titulo-destinos"
      >
        <div className="topo-secao">
          <div>
            <p className="sobre-titulo">ESCOLHE O TEU RITMO</p>
            <h2 id="titulo-destinos">Destinos para descobrir</h2>
          </div>

          <p className="contagem">
            {quantidade} {quantidade === 1 ? "viagem" : "viagens"}
          </p>
        </div>

        <Filtros
          filtro={filtro}
          setFiltro={setFiltro}
        />

        <div className="grelha">
          {viagensFiltradas.map((viagem) => (
            <CartaoViagem
              key={viagem.id}
              viagem={viagem}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Catalogo;