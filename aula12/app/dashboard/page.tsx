'use client';

import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  ChartData,
  ChartOptions,
  DefaultDataPoint,
} from 'chart.js';
import 'chart.js/auto';

import MetricCard from './MetricCard';
import styles from './dashboard.module.css';

/* ───────── Tipagens ───────── */
type Range = '7d' | '30d';

interface MetricSet {
  users: number;
  sales: number;
  revenue: number;
}

type MetricsMap = Record<Range, MetricSet>;
type LineData   = ChartData<'line', DefaultDataPoint<'line'>>;
type ChartMap   = Record<Range, LineData>;

/* ───────── Mock de dados ───────── */
const metrics: MetricsMap = {
  '7d' : { users: 120, sales: 56,  revenue:  780 },
  '30d': { users: 820, sales: 310, revenue: 4320 },
};

const chartData: ChartMap = {
  '7d': {
    labels   : ['seg','ter','qua','qui','sex','sáb','dom'],
    datasets : [{ label: 'Vendas', data: [5,8,6,10,12,9,6] }],
  },
  '30d': {
    labels   : Array.from({ length: 30 }, (_, i) => String(i + 1)),
    datasets : [{ label: 'Vendas', data: [
      8,12,10,9,14,13,12,11,16,15,
      17,19,18,20,21,18,17,23,21,20,
      19,18,22,24,23,25,24,22,21,20
      ],
      }],
  },
};

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
};

/* ───────── Componente ───────── */
export default function Dashboard() {
  const [range, setRange] = useState<Range>('7d');

  const { users, sales, revenue } = metrics[range];

  return (
    <div className={styles.dashboard}>
      <h1>Mini Dashboard</h1>

      {/* filtro */}
      <div className={styles.filter}>
        <label htmlFor="range">Período:</label>
        <select
          id="range"
          value={range}
          onChange={e => setRange(e.target.value as Range)}
        >
          <option value="7d">Últimos 7 dias</option>
          <option value="30d">Últimos 30 dias</option>
        </select>
      </div>

      {/* métricas */}
      <div className={styles.metrics}>
        <MetricCard label="Usuários" value={users} />
        <MetricCard label="Pedidos"  value={sales} />
        <MetricCard label="Receita"  value={`R$ ${revenue}`} />
      </div>

      {/* gráfico */}
      <div className={styles.chartWrapper}>
        <Line data={chartData[range]} options={chartOptions} />
      </div> 
    </div>
  );
}
