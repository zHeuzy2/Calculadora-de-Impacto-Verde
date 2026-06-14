import { FaGlobeAmericas, FaTint, FaBolt, FaTree } from 'react-icons/fa'

const formatador = new Intl.NumberFormat('pt-BR')

function formatar(valor) {
  return formatador.format(valor)
}

export default function PainelResultados({ resultado }) {
  const cards = [
    {
      id: 'co2',
      Icone: FaGlobeAmericas,
      titulo: 'CO₂ evitado',
      valor: formatar(resultado.co2),
      unidade: 'kg / ano',
      cor: 'card-co2',
    },
    {
      id: 'agua',
      Icone: FaTint,
      titulo: 'Água economizada',
      valor: formatar(resultado.agua),
      unidade: 'litros / ano',
      cor: 'card-agua',
    },
    {
      id: 'energia',
      Icone: FaBolt,
      titulo: 'Energia poupada',
      valor: formatar(resultado.energia),
      unidade: 'kWh / ano',
      cor: 'card-energia',
    },
    {
      id: 'arvores',
      Icone: FaTree,
      titulo: 'Equivale a plantar',
      valor: formatar(resultado.arvores),
      unidade: resultado.arvores === 1 ? 'árvore' : 'árvores',
      cor: 'card-arvores',
    },
  ]

  return (
    <section className="painel-resultados" aria-live="polite">
      <h2 className="secao-titulo">Seu impacto em 1 ano</h2>
      <div className="cards">
        {cards.map((card) => {
          const Icone = card.Icone
          return (
            <div className={`card ${card.cor}`} key={card.id}>
              <span className="card-icone" aria-hidden="true">
                <Icone />
              </span>
              <span className="card-valor">{card.valor}</span>
              <span className="card-unidade">{card.unidade}</span>
              <span className="card-titulo">{card.titulo}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
