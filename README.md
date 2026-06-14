# Calculadora de Impacto Verde

Uma página única que mostra quanto de CO₂, água e energia você poupa em um ano com hábitos simples do dia a dia: pedalar, comer vegetariano, reciclar, tomar banhos mais curtos e trocar lâmpadas por LED. A ideia é tornar visível uma coisa que normalmente fica invisível — o efeito acumulado de pequenas escolhas.

![licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-2e7d32)
![React + Vite](https://img.shields.io/badge/React-Vite-0277bd)

## Funcionalidades

- Cinco hábitos ajustáveis: km de bike, refeições vegetarianas, kg reciclados, minutos de banho e lâmpadas LED.
- Resultados que atualizam na hora, conforme você digita.
- Quatro métricas anuais: CO₂ evitado, água economizada, energia poupada e equivalência em árvores.
- Gráfico de barras comparando CO₂, água e energia.
- Tema claro e escuro, com a preferência salva no navegador.
- Ícones do `react-icons` e layout que funciona bem no celular.

## Como rodar

Precisa do [Node.js](https://nodejs.org/) 18 ou superior.

```bash
git clone https://github.com/seu-usuario/calculadora-impacto-verde.git
cd calculadora-impacto-verde
npm install
npm run dev
```

Abra o endereço que o terminal mostrar (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build     # gera a pasta dist/
npm run preview   # pré-visualiza a build
```

## Tecnologias

- React + Vite
- Recharts (gráfico)
- react-icons (ícones)
- CSS puro, sem framework de UI

Todo o cálculo roda no navegador, com `useState` e `useMemo`. Não há back-end.

## Sobre os cálculos

Os números são estimativas para fins educativos, baseadas em fatores médios. Não são uma medição exata: fatores de emissão variam conforme país, matriz energética, tipo de alimento e metodologia.

| Hábito | Fator | Cálculo anual |
| --- | --- | --- |
| Pedalar em vez de dirigir | 0,19 kg CO₂/km | km × 0,19 × 52 |
| Refeição vegetariana | 2,5 kg CO₂ + 1500 L de água | refeições × fator × 52 |
| Reciclagem | 1,0 kg CO₂/kg | kg × 1,0 × 52 |
| Banho mais curto | 9 L/min | min × 9 × 365 |
| Lâmpada LED | 43,8 kWh/ano por lâmpada | lâmpadas × 43,8 |

A equivalência em árvores usa `CO₂ total ÷ 21`, partindo de uma árvore que absorve cerca de 21 kg de CO₂ por ano. Tudo é arredondado com `Math.round`.

Os fatores ficam em `src/data/fatores.js` e o cálculo em `src/utils/calculos.js`, então é fácil ajustar os valores ou trocar as fontes. Para números mais rigorosos, vale consultar [EPA](https://www.epa.gov/), [IPCC](https://www.ipcc.ch/) e [Our World in Data](https://ourworldindata.org/).

## Deploy

**Vercel:** importe o repositório. O framework é detectado como Vite (build `npm run build`, saída `dist`).

**GitHub Pages:** ajuste `base` no `vite.config.js` para `'/calculadora-impacto-verde/'`, rode o build e publique a pasta `dist/`.

## Licença

MIT. Veja o arquivo [LICENSE](LICENSE).
