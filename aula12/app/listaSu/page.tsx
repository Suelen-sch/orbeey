' use client '
import Link from 'next/link';
import styles from './listaSu.module.css';

export default function Lista() {
    const produtos = ["Onix LT", "HB20 Comfort", "Corolla Altis", "Civic Touring", "T-Cross Highline", "Compass Longitude", "Pulse Drive", "Hilux SRX", "Toro Volcano", "Kwid Zen"];

    const produtosObejto = [
        { nome: "Onix LT", marca: "Chevrolet", ano: "2024", motor: "1.0 Turbo Flex", preco: 84.990 },
        { nome: "HB20 Comfort", marca: "Hyundai", ano: "2024", motor: "1.0 Flex", preco: 77.990 },
        { nome: "Corolla Altis", marca: "Toyota", ano: "2024", motor: "2.0 Flex", preco: 159.900 },
        { nome: "Civic Touring", marca: "Honda", ano: "2023", motor: "1.5 Turbo", preco: 200.000 },
        { nome: "T-Cross Highline", marca: "Volkswagen", ano: "2024", motor: "1.4 TSI", preco: 159.000 },
        { nome: "Compass Longitude", marca: "Jeep", ano: "2024", motor: "1.3 Turbo Flex", preco: 175.000 },
        { nome: "Pulse Drive", marca: "Fiat", ano: "2024", motor: "1.0 Turbo", preco: 110.000 },
        { nome: "Hilux SRX", marca: "Toyota", ano: "2024", motor: "2.8 Diesel", preco: 32.0000 },
        { nome: "Toro Volcano", marca: "Fiat", ano: "2024", motor: "2.0 Diesel", preco: 175.000 },
        { nome: "Kwid Zen", marca: "Renault", ano: "2024", motor: "1.0 Flex", preco: 69.990 }
    ];

    return (
        <div className={styles.container}>
             <h2 className={styles.titulo}>Lista de Produtos em objeto</h2>
            <ul className={styles.lista}>

                {produtosObejto.map((item, index) => (
                    <li key={index} className={styles.item}>
                        <strong className={styles.marca}>{item.nome} - </strong>
                        <strong className={styles.marca}>{item.marca}</strong>-
                        <strong className={styles.marca}>{item.ano}</strong>-
                        <strong className={styles.marca}>s{item.motor}</strong>-
                        <span className={styles.preco}>R$ {item.preco.toFixed(3)}</span>
                            <Link href={{
                                pathname: "/", 
                                query: {item: item.nome}
                            }}><button type='submit' className={styles.btn}>Detalhes</button></Link>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}
