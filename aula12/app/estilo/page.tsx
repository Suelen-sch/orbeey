// 1. CSS Modules
import styles from './estilo.module.css';

export default function Estilo() {
    return (
        <div>
            {/* CSS Modules */}
            <h1 className={styles.titulo}>Estilo com CSS Modules</h1>
            {/* Inline Style */}
            <span style={{ color: 'blue', fontSize: '20px' }}>
                Exemplo com Inline Style
            </span>
            <div className="exemplo-global-css">
                Exemplo com Global CSS
            </div>
        </div>
    );
}