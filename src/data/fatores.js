// Fatores de conversão educativos (valores aproximados).
// As fontes e o aviso estão detalhados no README.

export const SEMANAS_NO_ANO = 52
export const DIAS_NO_ANO = 365

// CO2 absorvido por uma árvore em um ano (kg).
export const CO2_POR_ARVORE = 21

export const FATORES = {
  // Pedalar em vez de dirigir: 0,19 kg CO2 evitado por km.
  bike: {
    co2PorKm: 0.19,
  },
  // Refeição vegetariana: 2,5 kg CO2 + 1500 L de água poupados por refeição.
  vegetariano: {
    co2PorRefeicao: 2.5,
    aguaPorRefeicao: 1500,
  },
  // Reciclagem: 1,0 kg CO2 evitado por kg reciclado.
  reciclagem: {
    co2PorKg: 1.0,
  },
  // Banho mais curto: 9 L de água economizados por minuto.
  banho: {
    aguaPorMinuto: 9,
  },
  // Lâmpada LED: 43,8 kWh economizados por ano por lâmpada trocada.
  led: {
    kwhPorAno: 43.8,
  },
}

// Definição dos campos do formulário, usada para renderizar os inputs.
// O ícone de cada campo é resolvido no componente FormularioHabitos.
export const CAMPOS_HABITOS = [
  {
    id: 'bike',
    rotulo: 'Km de bike no lugar do carro',
    unidade: 'km por semana',
  },
  {
    id: 'vegetariano',
    rotulo: 'Refeições vegetarianas',
    unidade: 'por semana',
  },
  {
    id: 'reciclagem',
    rotulo: 'Kg reciclados',
    unidade: 'kg por semana',
  },
  {
    id: 'banho',
    rotulo: 'Minutos de banho economizados',
    unidade: 'minutos por dia',
  },
  {
    id: 'led',
    rotulo: 'Lâmpadas trocadas por LED',
    unidade: 'quantidade',
  },
]
