import {
  FATORES,
  SEMANAS_NO_ANO,
  DIAS_NO_ANO,
  CO2_POR_ARVORE,
} from '../data/fatores.js'

// Converte um valor qualquer em numero >= 0, evitando NaN.
function numeroSeguro(valor) {
  const n = Number(valor)
  return Number.isFinite(n) && n > 0 ? n : 0
}

/**
 * Função pura que calcula o impacto ambiental ANUAL a partir dos hábitos.
 *
 * @param {Object} habitos
 * @param {number} habitos.bike         - km de bike por semana
 * @param {number} habitos.vegetariano  - refeições vegetarianas por semana
 * @param {number} habitos.reciclagem   - kg reciclados por semana
 * @param {number} habitos.banho        - minutos de banho economizados por dia
 * @param {number} habitos.led          - lâmpadas trocadas por LED
 * @returns {{co2: number, agua: number, energia: number, arvores: number}}
 */
export function calcularImpacto(habitos = {}) {
  const bike = numeroSeguro(habitos.bike)
  const vegetariano = numeroSeguro(habitos.vegetariano)
  const reciclagem = numeroSeguro(habitos.reciclagem)
  const banho = numeroSeguro(habitos.banho)
  const led = numeroSeguro(habitos.led)

  // CO2 evitado (kg/ano)
  const co2Bike = bike * FATORES.bike.co2PorKm * SEMANAS_NO_ANO
  const co2Veg = vegetariano * FATORES.vegetariano.co2PorRefeicao * SEMANAS_NO_ANO
  const co2Reciclagem = reciclagem * FATORES.reciclagem.co2PorKg * SEMANAS_NO_ANO
  const co2 = co2Bike + co2Veg + co2Reciclagem

  // Água economizada (L/ano)
  const aguaVeg = vegetariano * FATORES.vegetariano.aguaPorRefeicao * SEMANAS_NO_ANO
  const aguaBanho = banho * FATORES.banho.aguaPorMinuto * DIAS_NO_ANO
  const agua = aguaVeg + aguaBanho

  // Energia poupada (kWh/ano)
  const energia = led * FATORES.led.kwhPorAno

  // Equivalência em árvores
  const arvores = co2 / CO2_POR_ARVORE

  return {
    co2: Math.round(co2),
    agua: Math.round(agua),
    energia: Math.round(energia),
    arvores: Math.round(arvores),
  }
}
