import styles from './dashboard.module.css';

interface CardProps {
  label: string;
  value: number | string;
}

export default function MetricCard({ label, value }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  );
}
