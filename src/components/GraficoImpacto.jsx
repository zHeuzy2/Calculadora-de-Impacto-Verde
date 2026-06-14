import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from 'recharts'

const formatador = new Intl.NumberFormat('pt-BR')

export default function GraficoImpacto({ resultado, tema }) {
  const escuro = tema === 'escuro'
  const corEixo = escuro ? '#9fb8a6' : '#557a60'
  const corGrade = escuro ? '#2a3a30' : '#dce8df'

  const dados = [
    { nome: 'CO₂ (kg)', valor: resultado.co2, cor: '#43a047' },
    { nome: 'Água (L)', valor: resultado.agua, cor: '#039be5' },
    { nome: 'Energia (kWh)', valor: resultado.energia, cor: '#f9a825' },
  ]

  return (
    <section className="grafico">
      <h2 className="secao-titulo">Comparativo anual</h2>
      <div className="grafico-area">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={dados}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={corGrade} />
            <XAxis dataKey="nome" tick={{ fontSize: 12, fill: corEixo }} stroke={corGrade} />
            <YAxis
              tick={{ fontSize: 12, fill: corEixo }}
              stroke={corGrade}
              tickFormatter={(v) => formatador.format(v)}
              width={70}
            />
            <Tooltip
              formatter={(valor) => formatador.format(valor)}
              cursor={{ fill: 'rgba(67, 160, 71, 0.1)' }}
              contentStyle={
                escuro
                  ? { background: '#1c2722', border: '1px solid #2a3a30', borderRadius: 10, color: '#e8f1ea' }
                  : { borderRadius: 10 }
              }
            />
            <Bar dataKey="valor" radius={[8, 8, 0, 0]}>
              {dados.map((item) => (
                <Cell key={item.nome} fill={item.cor} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="grafico-nota">
        As três métricas usam escalas diferentes (kg, litros e kWh). O gráfico
        serve para comparar a proporção entre os seus próprios números.
      </p>
    </section>
  )
}
