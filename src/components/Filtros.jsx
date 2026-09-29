const categorias = ["Todas", "Cidade", "Natureza", "Praia"];

function Filtros({ filtro, setFiltro }) {
  return (
    <div
      className="barra-filtros"
      role="group"
      aria-label="Filtrar viagens por tipo"
    >
      {categorias.map((categoria) => (
        <button
          key={categoria}
          type="button"
          className={
            filtro === categoria
              ? "filtro filtro--ativo"
              : "filtro"
          }
          aria-pressed={filtro === categoria}
          onClick={() => setFiltro(categoria)}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}

export default Filtros;