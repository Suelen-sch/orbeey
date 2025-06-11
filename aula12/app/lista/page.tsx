import styles from './lista.module.css';

export default function Lista() {
    const produtos = ["Banana", "Arroz", "Maçã", "Feijão", "Leite", "Pão", "Café", "Ovo", "Carne", "Queijo"];

  const produtosObejto = [
    { nome: "Banana", preco: 3.50 },
    { nome: "Arroz", preco: 12.00 },
    { nome: "Maçã", preco: 5.20 },
    { nome: "Feijão", preco: 8.90 },
    { nome: "Leite", preco: 4.50 },
    { nome: "Pão", preco: 6.00 },
    { nome: "Café", preco: 15.00 },
    { nome: "Ovo", preco: 10.00 },
    { nome: "Carne", preco: 35.00 },
    { nome: "Queijo", preco: 22.00 }
    ];
    
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Lista de Produtos</h2>
          <ul className={styles.lista}>


        {produtos.map((nome, posicao) => (
            
            <li key={posicao} className={styles.item}>
                {nome}
            </li>
        ))}
              
      </ul>

      <h2 className={styles.titulo}>Lista de Produtos em objeto</h2>
          <ul className={styles.lista}>
              
        {produtosObejto.map((item, index) => (
          <li key={index} className={styles.item}>
            {item.nome} - <span className={styles.preco}>R$ {item.preco.toFixed(2)}</span>
          </li>
        ))}
              
      </ul>
    </div>
  );
}