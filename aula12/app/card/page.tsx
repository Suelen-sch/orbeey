type CardProps = {
    produto: string;
    valor: string;
  };
  
 export default function Card({ produto, valor }: CardProps) {
    return (
      <div style={{ border: '1px solid #ccc', padding: 12, margin: 8, borderRadius: 8 }}>
        <h3>{produto}</h3>
        <p>{valor}</p>
      </div>
    );
  }
  