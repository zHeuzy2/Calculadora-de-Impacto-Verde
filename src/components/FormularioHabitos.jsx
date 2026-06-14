import {
  FaBicycle,
  FaLeaf,
  FaRecycle,
  FaShower,
  FaLightbulb,
} from 'react-icons/fa'
import { CAMPOS_HABITOS } from '../data/fatores.js'

const ICONES = {
  bike: FaBicycle,
  vegetariano: FaLeaf,
  reciclagem: FaRecycle,
  banho: FaShower,
  led: FaLightbulb,
}

export default function FormularioHabitos({ habitos, onChange }) {
  function handleChange(id, valor) {
    if (valor === '') {
      onChange(id, '')
      return
    }
    const numero = Math.max(0, Number(valor))
    onChange(id, numero)
  }

  return (
    <form className="formulario" onSubmit={(e) => e.preventDefault()}>
      <h2 className="secao-titulo">Seus hábitos</h2>
      {CAMPOS_HABITOS.map((campo) => {
        const Icone = ICONES[campo.id]
        return (
          <div className="campo" key={campo.id}>
            <label htmlFor={campo.id}>
              <span className="campo-icone" aria-hidden="true">
                <Icone />
              </span>
              <span className="campo-rotulo">
                {campo.rotulo}
                <small className="campo-unidade">{campo.unidade}</small>
              </span>
            </label>
            <input
              id={campo.id}
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              placeholder="0"
              value={habitos[campo.id]}
              onChange={(e) => handleChange(campo.id, e.target.value)}
            />
          </div>
        )
      })}
    </form>
  )
}
