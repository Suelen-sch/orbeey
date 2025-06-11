import Card from "../page";

export default function cardsSend() {
    return (
      <div>
        <h2>Produtos</h2>
        <Card produto="teste" valor="R$4449,90" />
        <Card produto="Teclado" valor="R$69,90" />
        <Card produto="Monitor" valor="R$459,90" />
      </div>
    );
  }