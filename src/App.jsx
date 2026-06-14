import { useEffect, useMemo, useState } from 'react'
import { FaMoon, FaSun, FaExclamationTriangle } from 'react-icons/fa'
import FormularioHabitos from './components/FormularioHabitos.jsx'
import PainelResultados from './components/PainelResultados.jsx'
import GraficoImpacto from './components/GraficoImpacto.jsx'
import { calcularImpacto } from './utils/calculos.js'

const HABITOS_INICIAIS = {
  bike: '',
  vegetariano: '',
  reciclagem: '',
  banho: '',
  led: '',
}

function temaInicial() {
  const salvo = localStorage.getItem('tema')
  if (salvo === 'claro' || salvo === 'escuro') return salvo
  const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefereEscuro ? 'escuro' : 'claro'
}

export default function App() {
  const [habitos, setHabitos] = useState(HABITOS_INICIAIS)
  const [tema, setTema] = useState(temaInicial)

  const resultado = useMemo(() => calcularImpacto(habitos), [habitos])

  useEffect(() => {
    document.documentElement.setAttribute('data-tema', tema)
    localStorage.setItem('tema', tema)
  }, [tema])

  function atualizarHabito(id, valor) {
    setHabitos((anterior) => ({ ...anterior, [id]: valor }))
  }

  function alternarTema() {
    setTema((atual) => (atual === 'escuro' ? 'claro' : 'escuro'))
  }

  return (
    <div className="app">
      <header className="cabecalho">
        <button
          type="button"
          className="botao-tema"
          onClick={alternarTema}
          aria-label={tema === 'escuro' ? 'Ativar tema claro' : 'Ativar tema escuro'}
          title={tema === 'escuro' ? 'Tema claro' : 'Tema escuro'}
        >
          {tema === 'escuro' ? <FaSun /> : <FaMoon />}
        </button>
        <h1>Calculadora de Impacto Verde</h1>
        <p className="subtitulo">
          Veja quanto de CO₂, água e energia você poupa em um ano com seus
          hábitos do dia a dia.
        </p>
      </header>

      <main className="conteudo">
        <FormularioHabitos habitos={habitos} onChange={atualizarHabito} />

        <div className="resultados-coluna">
          <PainelResultados resultado={resultado} />
          <GraficoImpacto resultado={resultado} tema={tema} />
        </div>
      </main>

      <p className="aviso">
        <FaExclamationTriangle aria-hidden="true" />
        <span>
          Os números são estimativas educativas, calculadas a partir de fatores
          médios de conversão. Trate-os como uma referência, não como medição
          exata.
        </span>
      </p>
    </div>
  )
}
